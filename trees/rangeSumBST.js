var rangeSumBST

= function(root, low, high) {
    if (!root) return 0;

    // If current value is too small, skip left subtree
    if (root.val < low) {
        return rangeSumBST(root.right, low, high);
    }

    // If current value is too large, skip right subtree
    if (root.val > high) {
        return rangeSumBST(root.left, low, high);
    }

    // Otherwise include node + both sides
    return root.val
        + rangeSumBST(root.left, low, high)
        + rangeSumBST(root.right, low, high);
};
