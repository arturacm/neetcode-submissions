class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const seen = new Set<string>();
        let max = 0;
        let currentS = [];
        for (let i = 0; i < s.length; i++) {
            const c = s[i];

            currentS.push(c);
            if (!seen.has(c)) {
                seen.add(c);
                max = Math.max(max, currentS.length);
            } else {
                seen.clear();
                currentS = currentS.slice(currentS.indexOf(c) + 1);
                currentS.forEach((el) => seen.add(el));
                max = Math.max(max, currentS.length);
            }
        }
        return Math.max(currentS.length, max);
    }
}
