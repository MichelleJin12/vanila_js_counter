import Calculator from "./calculator.js";

const dom = (selector) => document.querySelector(selector);
const domAll = (selector) => document.querySelectorAll(selector);

/*
numberButtons: number pad
operationButtons: * + - ÷
equalButton: =
deleteButton: DEL
allClearButton: AC
sign: +/-
percent: %
previousOperandTextElement : upper side
currentOperandTextElement: down side
*/

class Init {
	constructor(prev, current) {
		this.numberButtons = domAll('[data-number]');
		this.operationButtons = domAll('[data-operation]');
		this.equalButton = dom('[data-equals]');
		this.deleteButton = dom('[data-delete]');
		this.allClearButton = dom('[data-all-clear]');
		this.signButton = dom('[data-sign]');
		this.percentButton = dom('[data-percent]');
		this.previousOperandTextElement = prev;
		this.currentOperandTextElement = current;

		this.calculator = new Calculator(this.previousOperandTextElement, this.currentOperandTextElement);
	}

	init () {
		this.numberButtons.forEach(button => {
			button.addEventListener('click', () => {
				this.allClearButton.innerText = 'C';
				this.calculator.appendNumber(button.innerText);
				this.calculator.updateDisplay();
			})
		})
		
		this.operationButtons.forEach(button => {
			button.addEventListener('click', () => {
			this.calculator.chooseOperation(button.innerText);
			this.calculator.updateDisplay();
			})
		})
		
		this.equalButton.addEventListener('click', () => {
			this.calculator.compute();
			this.calculator.updateDisplay();
		})
		
		this.allClearButton.addEventListener('click', () => {
			this.calculator.clear(this.allClearButton.innerText);
			this.calculator.updateDisplay();
			this.allClearButton.innerText = "AC";
		})
		
		this.deleteButton.addEventListener('click', () => {
			this.calculator.delete();
			this.calculator.updateDisplay();
		})

		this.signButton.addEventListener('click', () => {
			this.calculator.numberSign();
			this.calculator.updateDisplay();
		})

		this.percentButton.addEventListener('click', () => {
			this.calculator.numberPercent();
			this.calculator.updateDisplay();
		})
	}
}

const App = new Init(dom('[data-previous-operand]'), dom('[data-current-operand]'));

App.init();

