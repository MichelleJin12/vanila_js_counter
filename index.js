import Counter from './counter.js';
let num = 0;
const init = class Init {
    constructor() {
        // User clicks Add Counter
        this.InitEvents = () => {
            document.getElementById('AddInput').addEventListener('click', () => this.CreateInstance());
        };
        this.CreateInstance = () => {
            let tmp = new Counter(0, num++);
            let ObjInfo = {
                state: 0,
                num: num - 1,
            };
            this._instances.push(ObjInfo);
            document.getElementById("section").insertAdjacentHTML('afterend', this.CreateHTML(tmp));
            this.Events(tmp);
        };
        this.CreateHTML = (counter) => {
            let html = `
		<div id="id${counter.Number}">
			<p id="${counter.Number}">
				${counter.State}
			</p>
			<input type="button" value=-1 id="decrease${counter.Number}">
			<input type="button" value=+1 id="increase${counter.Number}">
			<input type="button" value="리셋!!!" id="reset${counter.Number}">
			<input type="button" value="삭제.." id="del${counter.Number}">
		</div>
		`;
            return html;
        };
        this.Events = (event) => {
            document.getElementById(`increase${event.Number}`).addEventListener('click', () => { this.Increase(event); });
            document.getElementById(`decrease${event.Number}`).addEventListener('click', () => { this.Decrease(event); });
            document.getElementById(`reset${event.Number}`).addEventListener('click', () => { this.Reset(event); });
            document.getElementById(`del${event.Number}`).addEventListener('click', () => { this.Delete(event); });
        };
        this.Increase = (event) => {
            event.State = ++event.State;
            document.getElementById(`${event.Number}`).innerText = event.State;
        };
        this.Decrease = (event) => {
            event.State = --event.State;
            document.getElementById(`${event.Number}`).innerText = event.State;
        };
        this.Reset = (event) => {
            event.State = 0;
            document.getElementById(`${event.Number}`).innerText = event.State;
        };
        this.Delete = (event) => {
            document.getElementById(`id${event.Number}`).remove();
        };
        this._instances = new Array();
    }
};
const abc = new init;
abc.InitEvents();
