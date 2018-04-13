import * as util from 'util';
import * as intercept from 'intercept-stdout';

const exec = util.promisify(require('child_process').exec);
const { spawn } = require('child_process');

class termi{

    public async run(){
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
    }
}


var t = new termi();

t.run();