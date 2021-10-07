const Counter = class counter {
	// 변수명 명확하게
	_state: number;
	_num: number;

	constructor(state: number, num: number) {
		this._state = state;
		this._num = num;
	}

	// 소문자
	get state() {
		return this._state;
	}

	set state(state: number) {
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