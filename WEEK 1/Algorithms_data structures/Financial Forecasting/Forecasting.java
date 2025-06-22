public class Forecasting {

    // Recursive method to calculate future value
    public static double futureValue(double currentValue, double growthRate, int years) {
        if (years == 0) return currentValue;
        return futureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    // Optimized (tail-recursive style using loop)
    public static double futureValueOptimized(double currentValue, double growthRate, int years) {
        for (int i = 0; i < years; i++) {
            currentValue *= (1 + growthRate);
        }
        return currentValue;
    }

    public static void main(String[] args) {
        double current = 10000; // ₹10,000
        double growthRate = 0.08; // 8%
        int years = 5;

        System.out.println("Recursive Forecast: " + futureValue(current, growthRate, years));
        System.out.println("Optimized Forecast: " + futureValueOptimized(current, growthRate, years));
    }
}
