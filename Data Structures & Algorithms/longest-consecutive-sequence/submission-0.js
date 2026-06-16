class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seen = new Set(nums);
        
        let max = 0;
        for (let num of nums){
            let current = 0;
            while (seen.has(num)){
                num++;
                current++;
            }
            max = Math.max(current, max)
        }
        return max
    }
}
// Since the risks were too ghi