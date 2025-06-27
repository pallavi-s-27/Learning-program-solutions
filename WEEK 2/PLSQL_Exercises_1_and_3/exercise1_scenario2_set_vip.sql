-- Add column first if not exists
ALTER TABLE Customers ADD IsVIP VARCHAR2(5);

BEGIN
  FOR rec IN (SELECT * FROM Customers) LOOP
    IF rec.Balance > 10000 THEN
      UPDATE Customers
      SET IsVIP = 'TRUE'
      WHERE CustomerID = rec.CustomerID;
    END IF;
  END LOOP;
  COMMIT;
END;