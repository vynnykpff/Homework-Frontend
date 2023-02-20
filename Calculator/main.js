// Imports
import {checkRightValueInFields} from "./modules/check_field.js";
import {calcValue} from "./modules/calc_value.js";
import {resetValueAndPlaceholder, selectValue} from "./modules/simple_func.js";

// Inputs
const parentInput = document.querySelector('.wrapper-input');
const fieldOne = document.querySelector('.input-field-one');
const fieldTwo = document.querySelector('.input-field-two');
// Input result
const result = document.querySelector('.out');
// Selection
const selection = document.querySelector('.selection');
// Buttons
const btn = document.querySelector('.send');
const reset = document.querySelector('.reset')

// This listener starting every, when field change value
parentInput.addEventListener('input', checkRightValueInFields)

// This listener starting, when you click on button "Calculate"
btn.addEventListener('click', calcValue);

// This listener starting, when you click on button "Reset"
reset.addEventListener('click', resetValueAndPlaceholder);

// This listener starting every, when change field "Selection"
selection.addEventListener('change', selectValue);

// Exports
export {fieldOne, fieldTwo, selection, result, btn};

