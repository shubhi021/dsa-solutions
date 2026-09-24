
var mergeTriplets = function (triplets, target) {
    let a = false;
    let b = false;
    let c = false;

    for (triplet of triplets) {

        let x = triplet[0];
        let y = triplet[1];
        let z = triplet[2];

        if (x > target[0] || y > target[1] || z > target[2]) {
            continue;
        }

        if (x === target[0]) {
            a = true;
        }
        if (y === target[1]) {
            b = true;
        }
        if (z === target[2]) {
            c = true;
        }
    }
    return a&&b&&c;
};
