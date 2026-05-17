class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const seen = new Set<string>();
        let islands = 0;

        function search(centerI: number, centerJ: number) {
            if (centerI > 0) checkAndAddToSearch(centerI - 1, centerJ);

            if (centerI < grid.length - 1) checkAndAddToSearch(centerI + 1, centerJ);

            if (centerJ > 0) checkAndAddToSearch(centerI, centerJ - 1);

            if (centerJ < grid[centerI].length - 1) checkAndAddToSearch(centerI, centerJ + 1);
        }

        function checkAndAddToSearch(i: number, j: number) {
            if (!seen.has(`${i},${j}`) && grid[i][j] == "1") {
                seen.add(`${i},${j}`);
                search(i, j);
            }
        }

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (seen.has(`${i},${j}`)) continue;

                if (grid[i][j] === "0") {
                    continue;
                }

                if (grid[i][j] === "1") {
                    islands++;
                    seen.add(`${i},${j}`);
                    search(i, j);
                }
            }
        }
        return islands;
    }
}
