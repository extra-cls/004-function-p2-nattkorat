import { quadratic, formatSum } from "../main.js";
import assert from 'assert';


// test for having root
assert.strictEqual(
    quadratic(1, 2, 1), 'x1 = -1, x2 = -1'
)

// test for no root
assert.strictEqual(
    quadratic(1, 1, 1), 'No root!'
)

// test formatSum
assert.strictEqual(
    formatSum(1), "1"
)

assert.strictEqual(
    formatSum(3), "1+2+3"
)