class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const prefix = [];

        let acc = 1;
        for (let num of nums){
            acc = num * acc;
            prefix.push(acc);
        }

        const postfix = [];

        acc = 1;
        for (let i = nums.length - 1; i>=0; i--){
            acc = nums[i] * acc;
            postfix.unshift(acc);
        }

        return nums.map((_, i)=>{
            const prefixNum = i > 0 ? prefix[i-1]: 1;
            const postfixNum = i< nums.length-1 ? postfix[i+1]: 1;
            return prefixNum * postfixNum;
        })
    }
}
