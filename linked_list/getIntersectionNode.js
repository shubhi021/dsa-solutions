var getIntersectionNode = function (headA, headB) {
    if (headA == null || headB == null) return null;

    let p = headA;
    let q = headB;

    while (p != q) {
        if (p == null) {
            p = headB;
        }
        else {
            p = p.next;
        }
        if (q == null) {
            q = headA;
        } else {
            q = q.next;
        }
   
    }
     return p;
};
