class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {

        let slow = nums[0];
        let fast = nums[0];
        fast = nums[fast];

        while (slow != fast){
            slow = nums[slow];
            fast = nums[fast];
            fast = nums[fast];
        }

        slow = 0;
        while (slow != fast){
            slow = nums[slow];
            fast = nums[fast];
        }
        return slow
    }
}
