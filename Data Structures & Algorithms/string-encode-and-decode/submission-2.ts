class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res = "";

        for (let str of strs){
            res += `${str.length}#${str}`
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res = [];
        let len = Number(str[0]) ;
        for (let i = 1; i< str.length; i++){
            let char = str[i];

            if (char  === "#" ){
                res.push(str.substring(i+1, i + 1 + len));
                i += len;
                len = 0;
            } else {
                len = len*10 + Number(char);
            }
        }
        return res


    }
}
