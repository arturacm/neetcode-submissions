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
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        let diameter = 0;

        function recursive(root: TreeNode | null): number {
            if (root === null) return 0;

            const left = recursive(root.left);
            const right = recursive(root.right);

            diameter = Math.max(diameter, left + right);
            return Math.max(left,right) + 1;
        }
        recursive(root);

        return diameter;
    }
}
