public class Solution {
    public double FindMedianSortedArrays(int[] nums1, int[] nums2) {
        var joinList = nums1.ToList();
        joinList.AddRange(nums2.ToList());
        joinList.Sort();
        if(joinList.Count == 0)
            return 0;
        if(joinList.Count % 2 == 1){
            return joinList.ElementAt((joinList.Count-1)/2);
        }else{
            return (joinList.ElementAt(joinList.Count/2) + joinList.ElementAt(joinList.Count/2-1))/2.0;
        }
    }
}