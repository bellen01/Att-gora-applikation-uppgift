
let errorMessage = 'Skriv i en syssla';
function isStringEmpty(text) {
    return text.trim() === '';
}

let addChore = document.getElementById('add-chore-btn');
let input = document.getElementById('add-chore');

//pseudokod för funktion för att avgöra om en li ska ha knappen upp, ner eller båda
/*
Vid tryck på lägg till - kolla om det finns några sysslor i att göra listan
om en - lägg till ner-knapp på befintlig syssla och upp-knapp på nya sysslan
om ingen - lägg inte till några varken upp- eller ner-knappar
om två - lägg till upp-knapp på nya sysslan

vid tryck på upp-knapp - kolla om det sysslan blir överst i listan
om ja - ta bort upp-knapp
om nej - gör inget

vid tryck på ner-knapp - kolla om sysslan hamnar längst ner i listan
om ja - ta bort ner-knapp
om nej - gör inget

Måste kunna skilja dom åt, lägg på ny klass på vardera
skapa funktion- anropa från alla tre platserna som ändrar listan
i den funktionen hämtar jag ut alla som har klassen upp respektive ner
alla jag får tillbaka visar jag förutom den första respektive den sista, dom döljer jag med css antingen direkt på elementet eller med en klass i cssen
lägg till klass på den första respektive sista, och ta bort den på alla andra.
*/



// class btnFunctions {

// changeChoreBtnClick(inputNewChore, placeholderErrorMessage, eTarget) {
//     if (isStringEmpty(inputNewChore.value)) {
//         placeholderErrorMessage.innerHTML = errorMessage;
//         return;
//     }
//     placeholderErrorMessage.innerHTML = '';
//     inputNewChore.toggleAttribute("disabled");
//     if (eTarget.innerHTML === "Ändra") {
//         eTarget.innerHTML = "Spara";
//     }
//     else {
//         eTarget.innerHTML = "Ändra";
//     }
// }

//     //funktion för klicket för färdig-knappen
//     completedChoreBtn(e) {
//         let completedChoresList = document.getElementById('completed-chores-list');
//         completedChoresList.append(e.target.parentNode);
//         e.target.remove();
//     }

// completedChoreBtn(e) {
//     let completedChoresList = document.getElementById('completed-chores-list');
//     let button = e.target;
//     completedChoresList.append(button.parentNode);
//     let buttonParent = button.parentNode;
//     let itemsWithMoveChoreClass = document.getElementsByClassName('move-chore');
//     let moveChoresBtns = Array.from(itemsWithMoveChoreClass);
//     for (let child of moveChoresBtns) {
//         if (child.parentNode === buttonParent) {
//             child.remove();
//         }
//     }
//     button.remove();
// }


//     //funktion för klicket för radera-knappen
//     deleteChoreBtn(e) {
//         e.target.parentNode.remove();
//     }

// moveUpOrDown(button, up) {
//     let li = button.parentNode;
//     let ul = li.parentNode;
//     if (up == true) {
//         let prevLi = li.previousElementSibling;
//         if (prevLi) {
//             ul.insertBefore(li, prevLi);
//         }
//     }
//     else {
//         let nextLi = li.nextElementSibling;
//         if (nextLi) {
//             ul.insertBefore(nextLi, li);
//         }
//     }
// }

// }


// let clickBtnFunction = new btnFunctions();


//Objekt med funktioner/methods i:
let functionsForBtns = {

    createNewElement(elementToCreate, text, newClass) {
        elementName = document.createElement(elementToCreate);
        elementName.innerHTML = text;
        elementName.classList.add(newClass);
        return elementName;
    },

    changeChoreBtnClick(inputNewChore, placeholderErrorMessage, eTarget) {
        if (isStringEmpty(inputNewChore.value)) {
            placeholderErrorMessage.innerHTML = errorMessage;
            return;
        }
        placeholderErrorMessage.innerHTML = '';
        inputNewChore.toggleAttribute('disabled');
        if (eTarget.innerHTML === 'Ändra') {
            eTarget.innerHTML = 'Spara';
        }
        else {
            eTarget.innerHTML = 'Ändra';
        }
    },

    completedChoreBtn(e) {
        let completedChoresList = document.getElementById('completed-chores-list');
        let button = e.target;
        completedChoresList.append(button.parentNode);
        let buttonParent = button.parentNode;
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

    deleteChoreBtn(e) {
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
        console.log(allMoveUpBtns)
        let removeFirst = allMoveUpBtns.shift();
        // removeFirst.setAttribute('disabled', 'true');
        removeFirst.style.display = 'none';
        // removeFirst.classList.add('hide-btns');
        for (let upBtns of allMoveUpBtns) {
            // upBtns.removeAttribute('disabled');
            // upBtns.classList.remove('hide-btns');
            upBtns.style.display = 'inline-block';
        }
        let allMoveDownBtns = Array.from(document.getElementsByClassName('move-down'));
        let removeLast = allMoveDownBtns.pop();
        // removeLast.setAttribute('disabled', 'true');
        removeLast.style.display = 'none';
        // removeLast.classList.add('hide-btns');
        for (let downBtns of allMoveDownBtns) {
            // downBtns.removeAttribute('disabled');
            downBtns.style.display = 'inline-block';
            // downBtns.classList.remove('hide-btns');
        }
    }
}



input.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        addChore.click();
    }
});

