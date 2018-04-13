"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const util = require("util");
const exec = util.promisify(require('child_process').exec);
const { spawn } = require('child_process');
class termi {
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("running222");
            //const child = spawn('node', ['./app.js']);
            //child.stdout.setEncoding('utf8');
            //child.stdout.on('data', (chunk) => {
            //    console.log(`**: ${chunk}`);
            //});
            // const { stdout, stderr } = await exec('node ./lib/app.js');
            // var unhook_intercept = intercept(function(txt) {
            //     //console.log("****" + txt);
            // });
            var child = require("child_process").spawn('nodemon', ['./lib/app.js']);
            child.stdout.setEncoding('utf8');
            child.stdout.on('data', (chunk) => {
                console.log(`**: ${chunk}`);
            });
        });
    }
}
var t = new termi();
t.run();
//# sourceMappingURL=runner.js.map