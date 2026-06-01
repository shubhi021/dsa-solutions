//3 pointer method (prev, current, next)
var reverseList = function(head) {
    let current = head;
    let prev = null;

    while(current != null)
    {
        next = current.next;
        current.next = prev;
        prev= current;
        current = next ;

    }
    return prev;
};