addChore.addEventListener('click', function () {
    let li = document.createElement('li');
    let newChoreInput = document.createElement('input');
    newChoreInput.classList.add('input-field');
    newChoreInput.value = input.value;
    newChoreInput.setAttribute('type', 'text');
    let displayErrorMessage = document.getElementById('display-error-message');
    if (isStringEmpty(input.value)) {
        displayErrorMessage.innerHTML = errorMessage;
        return;
    }
    displayErrorMessage.innerHTML = '';
    input.value = '';
    newChoreInput.setAttribute('disabled', 'true');
    let placeholderForErrorMessageDiv = document.createElement('div');
    placeholderForErrorMessageDiv.className = 'error-message';


    let changeChoreBtn = functionsForBtns.createNewElement('button', 'Ändra', 'buttons');
    // changeChoreBtn.style.margin = '5px';
    //let changeChoreBtn = document.createElement('button');
    // changeChoreBtn.innerHTML = "Ändra";
    changeChoreBtn.addEventListener('click', function (e) {
        //clickBtnFunction.changeChoreBtnClick(newChoreInput, placeholderForErrorMessageDiv, e.target);
        functionsForBtns.changeChoreBtnClick(newChoreInput, placeholderForErrorMessageDiv, e.target);
    })


    newChoreInput.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            changeChoreBtn.click()
        }
    })

    let moveChoreUpBtn = functionsForBtns.createNewElement('button', 'Upp', 'buttons');
    // let moveChoreUpBtn = document.createElement('button');
    // moveChoreUpBtn.innerHTML = "Flytta upp";
    moveChoreUpBtn.classList.add('move-chore', 'move-up');
    moveChoreUpBtn.addEventListener('click', function (e) {
        functionsForBtns.moveUpOrDown(e.target, true)
    })

    let moveChoreDownBtn = functionsForBtns.createNewElement('button', 'Ner', 'buttons');
    // let moveChoreDownBtn = document.createElement('button');
    // moveChoreDownBtn.innerHTML = "Flytta ner";
    moveChoreDownBtn.classList.add('move-chore', 'move-down');
    moveChoreDownBtn.addEventListener('click', function (e) {
        functionsForBtns.moveUpOrDown(e.target, false)
    })

    let completedChoreBtn = functionsForBtns.createNewElement('button', 'Färdig', 'buttons');
    // let completedChoreBtn = document.createElement('button');
    // completedChoreBtn.innerHTML = "Färdig";
    //completedChoreBtn.addEventListener("click", clickBtnFunction.completedChoreBtn);
    completedChoreBtn.addEventListener('click', functionsForBtns.completedChoreBtn);

    let deleteChoreBtn = functionsForBtns.createNewElement('button', 'Radera', 'buttons');
    // let deleteChoreBtn = document.createElement('button');
    // deleteChoreBtn.innerHTML = "Radera";
    //deleteChoreBtn.addEventListener("click", clickBtnFunction.deleteChoreBtn);
    deleteChoreBtn.addEventListener('click', functionsForBtns.deleteChoreBtn);


    let toDoChores = document.getElementById('to-do-list');
    toDoChores.append(li);
    li.append(newChoreInput, changeChoreBtn, completedChoreBtn, deleteChoreBtn, moveChoreUpBtn, moveChoreDownBtn, placeholderForErrorMessageDiv);

    functionsForBtns.showAndHideMoveBtns();
})


let removeAllChoresBtn = functionsForBtns.createNewElement('button', 'Återställ', 'buttons');
// let removeAllChoresBtn = document.createElement("button");
// removeAllChoresBtn.innerHTML = "Återställ";
let placeBesideAddChoreBtn = document.getElementById('add-chore-btns');
placeBesideAddChoreBtn.append(removeAllChoresBtn);
removeAllChoresBtn.addEventListener('click', function () {
    let ul = document.getElementsByTagName('ul');
    for (let i of ul) {
        while (i.lastElementChild) {
            i.firstElementChild.remove();
        }
    }
})
