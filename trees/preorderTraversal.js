var preorderTraversal = function(root) {
    const res = [];

    function dfs(node)
    {
        if(node === null) return ;

        res.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return res;
};
