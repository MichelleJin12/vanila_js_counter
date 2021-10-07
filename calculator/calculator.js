class Calculator {
  constructor(previousOpernacTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOpernacTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear('AC');
		this.updateDisplay();
  }

	get CurrentOperand () {
		return this.currentOperand;
	}

  clear (mode) {
		if (mode == 'AC') {
			this.currentOperand = '0';
			this.previousOperand = '';
			this.operation = undefined;
			this.gt = 0;
		}
		else this.currentOperand = '0';
  }

  delete () {
		this.currentOperand = this.currentOperand.toString().slice(0, -1);
		if (this.currentOperand === '')
			this.currentOperand = '0';
  }

  // number 선택했을 때, 화면에 띄워줌
  appendNumber (number) {
		// . 1개만 사용하기 위해 처리 / 엄청 큰 숫자일 경우 isNaN(parseFloat(this.currentOperand)) 처리 못함
		if (number === '.' && this.currentOperand.includes('.')) return ;
		// 글자수 제한
		if (this.currentOperand.includes('.') && this.currentOperand.length > 9) return ;
		if (this.currentOperand.length > 8) return ;
		// 초기 current 값이 0으로 초기화되기 때문에 01234 이런 경우
		if (!isNaN(this.currentOperand) && this.currentOperand[0] != 0) this.currentOperand = this.currentOperand.toString() + number.toString();
		else this.currentOperand = this.currentOperand = parseFloat(this.currentOperand).toString() + number.toString();
  }

  // operation 클릭했을 때, 화면에 띄워줌
  chooseOperation(operation) {
		if (this.currentOperand === '') return ;
		if (this.previousOperand !== '' || this.currentOperand != '0') {
			if (isNaN(parseFloat(this.previousOperand))) ;
			else this.compute();
			this.operation = operation;
			this.previousOperand = this.currentOperand;
			this.currentOperand = '';
		}
		else {
			this.operation = operation;
			this.previousOperand = operation;
			this.currentOperand = '';
		}
  }

  // 이전 값과 현재 값을 가져와서 계산
  compute () {
		let computation;
		let prev = parseFloat(this.previousOperand);
		let current = parseFloat(this.currentOperand);
		if (isNaN(prev) && isNaN(current)) return ;
		// operator number case
		console.log(this.operation);
		if (isNaN(prev)) {
			if (this.gt === 0)
				this.gt = current;
			prev = this.gt;
			switch (this.operation) {
				case '+':
					computation = prev + current;
					break ;
				case '-':
					computation = current - prev;
					break ;
				case '×':
					if (prev !== 0) computation = prev * current;
					else computation = current * current;
					break ;
				case '÷':
					if (prev !== 0) computation = current / prev;
					else computation = current / current;
					break ;
				default:
					return ;
			}
		}
		// number operator case
		else if (isNaN(current)) {
			if (this.gt === 0)
				this.gt = prev;
			current = this.gt;
			switch (this.operation) {
				case '+':
					computation = prev + current;
					break ;
				case '-':
					computation = prev - current;
					break ;
				case '×':
					if (current !== 0) computation = prev * current;
					else computation = prev * prev;
					break ;
				case '÷':
					if (current !== 0) computation = prev / current;
					else computation = prev / prev;
					break ;
				default:
					return ;
			}
		}
		// number operator number case
		else {
			this.gt = current;
			switch (this.operation) {
				case '+':
					computation = prev + current;
					break ;
				case '-':
					computation = prev - current;
					break ;
				case '×':
					computation = prev * current;
					break ;
				case '÷':
					computation = prev / current;
					break ;
				default:
					return ;
			}
		}
		this.currentOperand = computation;
		this.previousOperand = '';
  }

	getDisplayNumber(number) {
		const decimalDigits = number.toString().split('.')[1];
		const integerDigits = parseFloat(number.toString().split('.')[0]);
		let integerDisplay;
		if (isNaN(integerDigits)) {
			integerDisplay = '';
		} else {
			integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});
		}
		if (!isNaN(decimalDigits)) {
			return `${integerDisplay}.${decimalDigits}`;
		} else {
			return integerDisplay;
		}
	}

  updateDisplay () {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
		if (this.operation != null) {
			this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
		} else {
			this.previousOperandTextElement.innerText = '';
		}
  }

	numberSign () {
		if (parseFloat(this.currentOperand) === '0') return ;
		this.currentOperand = (this.currentOperand * -1).toString();
	}

	numberPercent () {
		this.currentOperand = (this.currentOperand * 0.01).toString();
	}
}

export default Calculator;