// Import
import {fieldOne, fieldTwo, selection, btn} from "../main.js";

// This function checks the fields and therefore displays the result
export function checkRightValueInFields() {
	if (fieldOne.value.length > 0 && fieldTwo.value.length > 0) {
		fieldOne.style.border = 'green 3px solid';
		fieldTwo.style.border = 'green 3px solid';
		btn.disabled = false;
	}

	if (fieldOne.value.length > 0 && fieldTwo.value.length === 0) {
		fieldOne.style.border = 'green 3px solid';
	}

	if (fieldTwo.value.length > 0 && fieldOne.value.length === 0) {
		fieldTwo.style.border = 'green 3px solid';
	}

	if (fieldOne.value.length === 0) {
		fieldOne.style.border = 'red 3px solid';
		btn.disabled = true;
	}

	if (fieldTwo.value.length === 0) {
		fieldTwo.style.border = 'red 3px solid';
		btn.disabled = true;
	}

	if (selection.value === 'sqrt') {
		btn.disabled = false;
		fieldTwo.style.border = '';
	}
}