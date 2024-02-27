let functionsForBtns = {

    enterKeyTrigger(e, btn) {
        if (e.key === 'Enter') {
            btn.click();
        }
    },

    createNewElement(elementToCreate, text, newClass) {
        let element = document.createElement(elementToCreate);
        element.innerHTML = text;
        element.classList.add(newClass);
        return element;
    },

    editChore(inputNewChore, choreErrorMessage, button) {
        if (isStringEmpty(inputNewChore.value)) {
            choreErrorMessage.innerHTML = errorMessage;
            return;
        }
        choreErrorMessage.innerHTML = '';
        inputNewChore.toggleAttribute('disabled');
        if (button.innerHTML === 'Edit') {
            button.innerHTML = 'Save';
        }
        else {
            button.innerHTML = 'Edit';
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
        if (allMoveUpBtns.length > 0) {
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
};