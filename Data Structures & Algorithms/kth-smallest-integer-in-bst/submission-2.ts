/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        // brute force? 
        // search ALL values in tree and add to an array
        // sort the array
        // find the Kth item in the array.

        // OR add items WHILE sorting...
        // wait, its already sorted 0.0

        const values = [root.val];

        function addValue(root: TreeNode | null): void{
            if (root === null) return;

            if (root.left !== null){
                values.unshift(root.left.val);
                addValue(root.left);
            }
            if (root.right !== null){
                values.push(root.right.val);
                addValue(root.right);
            }
        }
        addValue(root);

        return values.sort((a,b)=>a-b)[k-1];

    }
}
