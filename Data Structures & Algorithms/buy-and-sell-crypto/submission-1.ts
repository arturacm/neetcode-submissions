class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let left = 0;
        let right = 1;

        while (left < right && right < prices.length) {
            let buy = prices[left];
            let sell = prices[right];

            if (sell <= buy) {
                left = right;
            } else {
                maxProfit = Math.max(maxProfit, sell - buy);
            }
            right++;
        }
        return maxProfit;
    }
}
