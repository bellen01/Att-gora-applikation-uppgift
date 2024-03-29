
const errorMessage = 'You have to add a todo';
function isStringEmpty(text) {
    return text.trim() === '';
}

let addChoreBtn = document.getElementById('add-chore-btn');
let addChoreInput = document.getElementById('add-chore');
addChoreInput.focus();


addChoreInput.addEventListener('keyup', (e) => functionsForBtns.enterKeyTrigger(e, addChoreBtn));

addChoreBtn.addEventListener('click', function () {
    let displayErrorMessage = document.getElementById('display-error-message');
    if (isStringEmpty(addChoreInput.value)) {
        displayErrorMessage.innerHTML = errorMessage;
        return;
    }
    displayErrorMessage.innerHTML = '';
    let li = document.createElement('li');
    let newChoreInput = document.createElement('input');
    newChoreInput.classList.add('input-field');
    newChoreInput.value = addChoreInput.value;
    newChoreInput.setAttribute('type', 'text');
    addChoreInput.value = '';
    newChoreInput.setAttribute('disabled', 'true');
    let choreErrorMessage = document.createElement('div');
    choreErrorMessage.className = 'error-message';


    let editChoreBtn = functionsForBtns.createNewElement('button', 'Edit', 'edit-button');
    editChoreBtn.addEventListener('click', (e) => functionsForBtns.editChore(newChoreInput, choreErrorMessage, e.target));
    newChoreInput.addEventListener('keyup', (e) => functionsForBtns.enterKeyTrigger(e, editChoreBtn));


    let completedChoreBtn = functionsForBtns.createNewElement('button', 'Done', 'done-button');
    completedChoreBtn.addEventListener('click', functionsForBtns.completedChore);


    let deleteChoreBtn = functionsForBtns.createNewElement('button', 'Delete', 'delete-button');
    deleteChoreBtn.addEventListener('click', functionsForBtns.deleteChore);


    let moveChoreUpBtn = functionsForBtns.createNewElement('button', 'Up', 'buttons');
    moveChoreUpBtn.classList.add('move-chore', 'move-up');
    moveChoreUpBtn.addEventListener('click', (e) => functionsForBtns.moveUpOrDown(e.target, true));


    let moveChoreDownBtn = functionsForBtns.createNewElement('button', 'Down', 'buttons');
    moveChoreDownBtn.classList.add('move-chore', 'move-down');
    moveChoreDownBtn.addEventListener('click', (e) => functionsForBtns.moveUpOrDown(e.target, false));


    let toDoChores = document.getElementById('to-do-list');
    toDoChores.append(li);
    li.append(newChoreInput, editChoreBtn, completedChoreBtn, deleteChoreBtn, moveChoreUpBtn, moveChoreDownBtn, choreErrorMessage);

    functionsForBtns.showAndHideMoveBtns();
});


let removeAllChoresBtn = functionsForBtns.createNewElement('button', 'Delete all todos', 'delete-button');
let placeBesideAddChoreBtn = document.getElementById('add-chore-btns');
placeBesideAddChoreBtn.append(removeAllChoresBtn);
removeAllChoresBtn.addEventListener('click', functionsForBtns.removeAllChores);
