import {UI_ElEMENTS} from "./view.js";

const ELEMENT_HEIGHT = {
    HIGH_FORM_HEIGHT: 45,
    LOW_FORM_HEIGHT: 100,
    LOW_ADD_BUTTON: 220,
}

const CHANGE_HEIGHT = {
    LARGE_TASK: 100,
    MIDDLE_TASK: 85,
    LOW_TASK: 70,

    LARGE_INCREASE: 110,
    MIDDLE_INCREASE: 95,
    LOW_INCREASE: 80,

    LARGE_DECREASE: 110,
    MIDDLE_DECREASE: 95,
    LOW_DECREASE: 80,

    NORMAL_TASK: 45,
    NORMAL_CHANGE_HEIGHT: 63,
}

const LENGTH_OF_INPUT_FIELD = {
    LARGE: 90,
    MIDDLE: 60,
    LOW: 30,
}

const IMAGES = {
    DELETE_BUTTON: 'images/close_icon.png'
}

const COLORS = {
    ERROR_INPUT: '#E00000',
    WHITE: '#FFFFFF',
    SELECTED_ADDED_TASK: '#EEEEEE',
}

const CLASS_NAMES = {
    DELETE_BUTTON: 'delete_button',
    CHECKBOX: 'new_checkbox',
    NEW_TASK: 'new_task',
    TEXT: 'new_task_text',
}

let arrayOfAdddedTask = [];
let checkboxCount = 0;

function createDeleteButton(){
    let deleteButton = document.createElement('input');
    deleteButton.type = 'image';
    deleteButton.src = IMAGES.DELETE_BUTTON;
    deleteButton.className = CLASS_NAMES.DELETE_BUTTON;
    return deleteButton;
}

function createCheckbox(){
    let checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.className = CLASS_NAMES.CHECKBOX;
    checkbox.setAttribute('id', `checkbox${checkboxCount}`);
    return checkbox;
}

function createCustomCheckbox(){
    let customCheckBox = document.createElement('label');
    customCheckBox.setAttribute('for', `checkbox${checkboxCount}`);
    return customCheckBox;
}

function createText(addedTask, form){
    let text = document.createElement('pre');
    text.textContent = form.value;
    text.className = CLASS_NAMES.TEXT;
    if (form === UI_ElEMENTS.HIGH_INPUT_FIELD){
        increaseHighTaskHeight(text.textContent, addedTask);
    }else{
        increaseLowTaskHeight(text.textContent, addedTask);
    }
    return text;
}

function increaseHighForm(height){
    ELEMENT_HEIGHT.HIGH_FORM_HEIGHT += height;
    UI_ElEMENTS.HIGH_FORM.style = `height: ${ELEMENT_HEIGHT.HIGH_FORM_HEIGHT}px`;

    ELEMENT_HEIGHT.LOW_ADD_BUTTON += height;
    UI_ElEMENTS.ADD_LOW_BUTTON.style = `top: ${ELEMENT_HEIGHT.LOW_ADD_BUTTON}px`;
}

function increaseLowForm(changeHeight){
    ELEMENT_HEIGHT.LOW_FORM_HEIGHT += changeHeight;
    UI_ElEMENTS.LOW_FORM.style = `height: ${ELEMENT_HEIGHT.LOW_FORM_HEIGHT}px`;
}

function increaseTask(taskHeight, addedTask){
    addedTask.style = `height: ${taskHeight}px`;
}

function increaseHighTaskHeight(src, addedTask){
    if (src.length > LENGTH_OF_INPUT_FIELD.LARGE){
        increaseTask(CHANGE_HEIGHT.LARGE_TASK, addedTask);
        increaseHighForm(CHANGE_HEIGHT.LARGE_INCREASE);
    }
    else if (src.length > LENGTH_OF_INPUT_FIELD.MIDDLE){
        increaseTask(CHANGE_HEIGHT.MIDDLE_TASK, addedTask);
        increaseHighForm(CHANGE_HEIGHT.MIDDLE_INCREASE);
    }
    else if (src.length > LENGTH_OF_INPUT_FIELD.LOW){
        increaseTask(CHANGE_HEIGHT.LOW_TASK, addedTask);
        increaseHighForm(CHANGE_HEIGHT.LOW_INCREASE);
    }else{
        increaseTask(CHANGE_HEIGHT.NORMAL_TASK, addedTask);
        increaseHighForm(CHANGE_HEIGHT.NORMAL_CHANGE_HEIGHT);
    }
}

function increaseLowTaskHeight(src, addedTask){
    if (src.length > LENGTH_OF_INPUT_FIELD.LARGE){
        increaseTask(CHANGE_HEIGHT.LARGE_TASK, addedTask);
        increaseLowForm(CHANGE_HEIGHT.LARGE_INCREASE);
    }
    else if (src.length > LENGTH_OF_INPUT_FIELD.MIDDLE){
        increaseTask(CHANGE_HEIGHT.MIDDLE_TASK, addedTask);
        increaseLowForm(CHANGE_HEIGHT.MIDDLE_INCREASE);
    }
    else if (src.length > LENGTH_OF_INPUT_FIELD.LOW){
        increaseTask(CHANGE_HEIGHT.LOW_TASK, addedTask);
        increaseLowForm(CHANGE_HEIGHT.LOW_INCREASE);
    }else {
        increaseLowForm(CHANGE_HEIGHT.NORMAL_CHANGE_HEIGHT);
    }
}

