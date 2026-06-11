
var hasPathSum = function(root, targetSum) {
    if(!root) return false;

      // Leaf node
    if(!root.left && !root.right)
    {
        return (targetSum === root.val);
    }
    return (
        hasPathSum(root.left,targetSum-root.val) ||
        hasPathSum(root.right,targetSum-root.val)
    )
};
