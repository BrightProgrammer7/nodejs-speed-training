import { EventEmitter } from "events";

const event = new EventEmitter();

event.on("message", (name) => {
    console.log(name);
});

