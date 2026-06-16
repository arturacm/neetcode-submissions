class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const columns = new Array(board[0].length).fill(null).map(() => new Set());
        const lines = new Array(board[0].length).fill(null).map(() => new Set());
        const squares = new Map<string, Set<string>>();

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                let num = board[i][j];
                if (num == ".") continue;

                const seenLin = lines[i];
                if (seenLin.has(num)) {
                    return false;
                } else {
                    seenLin.add(num);
                }

                const seenCol = columns[j];
                if (seenCol.has(num)) {
                    return false;
                } else {
                    seenCol.add(num);
                }

                const squaresKey = `${Math.floor(i / 3)}:${Math.floor(j / 3)}`;
                let seenSquares;
                if (squares.has(squaresKey)) {
                    seenSquares = squares.get(squaresKey);
                } else {
                    seenSquares = new Set<string>();
                    squares.set(squaresKey, seenSquares);
                }
                if (seenSquares.has(num)) {
                    return false;
                } else {
                    seenSquares.add(num);
                }
            }
        }
        return true;
    }
}
//     function isSequenceValid(sequence: string[]): boolean {
//         const seen = new Set<string>();

//         for (let num of sequence) {
//             if (num == ".") continue;
//             if (seen.has(num)) return false;

//             seen.add(num);
//         }
//         return true;
//     }

//     // line
//     for (let line of board) {
//         if (!isSequenceValid) return false;
//     }

//     // column
//     const column = [];
//     for (let line of board) {
//     }
// }
