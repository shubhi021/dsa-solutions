
var searchBST = function (root, val) {
    let current = root

    while (current) {
        if (current.val === val) {
            return current;
        }
        if (val < current.val) {
            current = current.left;
        }
        else {
            current = current.right;
        }
      
    }
  return null;
};
