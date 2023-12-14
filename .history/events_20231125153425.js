import { EventEmitter } from "events";

const event = new EventEmitter();

event.on("user", (name) => {
    console.log(name);
});

event.emit()