import {UI_ElEMENTS} from "./view.js";

const ELEMENT_HEIGHT = {
    HIGH_FORM_HEIGHT: 45,
    LOW_FORM_HEIGHT: 100,
    LOW_BUTTON_ADD: 220,
}

const CHANGE_HEIGHT_NUMBERS = {

    SUPER_LARGE_CHANGE: 55,
    LARGE_CHANGE: 40,
    MIDDLE_CHANGE: 25,

    SUPER_LARGE: 100,
    LARGE: 85,
    MIDDLE: 70,

    SUPER_LARGE_DECREASE: 118,
    LARGE_DECREASE: 103,
    MIDDLE_DECREASE: 88,
    ADD_TASK: 63,
    NEW_TASK_HEIGHT: 45,
}

const LENGTH_OF_INPUT_FIELD = {
    X_LARGE: 90,
    LARGE: 60,
    MIDDLE: 30,
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

function createText(){
    let text = document.createElement('p');
    text.textContent = UI_ElEMENTS.HIGH_INPUT_FIELD.value;
    text.className = CLASS_NAMES.TEXT;
    return text;
}

function increaseAddedTask(heightOfAddedTask, changeHighHeight, addedTask){
    addedTask.style = `height: ${heightOfAddedTask}px`;
    ELEMENT_HEIGHT.HIGH_FORM_HEIGHT += changeHighHeight;
    UI_ElEMENTS.HIGH_FORM.style = `height: ${ELEMENT_HEIGHT.HIGH_FORM_HEIGHT}px`;
    ELEMENT_HEIGHT.LOW_BUTTON_ADD += changeHighHeight;
    UI_ElEMENTS.ADD_LOW_BUTTON.style = `top: ${ELEMENT_HEIGHT.LOW_BUTTON_ADD}px`;
}

function decreaseField(changeHighHeight){
    ELEMENT_HEIGHT.HIGH_FORM_HEIGHT -= changeHighHeight;
    UI_ElEMENTS.HIGH_FORM.style = `height: ${ELEMENT_HEIGHT.HIGH_FORM_HEIGHT}px`;
    ELEMENT_HEIGHT.LOW_BUTTON_ADD -= changeHighHeight;
    UI_ElEMENTS.ADD_LOW_BUTTON.style = `top: ${ELEMENT_HEIGHT.LOW_BUTTON_ADD}px`;
}

function increaseHeightNewTask(src, addedTask){
    if (src.length > LENGTH_OF_INPUT_FIELD.X_LARGE){
        increaseAddedTask(CHANGE_HEIGHT_NUMBERS.SUPER_LARGE, CHANGE_HEIGHT_NUMBERS.SUPER_LARGE_CHANGE, addedTask)
    }
    else if (src.length > LENGTH_OF_INPUT_FIELD.LARGE){
        increaseAddedTask(CHANGE_HEIGHT_NUMBERS.LARGE, CHANGE_HEIGHT_NUMBERS.LARGE_CHANGE, addedTask)
    }
    else if (src.length > LENGTH_OF_INPUT_FIELD.MIDDLE){
        increaseAddedTask(CHANGE_HEIGHT_NUMBERS.MIDDLE, CHANGE_HEIGHT_NUMBERS.MIDDLE, addedTask)
    }
}

function decreaseHeightField(src){
    if (src.length > LENGTH_OF_INPUT_FIELD.X_LARGE){
        decreaseField(CHANGE_HEIGHT_NUMBERS.SUPER_LARGE_DECREASE)
    }
    else if (src.length > LENGTH_OF_INPUT_FIELD.LARGE){
        decreaseField(CHANGE_HEIGHT_NUMBERS.LARGE_DECREASE)
    }
    else if (src.length > LENGTH_OF_INPUT_FIELD.MIDDLE){
        decreaseField(CHANGE_HEIGHT_NUMBERS.MIDDLE_DECREASE)
    }
    else{
        decreaseField(CHANGE_HEIGHT_NUMBERS.ADD_TASK)
    }
}

function removeTask(arr){
    for (let element of arr) {
        element.firstChild.addEventListener('click', () => {
            UI_ElEMENTS.HIGH_FORM.removeChild(element);
            decreaseHeightField(element.lastChild.textContent);
        })
    }
}

function changeColorOfSelectedTask(arr){
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

function changeInputFieldColor(){
    setTimeout(() => UI_ElEMENTS.HIGH_INPUT_FIELD.style = `background: ${COLORS.ERROR_INPUT}`);
    setTimeout(() => UI_ElEMENTS.HIGH_INPUT_FIELD.style = `background: ${COLORS.WHITE}`, 200);
}

function createTask(){
    let addedTask = document.createElement('div');
    addedTask.className = CLASS_NAMES.NEW_TASK;
    addedTask.style = `height: ${CHANGE_HEIGHT_NUMBERS.NEW_TASK_HEIGHT}`;
    return addedTask;
}

function changeHighFieldHeight(){
    ELEMENT_HEIGHT.HIGH_FORM_HEIGHT += CHANGE_HEIGHT_NUMBERS.ADD_TASK;
    ELEMENT_HEIGHT.LOW_BUTTON_ADD += CHANGE_HEIGHT_NUMBERS.ADD_TASK;
    UI_ElEMENTS.HIGH_FORM.style = `height: ${ELEMENT_HEIGHT.HIGH_FORM_HEIGHT}px`;
    UI_ElEMENTS.ADD_LOW_BUTTON.style = `top: ${ELEMENT_HEIGHT.LOW_BUTTON_ADD}px`;
}


function addTask(){
    let validInput = UI_ElEMENTS.HIGH_INPUT_FIELD.value !== '';

    if (validInput){
        let deleteButton = createDeleteButton();
        let checkbox = createCheckbox();
        let customCheckbox = createCustomCheckbox();
        let text = createText();
        let addedTask = createTask();

        checkboxCount++;

        increaseHeightNewTask(text.textContent, addedTask)

        addedTask.append(deleteButton);
        addedTask.append(checkbox);
        addedTask.append(customCheckbox);
        addedTask.append(text);

        UI_ElEMENTS.HIGH_FORM.append(addedTask);

        changeHighFieldHeight();

        arrayOfAdddedTask.push(addedTask);

        removeTask(arrayOfAdddedTask);

        changeColorOfSelectedTask(arrayOfAdddedTask);

    }else{
        changeInputFieldColor();
    }
    UI_ElEMENTS.HIGH_INPUT_FIELD.value = null;
}

UI_ElEMENTS.ADD_HIGH_BUTTON.addEventListener('click', addTask);
// UI_ElEMENTS.ADD_LOW_BUTTON.addEventListener('click', addTask);