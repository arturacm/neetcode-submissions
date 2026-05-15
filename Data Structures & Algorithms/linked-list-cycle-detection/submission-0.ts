/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        const visited = new Set();

        for (let current = head; current != null; current = current.next){
            console.log(visited, current)
            if (visited.has(current)){ 
                return true;
                }

            visited.add(current);
        }
        return false
    }
}
