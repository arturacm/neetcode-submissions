class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        const visited = new Set<string>();

        let maxSize = 0;
        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ] as const;

        function search(iCenter: number, jCenter: number): number {
            let islandSize = 0;
            for (let [di, dj] of directions) {
                let i = iCenter + di;
                let j = jCenter + dj;
                if (i >= grid.length || j >= grid[iCenter].length || i < 0 || j < 0) continue;
                if (grid[i][j] === 0) continue;
                if (visited.has(`${i}:${j}`)) continue;

                visited.add(`${i}:${j}`);
                islandSize += search(i, j) + 1;
            }

            return islandSize;
        }

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 0) continue;
                if (visited.has(`${i}:${j}`)) continue;

                visited.add(`${i}:${j}`);
                const currentSearch = search(i, j) + 1;

                maxSize = Math.max(maxSize, currentSearch);
            }
        }
        return maxSize;
    }
}
