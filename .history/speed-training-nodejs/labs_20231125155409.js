const assert = require("assert");
const { EventEmitter } = require("events");
const ee = new EventEmitter();
let count = 0;

setInterval(() => {
  // ee.on("tick");
  // ee.once("tick", () => {
  //   listener();
  // });
  event.once("data", (name, company) => {
    console.log(name);
    console.log(company);
  });
}, 100);

function listener() {
  count++;
  setTimeout(() => {
    assert.equal(count, 1);
    assert.equal(this, ee);
    console.log("passed!");
  }, 250);
}