function decreaseHighFormHeight(height){
    ELEMENT_HEIGHT.HIGH_FORM_HEIGHT -= height;
    UI_ElEMENTS.HIGH_FORM.style = `height: ${ELEMENT_HEIGHT.HIGH_FORM_HEIGHT}px`;

    ELEMENT_HEIGHT.LOW_ADD_BUTTON -= height;
    UI_ElEMENTS.ADD_LOW_BUTTON.style = `top: ${ELEMENT_HEIGHT.LOW_ADD_BUTTON}px`;
}

function decreaseLowFormHeight(height) {
    ELEMENT_HEIGHT.LOW_FORM_HEIGHT -= height;
    UI_ElEMENTS.LOW_FORM.style = `height: ${ELEMENT_HEIGHT.LOW_FORM_HEIGHT}px`;
}

function decreaseField(src, form){
    if (form === UI_ElEMENTS.HIGH_FORM){
        if (src.length > LENGTH_OF_INPUT_FIELD.LARGE){
            decreaseHighFormHeight(CHANGE_HEIGHT.LARGE_DECREASE)
        }
        else if (src.length > LENGTH_OF_INPUT_FIELD.MIDDLE){
            decreaseHighFormHeight(CHANGE_HEIGHT.MIDDLE_DECREASE)
        }
        else if (src.length > LENGTH_OF_INPUT_FIELD.LOW){
            decreaseHighFormHeight(CHANGE_HEIGHT.LOW_DECREASE)
        }
        else{
            decreaseHighFormHeight(CHANGE_HEIGHT.NORMAL_CHANGE_HEIGHT)
        }
    }else{
        if (src.length > LENGTH_OF_INPUT_FIELD.LARGE){
            decreaseLowFormHeight(CHANGE_HEIGHT.LARGE_DECREASE)
        }
        else if (src.length > LENGTH_OF_INPUT_FIELD.MIDDLE){
            decreaseLowFormHeight(CHANGE_HEIGHT.MIDDLE_DECREASE)
        }
        else if (src.length > LENGTH_OF_INPUT_FIELD.LOW){
            decreaseLowFormHeight(CHANGE_HEIGHT.LOW_DECREASE)
        }
        else{
            decreaseLowFormHeight(CHANGE_HEIGHT.NORMAL_CHANGE_HEIGHT)
        }
    }
}

function removeTask(arr, form){
    for (let element of arr) {
        element.firstChild.addEventListener('click', () => {
            form.removeChild(element);
            decreaseField(element.lastChild.textContent, form);
        })
    }
}

function changeColorOfSelectedTask(arr) {
    for (let element of arr) {
        element.firstChild.nextSibling.addEventListener('click', () => {
            if (element.firstChild.nextSibling.checked){
                element.style = `background: ${COLORS.SELECTED_ADDED_TASK}`;
            }else{
                element.style = `background: ${COLORS.WHITE}`;
            }
        })
    }
}

function changeInputFieldColor(element){
    setTimeout(() => element.style = `background: ${COLORS.ERROR_INPUT}`);
    setTimeout(() => element.style = `background: ${COLORS.WHITE}`, 200);
}

function createTask(form){
    let addedTask = document.createElement('div');//!
    addedTask.className = CLASS_NAMES.NEW_TASK;
    addedTask.append(createDeleteButton(),createCheckbox(),createCustomCheckbox(),createText(addedTask, form));
    return addedTask;
}

function checkValidInput(src){
    if (src === ''){
        return false
    }
    for (let element of src) {
        if (element !== ' '){
            return true;
        }
    }
    return false;
}

function addHighTask(){
    if (checkValidInput(UI_ElEMENTS.HIGH_INPUT_FIELD.value)){
        let addedTask = createTask(UI_ElEMENTS.HIGH_INPUT_FIELD);
        checkboxCount++;
        UI_ElEMENTS.HIGH_FORM.append(addedTask);
        arrayOfAdddedTask.push(addedTask);
        removeTask(arrayOfAdddedTask, UI_ElEMENTS.HIGH_FORM);
        changeColorOfSelectedTask(arrayOfAdddedTask);
    }else{
        changeInputFieldColor(UI_ElEMENTS.HIGH_INPUT_FIELD);
    }

    UI_ElEMENTS.HIGH_INPUT_FIELD.value = null;
}

function addLowTask(){
    if (checkValidInput(UI_ElEMENTS.LOW_INPUT_FIELD.value)){
        let addedTask = createTask(UI_ElEMENTS.LOW_INPUT_FIELD);
        checkboxCount++;
        UI_ElEMENTS.LOW_FORM.append(addedTask);
        arrayOfAdddedTask.push(addedTask);
        removeTask(arrayOfAdddedTask, UI_ElEMENTS.LOW_FORM);
        changeColorOfSelectedTask(arrayOfAdddedTask);
    }else{
        changeInputFieldColor(UI_ElEMENTS.LOW_INPUT_FIELD);
    }

    UI_ElEMENTS.LOW_INPUT_FIELD.value = null;
}

UI_ElEMENTS.ADD_HIGH_BUTTON.addEventListener('click', addHighTask);

UI_ElEMENTS.ADD_LOW_BUTTON.addEventListener('click', addLowTask);


