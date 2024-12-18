import java.util.HashSet;

public class game01 {

    public int[] found(int arr[], int n){
        HashSet<Integer> nums = new HashSet<Integer>();

        for (int i = 0; i < arr.length; i++) {
            int actual = arr[i];
            if(nums.contains(actual)){
                int nArr[] = {n - actual, actual};
                return nArr;
            }
            nums.add(n - actual);
        }
        return null;
    }

    public static void main(String[] args) {

        int arr[] = {2, 5, 8, 14 ,0};

        game01 obj = new game01();

        int[] result = obj.found(arr, 10);

        for (int i = 0; i < result.length; i++) {
            System.out.println(result[i]);
        }

    }
}
