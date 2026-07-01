var insertionSortList = function (head) {
    let dummy = new ListNode(0);
    while (head) {
        let prev = dummy;
        let next = head.next;

        while (prev.next && prev.next.val < head.val) {
            prev = prev.next;
        }
        head.next = prev.next;
        prev.next = head;
        head = next;
    }
    return dummy.next;
}
