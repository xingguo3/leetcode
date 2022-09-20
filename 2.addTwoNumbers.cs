/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
        return add(l1, l2);
    }
    public ListNode add(ListNode l1, ListNode l2, int carry=0){
        if(l1 ==null && l2 == null && carry == 0){
            return null;
        }
        var remain = 0;
        remain = (l1==null? 0: l1.val) + (l2==null? 0: l2.val) + carry;
        
        if(remain>9){
            carry = 1;
            remain = remain % 10;
        }else{
            carry= 0;
        }
        return new ListNode(remain, add(l1?.next, l2?.next, carry));
    }
}