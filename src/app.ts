import * as pipe from 'pipe-args';
import * as util from 'util';

var loaded_pipe = pipe.load();

class termi{

    public run(){
        console.log("Jordan22");
        console.log(`The piped arg is ${process.argv[2]}`);
    }
}


var t = new termi();

t.run();