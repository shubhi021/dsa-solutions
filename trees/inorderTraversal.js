var inorderTraversal = function (root) {
    let res = [];

    const traverse = (node) => {
        if (node === null) return;

        traverse(node.left);
        res.push(node.val);
        traverse(node.right);
    };

    traverse(root);

    return res;
};
