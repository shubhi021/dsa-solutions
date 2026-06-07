var removeElement = function(head, val) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let curr = dummy;

    while (curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return dummy.next;
};
