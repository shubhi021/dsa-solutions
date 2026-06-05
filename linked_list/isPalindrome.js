
var isPalindrome = function(head) {
    if(!head && !head.next)
    return true;
    
    //middle 
    let slow = head;
    let fast = head;

    while (fast && fast.next)
    {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse
    let prev = null;
    let cur = slow;

    while(cur)
    {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    let first = head;
    let second = prev;

    while(second)
    {
        if(first.val != second.val)
        {
            return false;
        }
        first = first.next;
        second = second.next;
    }
    return true;
};
