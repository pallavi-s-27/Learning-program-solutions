CREATE OR REPLACE PROCEDURE TransferFunds(
  fromAccount IN NUMBER,
  toAccount IN NUMBER,
  amount IN NUMBER
) IS
  insufficient_funds EXCEPTION;
BEGIN
  DECLARE
    from_balance NUMBER;
  BEGIN
    SELECT Balance INTO from_balance FROM Accounts WHERE AccountID = fromAccount;

    IF from_balance < amount THEN
      RAISE insufficient_funds;
    END IF;

    UPDATE Accounts SET Balance = Balance - amount WHERE AccountID = fromAccount;
    UPDATE Accounts SET Balance = Balance + amount WHERE AccountID = toAccount;
    COMMIT;
  EXCEPTION
    WHEN insufficient_funds THEN
      DBMS_OUTPUT.PUT_LINE('Transfer failed: insufficient balance.');
      ROLLBACK;
  END;
END;