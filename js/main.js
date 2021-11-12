
const errorMessage = 'Skriv i en syssla';
function isStringEmpty(text) {
    return text.trim() === '';
}

let addChoreBtn = document.getElementById('add-chore-btn');
let addChoreInput = document.getElementById('add-chore');


let functionsForBtns = {

    enterKeyTrigger(e, btn) {
        if (e.key === 'Enter') {
            btn.click();
        }
    },

    createNewElement(elementToCreate, text, newClass) {
        elementName = document.createElement(elementToCreate);
        elementName.innerHTML = text;
        elementName.classList.add(newClass);
        return elementName;
    },

    editChore(inputNewChore, choreErrorMessage, button) {
        if (isStringEmpty(inputNewChore.value)) {
            choreErrorMessage.innerHTML = errorMessage;
            return;
        }
        choreErrorMessage.innerHTML = '';
        inputNewChore.toggleAttribute('disabled');
        if (button.innerHTML === 'Ändra') {
            button.innerHTML = 'Spara';
        }
        else {
            button.innerHTML = 'Ändra';
        }
    },

    completedChore(e) {
        let completedChoresList = document.getElementById('completed-chores-list');
        let button = e.target;
        let buttonParent = button.parentNode;
        completedChoresList.append(buttonParent);
        let itemsWithMoveChoreClass = document.getElementsByClassName('move-chore');
        let moveChoresBtns = Array.from(itemsWithMoveChoreClass);
        for (let child of moveChoresBtns) {
            if (child.parentNode === buttonParent) {
                child.remove();
            }
        }
        button.remove();
        functionsForBtns.showAndHideMoveBtns();
    },

    deleteChore(e) {
        e.target.parentNode.remove();
        functionsForBtns.showAndHideMoveBtns();
    },

    moveUpOrDown(button, up) {
        let li = button.parentNode;
        let ul = li.parentNode;
        if (up == true) {
            let prevLi = li.previousElementSibling;
            if (prevLi) {
                ul.insertBefore(li, prevLi);
            }
        }
        else {
            let nextLi = li.nextElementSibling;
            if (nextLi) {
                ul.insertBefore(nextLi, li);
            }
        }
        functionsForBtns.showAndHideMoveBtns();
    },

    showAndHideMoveBtns() {
        let allMoveUpBtns = Array.from(document.getElementsByClassName('move-up'));
        let removeFirst = allMoveUpBtns.shift();
        removeFirst.classList.add('hide-btns');
        for (let upBtns of allMoveUpBtns) {
            upBtns.classList.remove('hide-btns');
        }
        let allMoveDownBtns = Array.from(document.getElementsByClassName('move-down'));
        let removeLast = allMoveDownBtns.pop();
        removeLast.classList.add('hide-btns');
        for (let downBtns of allMoveDownBtns) {
            downBtns.classList.remove('hide-btns');
        }
    },

    removeAllChores() {
        let ul = document.getElementsByTagName('ul');
        for (let li of ul) {
            while (li.lastElementChild) {
                li.firstElementChild.remove();
            }
        }
    }
}


addChoreInput.addEventListener('keyup', (e) => functionsForBtns.enterKeyTrigger(e, addChoreBtn));

addChoreBtn.addEventListener('click', function () {
    let li = document.createElement('li');
    let newChoreInput = document.createElement('input');
    newChoreInput.classList.add('input-field');
    newChoreInput.value = addChoreInput.value;
    newChoreInput.setAttribute('type', 'text');
    let displayErrorMessage = document.getElementById('display-error-message');
    if (isStringEmpty(addChoreInput.value)) {
        displayErrorMessage.innerHTML = errorMessage;
        return;
    }
    displayErrorMessage.innerHTML = '';
    addChoreInput.value = '';
    newChoreInput.setAttribute('disabled', 'true');
    let choreErrorMessage = document.createElement('div');
    choreErrorMessage.className = 'error-message';


    let editChoreBtn = functionsForBtns.createNewElement('button', 'Ändra', 'buttons');
    editChoreBtn.addEventListener('click', (e) => functionsForBtns.editChore(newChoreInput, choreErrorMessage, e.target));
    newChoreInput.addEventListener('keyup', (e) => functionsForBtns.enterKeyTrigger(e, editChoreBtn));


    let moveChoreUpBtn = functionsForBtns.createNewElement('button', 'Upp', 'buttons');
    moveChoreUpBtn.classList.add('move-chore', 'move-up');
    moveChoreUpBtn.addEventListener('click', (e) => functionsForBtns.moveUpOrDown(e.target, true));


    let moveChoreDownBtn = functionsForBtns.createNewElement('button', 'Ner', 'buttons');
    moveChoreDownBtn.classList.add('move-chore', 'move-down');
    moveChoreDownBtn.addEventListener('click', (e) => functionsForBtns.moveUpOrDown(e.target, false));


    let completedChoreBtn = functionsForBtns.createNewElement('button', 'Färdig', 'buttons');
    completedChoreBtn.addEventListener('click', functionsForBtns.completedChore);


    let deleteChoreBtn = functionsForBtns.createNewElement('button', 'Radera', 'buttons');
    deleteChoreBtn.addEventListener('click', functionsForBtns.deleteChore);


    let toDoChores = document.getElementById('to-do-list');
    toDoChores.append(li);
    li.append(newChoreInput, editChoreBtn, completedChoreBtn, deleteChoreBtn, moveChoreUpBtn, moveChoreDownBtn, choreErrorMessage);

    functionsForBtns.showAndHideMoveBtns();
})


let removeAllChoresBtn = functionsForBtns.createNewElement('button', 'Återställ', 'buttons');
let placeBesideAddChoreBtn = document.getElementById('add-chore-btns');
placeBesideAddChoreBtn.append(removeAllChoresBtn);
removeAllChoresBtn.addEventListener('click', functionsForBtns.removeAllChores);
