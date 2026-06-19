class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const count = new Map<string, number>([[s[0], 1]]);
        let left = 0;
        let right = 0;
        let totalMax = 0;

        while (left <= right && right < s.length) {
            const maxCount = Math.max(...count.values());
            const length = right - left + 1;
            if (maxCount + k >= length) {
                totalMax = Math.max(totalMax, length);
                right++;
                count.set(s[right], (count.get(s[right]) ?? 0) + 1);
            } else {
                count.set(s[left], count.get(s[left]) - 1);
                left++;
            }
        }
        return totalMax;
    }
}
