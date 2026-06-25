class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const res = new Array(temperatures.length).fill(0);

        const stack = new Array<{ temp: number; index: number }>();

        for (let i = 0; i < temperatures.length; i++) {
            let t = temperatures[i];

            while (stack.length > 0 && t > stack[stack.length - 1].temp) {
                const { temp, index } = stack.pop();
                res[index] = i - index;
            }
            stack.push({ temp: t, index: i });

        }
        return res;
    }
}
