const Counter = class counter {
	_state: number;
	_num: number;

	constructor(state: number, num: number) {
		this._state = state;
		this._num = num;
	}

	get State() {
		return this._state;
	}

	set State(state: number) {
		this._state = state;
	}

	get Number() {
		return this._num;
	}

	Increase = () => {
		this._state++;
	}

	Decrease = () => {
		this._state--;
	}

	Reset = () => {
		this._state = 0;
	}
}

export default Counter;

// 고쳐야 할 것
// Counter 클래스는 getter, setter, value 이외에 DOM 사용 X
// DOM은 index.js (클래스 밖에서) 사용하기
// appendChild 말고 insertHTML 사용해서 줄여보기
// localStorage 사용
// 