import { EventEmitter } from "events";

const event = new EventEmitter();

event.on("message", () => {
    console.log('====================================');
    console.log();
    console.log('====================================');
});
