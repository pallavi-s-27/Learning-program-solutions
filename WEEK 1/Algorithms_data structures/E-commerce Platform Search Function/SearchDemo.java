import java.util.Arrays;
import java.util.Comparator;

public class SearchDemo {
    // Linear Search
    public static int linearSearch(Product[] products, String name) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productName.equalsIgnoreCase(name)) {
                return i;
            }
        }
        return -1;
    }

    // Binary Search (array must be sorted)
    public static int binarySearch(Product[] products, String name) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(name);
            if (cmp == 0) return mid;
            else if (cmp < 0) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Shoes", "Footwear"),
            new Product(2, "Shirt", "Clothing"),
            new Product(3, "Watch", "Accessories")
        };

        // Binary Search: must sort array first
        Arrays.sort(products, Comparator.comparing(p -> p.productName));

        String searchName = "Watch";

        int linIndex = linearSearch(products, searchName);
        System.out.println("Linear Search: Found at index " + linIndex);

        int binIndex = binarySearch(products, searchName);
        System.out.println("Binary Search: Found at index " + binIndex);
    }
}
