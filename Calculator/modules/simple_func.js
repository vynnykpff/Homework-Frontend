// Imports
import {fieldOne, fieldTwo, result, selection} from "../main.js";

// This function reset value and element placeholder
export function resetValueAndPlaceholder() {
	fieldOne.value = '';
	fieldTwo.value = '';
	fieldOne.placeholder = 'Enter number one';
	fieldTwo.placeholder = 'Enter number two';
	fieldTwo.disabled = false;
	result.placeholder = 'Result';
	selection.value = '+';
}

// This function blocking and change element placeholder, when works event change
export function selectValue(e) {
	fieldTwo.disabled = e.target.value === 'sqrt';
	if (this.value === 'n^n') {
		fieldOne.placeholder = 'Bases';
		fieldTwo.placeholder = 'Degree';
	} else {
		fieldOne.placeholder = 'Enter number one';
		fieldTwo.placeholder = 'Enter number two';
	}
}