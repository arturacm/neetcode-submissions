class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const ref = new Array(26).fill(0);

        const getIndexFromChar = (c: string) => c.charCodeAt(0) - 97;

        s1.split("").forEach((c) => {
            let i = getIndexFromChar(c);
            ref[i] += 1;
        });

        const current = new Array(26).fill(0);

        s2.substring(0, s1.length)
            .split("")
            .forEach((c) => {
                let i = getIndexFromChar(c);
                current[i] += 1;
            });

        if (ref.join("") === current.join("")) return true;

        for (let i = 0; i < s2.length - s1.length; i++) {
            let cOut = s2[i];
            let outI = getIndexFromChar(cOut);
            current[outI]--;

            let cIn = s2[i + s1.length];
            let inI = getIndexFromChar(cIn);
            current[inI]++;

            if (ref.join("") === current.join("")) return true;
        }
        return false;
    }
}
