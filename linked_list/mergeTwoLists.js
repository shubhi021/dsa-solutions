var mergeTwoLists = function (list1, list2) {
    let dummyNode = new ListNode(0);
    let currentNode = dummyNode;

    while (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            currentNode.next = list1;
            list1 = list1.next;
        } else {
            currentNode.next = list2;
            list2 = list2.next
        }
       currentNode =  currentNode.next;
    }
    if (list1 != null) {
        currentNode.next = list1;
    }
    if (list2 != null) {
        currentNode.next = list2;
    }
    return dummyNode.next;

};
