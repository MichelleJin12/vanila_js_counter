import Counter from './counter.js';

let num = 0;
//전역쓰지않기.....
// id -> class 로 바꾸기
// ts는 js로 컴파일이 필요한 언어..
// const $ = (selector) => document.querySelector(selector);
// const dom = (selector) => document.querySelector(selector);  이렇게 해도됨
// HTML input 대신에 button tag 쓰기
// 

interface IObj {
	state: number;
	num: number;
}

const init = class Init {
	_instances: object[];

	constructor() {
		this._instances = new Array();
		//num 추가
	}

	// User clicks Add Counter
	InitEvents = () => {
		document.getElementById('AddInput').addEventListener('click', () => this.CreateInstance());
	}

	CreateInstance = () => {
		// let 많이 쓰면 안좋다.
		let tmp = new Counter(0, num++);
		let ObjInfo: IObj = {
			state: 0,
			num: num - 1,
		}
		this._instances.push(ObjInfo);
		document.getElementById("section").insertAdjacentHTML('afterend', this.CreateHTML(tmp));
            	this.Events(tmp);
	}

	// type이 무엇인지 찾아보기
	CreateHTML = (counter: any) => {
		const html = `
		<div id="id${counter.Number}">
			<p id="${counter.Number}">
				${counter.state}
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
		event.state = ++event.state;
		document.getElementById(`${event.Number}`).innerText = event.state;

	}

	Decrease = (event: any) => {
		// ??
		//counter class의 Decrease 메소드 쓰기
		event.state = --event.state;
		document.getElementById(`${event.Number}`).innerText = event.state;
	}

	Reset = (event: any) => {
		event.state = 0;
		document.getElementById(`${event.Number}`).innerText = event.state;
	}

	Delete = (event: any) => {
		document.getElementById(`id${event.Number}`).remove();
	}
}

const abc = new init;

abc.InitEvents();