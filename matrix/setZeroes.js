var setZeroes = function (matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let firstRowZero = false;
    let firstColZero = false;

    // Step 1: Check if first row contains zero
    for (let j = 0; j < cols; j++) {
        if (matrix[0][j] === 0) {
            firstRowZero = true;
        }
    }

    // Step 2: Check if first column contains zero
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
        }
    }

    // Step 3: Use first row and first column as markers
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Step 4: Set inner cells to zero using markers
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Step 5: Set first row to zero if required
    if (firstRowZero) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }

    // Step 6: Set first column to zero if required
    if (firstColZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
};
