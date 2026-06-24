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

        function addValue(root: TreeNode | null): number[]{
            if (root === null) return;
            const list = [root.val];

            if (root.left) list.unshift(...addValue(root.left))
            
            if (root.right) list.push(...addValue(root.right))

            return list;
        }


        return addValue(root)[k-1];

    }
}
