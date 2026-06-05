
var reorderList = function(head) {
    if(!head || !head.next)
    return head;

    let fast = head;
    let slow = head;

    while(fast && fast.next)
    {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    let cur = slow.next;
    slow.next = null;


    while(cur)
    {
        let next = cur.next;
        cur.next = prev;
        prev= cur;
        cur= next;
    }

    let first = head;
    let second = prev;

    while(second)
    {
        let temp1 = first.next;
        let temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1;
        second = temp2;
    }
    return head;




};
