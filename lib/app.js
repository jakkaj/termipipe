"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipe = require("pipe-args");
var loaded_pipe = pipe.load();
class termi {
    run() {
        console.log("Jordan22");
        console.log(`The piped arg is ${process.argv[2]}`);
    }
}
var t = new termi();
t.run();
//# sourceMappingURL=app.js.map