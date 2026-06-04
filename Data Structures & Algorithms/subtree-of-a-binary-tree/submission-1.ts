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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSameTree(q: TreeNode| null, p: TreeNode | null): boolean{
            if (q === null && p === null) return true;

            if (q === null || p === null) return false;

            if (q.val !== p.val) return false;

            return this.isSameTree(q.left, p.left) && this.isSameTree(q.right, p.right);
        
        }


    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (subRoot === null) return true;
        if (root === null) return false;
        
        if (this.isSameTree(root, subRoot)) return true;

        if (this.isSubtree(root.left, subRoot)) return true;
        if (this.isSubtree(root.right, subRoot)) return true;

        return false

    }
}
