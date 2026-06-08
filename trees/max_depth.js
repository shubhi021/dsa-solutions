
var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    let depth = 0;
    let queue = [root];

    while (queue.length) {
        let len = queue.length;

        for (let i = 0; i < len; i++) {
            let cur = queue.shift();
            if (cur.left) {
                queue.push(cur.left)
            }
            if (cur.right) {
                queue.push(cur.right)
            }

        }
        depth++;
    }
    return depth;

};
