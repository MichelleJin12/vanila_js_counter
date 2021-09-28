let num = 0;

const Counter = class counter {
	constructor() {
		this.state = 0;
		this.array = 0;
	};

	Events = () => {
		document.getElementsByClassName('increase')[this.array].addEventListener('click', () => {this.Increase();});
		document.getElementsByClassName('decrease')[this.array].addEventListener('click', () => {this.Decrease();});
		document.getElementsByClassName('reset')[this.array].addEventListener('click', () => {this.Reset();});
	}

	Reset = () => {
		this.state = 0;
		document.getElementsByClassName("Num")[this.array].innerText = this.state;
	}

	Increase = () => {
		this.state++;
		document.getElementsByClassName("Num")[this.array].innerText = this.state;
	}

	Decrease = () => {
		this.state--;
		document.getElementsByClassName("Num")[this.array].innerText = this.state;
	}

	Init = () => {
		let div = document.createElement('div');
		let number = document.createElement('p');
		let input = document.createElement('input');
		let input2 = document.createElement('input');
		let input3 = document.createElement('input');
		number.className = "Num";
		number.innerText = this.state;
		input.type = 'button';
		input.value = -1;
		input.className = 'decrease';
		input2.type = 'button';
		input2.value = 1;
		input2.className = 'increase';
		input3.type = 'button';
		input3.value = '리셋!!!';
		input3.className = 'reset';
		div.appendChild(number);
		div.appendChild(input);
		div.appendChild(input2);
		div.appendChild(input3);
		document.getElementById("section").appendChild(div);
		this.array = num++;
		this.Events();
		console.log(this);
	}
};

export {Counter};

// 고쳐야 할 것
// Counter 클래스는 getter, setter, value 이외에 DOM 사용 X
// DOM은 index.js (클래스 밖에서) 사용하기
// appendChild 말고 insertHTML 사용해서 줄여보기
// localStorage 사용
// 