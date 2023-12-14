"use strict";

// TODO
/* 
Alter the code so that the buffer is safely allocated.
Do not explicitly fill the buffer with any thing.
If the process prints the buffer and then logs passed!,
the exercise was correctly completed.
*/
<<<<<<< HEAD
const assert = require("assert");
// const buffer = Buffer.allocUnsafe(4096, 0);
const buffer = Buffer.alloc(4096);
console.log(buffer);
=======
const assert = require('assert')
const buffer = Buffer.alloc(4096);
console.log(buffer)
>>>>>>> ab6c35f4c0cc05fceb785526b8021baf5a3385fe

for (const byte of buffer) assert.equal(byte, 0);
console.log("passed!");
