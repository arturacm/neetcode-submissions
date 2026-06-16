class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {

        const sorted = nums.sort((a, b) => a - b);

        let k = 0;
        let left = 1;
        let right = nums.length - 1;
        const res = [];

        const found = new Set<string>()

        while (k < left && left < right) {
            let sum = sorted[k] + sorted[left] + sorted[right];
            if (sum === 0 && !found.has(`${sorted[k]}, ${sorted[left]} , ${sorted[right]}`)) {
                res.push([sorted[k], sorted[left] , sorted[right]]);
                found.add(`${sorted[k]}, ${sorted[left]} , ${sorted[right]}`)
            }

            if (sum > 0) {
                right--;
            } else {
                left++;
            }

            if (left === right) {
                k++;
                left = k + 1;
                right = sorted.length - 1;
            }
        }
        return res;
    }
}
