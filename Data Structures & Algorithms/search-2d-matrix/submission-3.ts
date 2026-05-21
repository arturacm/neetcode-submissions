class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        if (matrix.length == 0) return false;

        let left = 0;
        let right = matrix.length -1;

        let row = null;
        while (left <= right){
            if (right === matrix.length -1 && target > matrix[right][0]){
                row  = right;
                break
            }
            let mid = Math.floor((right + left)/2);

            if (matrix[mid][0] === target){
                return true;
            } 

            if (matrix[mid][0] <= target && matrix[mid][matrix[mid].length - 1] >= target){
                row = mid;
                break;
            }

            if (matrix[mid][0] > target){
                right = mid - 1;
            } else {
                left = mid + 1
            }
        }

        if (row === null) return false;
        
        left = 0;
        right = matrix[row].length -1;

        while (left <= right){
            let mid = Math.floor((right + left)/2);

            if (matrix[row][mid] === target){
                return true;
            } 

            if (matrix[row][mid] > target){
                right = mid - 1;
            } else {
                left = mid + 1
            }
        }
        return false
    }
}
