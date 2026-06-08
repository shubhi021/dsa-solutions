var isSymmetric = function (root) {

    function recursive(l, r) {
        if (!l && !r) return true;

        if (!l || !r || l.val !== r.val) {
            return false;
        }

        return (
            recursive(l.left, r.right) &&
            recursive(l.right, r.left)
        );
    }

    return recursive(root.left, root.right);
};
