import org.junit.*;

import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    private Calculator calc;

    @Before
    public void setUp() {
        calc = new Calculator();
        System.out.println("Setting up test.");
    }

    @After
    public void tearDown() {
        calc = null;
        System.out.println("Cleaning up after test.");
    }

    @Test
    public void testAddition() {
        int result = calc.add(2, 3);
        assertEquals(5, result);
    }
}