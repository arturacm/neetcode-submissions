class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {

        const found = new Set<number>();

        for (let num of nums){
            if (found.has(num)){
                return num;
            }
            found.add(num)
        }
    }
}
