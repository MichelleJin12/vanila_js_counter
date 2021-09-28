import * as C from './counter.js';

const init = class Init {
        constructor() {
                this.instances = new Array();
        }
        InitEvents = () => {
                document.getElementById('AddInput').addEventListener('click', () => {this.CreateInstance()});
        };
        CreateInstance = () => {
                let tmp = new C.Counter;
                this.instances.push(tmp);
                tmp.Init();
        }
};

const abc = new init;
abc.InitEvents();