import Counter from './counter.js';

let num = 0;

interface IObj {
	state: number;
	num: number;
}

const init = class Init {
	_instances: object[];

	constructor() {
		this._instances = new Array();
	}

	// User clicks Add Counter
	InitEvents = () => {
		document.getElementById('AddInput').addEventListener('click', () => this.CreateInstance());
	}

	CreateInstance = () => {
		let tmp = new Counter(0, num++);
		let ObjInfo: IObj = {
			state: 0,
			num: num - 1,
		}
		this._instances.push(ObjInfo);
		document.getElementById("section").insertAdjacentHTML('afterend', this.CreateHTML(tmp));
            	this.Events(tmp);
	}

	CreateHTML = (counter: any) => {
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
		`
		return html;
	}

        Events = (event: any) => {
		document.getElementById(`increase${event.Number}`).addEventListener('click', () => {this.Increase(event)});
		document.getElementById(`decrease${event.Number}`).addEventListener('click', () => {this.Decrease(event)});
		document.getElementById(`reset${event.Number}`).addEventListener('click', () => {this.Reset(event)});
		document.getElementById(`del${event.Number}`).addEventListener('click', () => {this.Delete(event)});
	    };

	Increase = (event: any) => {
		event.State = ++event.State;
		document.getElementById(`${event.Number}`).innerText = event.State;

	}

	Decrease = (event: any) => {
		event.State = --event.State;
		document.getElementById(`${event.Number}`).innerText = event.State;
	}

	Reset = (event: any) => {
		event.State = 0;
		document.getElementById(`${event.Number}`).innerText = event.State;
	}

	Delete = (event: any) => {
		document.getElementById(`id${event.Number}`).remove();
	}
}

const abc = new init;

abc.InitEvents();