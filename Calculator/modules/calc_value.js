// Imports
import {fieldOne, fieldTwo, result, selection} from "../main.js";

// This function calculate value, and change field result
export function calcValue() {
	let numOne = fieldOne.value;
	let numTwo = fieldTwo.value
	if (fieldOne.value.length === 0 && fieldTwo.value.length === 0) {
		fieldOne.style.border = 'red 2px solid';
		fieldTwo.style.border = 'red 2px solid';
	}

	switch (selection.value) {
		case '+':
			result.placeholder =  Math.floor((+numOne + +numTwo) * 100) / 100;
			break;
		case '-':
			result.placeholder =  Math.floor((+numOne - +numTwo) * 100) / 100;
			break;
		case '*':
			result.placeholder = Math.floor((+numOne * +numTwo) * 100) / 100;
			break;
		case '/':
			result.placeholder = Math.floor((+numOne / +numTwo) * 100) / 100;
			break;
		case 'n^n':
			result.placeholder = Math.floor(Math.pow(+numOne, +numTwo) * 100) / 100;
			break;
		case 'sqrt':
			result.placeholder = Math.floor(Math.sqrt(+numOne) * 100) / 100;
			break;
	}
}