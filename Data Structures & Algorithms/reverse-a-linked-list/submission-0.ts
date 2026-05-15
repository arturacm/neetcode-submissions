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
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {

        let newNode = null;
        for (let current = head; current != null; current = current.next){
            
            newNode = new ListNode(current?.val, newNode);

        }
        return newNode

    }
}
