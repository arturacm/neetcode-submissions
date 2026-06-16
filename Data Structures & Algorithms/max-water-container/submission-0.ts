class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;
        let max = 0;

        while (left < right) {
            let current = Math.min(heights[left], heights[right]) * (right - left);

            max = Math.max(current, max);

            if (heights[left] < heights[right]) {
                let newLeft = left + 1;
                while (heights[left] > heights[newLeft] && left < right) newLeft++;
                left = newLeft;
            } else {
                let newRight = right - 1;
                while (heights[right] > heights[newRight] && left < right) newRight--;
                right = newRight
            }
        }
        return max
    }
}
