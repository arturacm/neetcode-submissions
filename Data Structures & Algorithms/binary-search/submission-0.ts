class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        if (nums.length == 0) return -1;

        let left = 0;
        let right = nums.length - 1;

        while (left <= right){
            let mid = Math.floor((right+left)/2);
            if (nums[mid] === target) return mid;

            if (nums[mid] > target){
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return -1 ;
    }
}
