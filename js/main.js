
let errorMessage = 'Skriv i en syssla';
function isStringEmpty(text) {
    return text.trim() === "";
}


class btnFunctions {

    //funktion för ändra knappen
    changeChoreBtnClick(inputNewChore, placeholderErrorMessage, eTarget) {
        if (isStringEmpty(inputNewChore.value)) {
            placeholderErrorMessage.innerHTML = errorMessage;
            return;
        }
        placeholderErrorMessage.innerHTML = '';
        inputNewChore.toggleAttribute("disabled");
        if (eTarget.innerHTML === "Ändra") {
            eTarget.innerHTML = "Spara";
        }
        else {
            eTarget.innerHTML = "Ändra";
        }
    }

    //funktion för klicket för färdig-knappen
    completedChoreBtn(e) {
        let completedChoresList = document.getElementById('completed-chores-list');
        completedChoresList.append(e.target.parentNode);
        e.target.remove();
    }


    //funktion för klicket för radera-knappen
    deleteChoreBtn(e) {
        e.target.parentNode.remove();
    }

}


let clickBtnFunction = new btnFunctions();


//Objekt med funktioner/methods i:
// let functionsForBtns = {

// completedChoreBtn: function(e) {
//     let completedChoresList = document.getElementById('completed-chores-list');
//     completedChoresList.append(e.target.parentNode);
//     e.target.remove();
// }

// deleteChoreBtn: function(e) {
//     e.target.parentNode.remove();
// }

//     deleteChoreBtn: function() {
//         deleteChoreBtn.innerHTML = "Radera";
//         deleteChoreBtn.addEventListener('click', function (e) {
//             e.target.parentNode.remove();
//         })
//     }
// }



//Lägg till knappens funktioner
let addChore = document.getElementById('add-chore-btn');
let input = document.getElementById('add-chore')

//Början på att lägga till enter. Lägg till om tid finns.
// input.addEventListener('keyup' function() {})

addChore.addEventListener('click', function () {
    let li = document.createElement('li');
    let newChoreInput = document.createElement("input");
    newChoreInput.value = input.value;
    newChoreInput.setAttribute('type', 'text');
    let displayErrorMessage = document.getElementsByClassName('display-error-message');
    if (isStringEmpty(input.value)) {
        // errorMessage = 'Skriv i en syssla'
        displayErrorMessage.innerHTML = errorMessage;
        return;
    }
    displayErrorMessage.innerHTML = '';
    input.value = '';
    newChoreInput.setAttribute('disabled', 'true');
    let placeholderForErrorMessageDiv = document.createElement('div');
    placeholderForErrorMessageDiv.className = 'display-error-message';



    //Försök till att lyfta ur ändra-knappens click-funktion till objekt och class
    let changeChoreBtn = document.createElement('button');
    changeChoreBtn.innerHTML = "Ändra";
    changeChoreBtn.addEventListener("click", function (e) {
        clickBtnFunction.changeChoreBtnClick(newChoreInput, placeholderForErrorMessageDiv, e.target);
    })



    //Ändra knappen med gammal kod
    // let changeChoreBtn = document.createElement('button');
    // changeChoreBtn.innerHTML = "Ändra";
    // changeChoreBtn.addEventListener('click', function (e) {
    //     if (isStringEmpty(newChoreInput.value)) {
    //         // errorMessage = 'Skriv i en syssla'
    //         // let displayErrorMessage = document.createElement("div");
    //         // displayErrorMessage.className = 'addErrorMessage';
    //         placeholderForErrorMessageDiv.innerHTML = errorMessage;
    //         // e.target.parentNode.append(placeholderForErrorMessageDiv);
    //         return;
    //     }
    //     placeholderForErrorMessageDiv.innerHTML = '';
    //     newChoreInput.toggleAttribute("disabled");
    //     if (e.target.innerHTML === "Ändra") {
    //         e.target.innerHTML = "Spara";
    //     }
    //     else {
    //         e.target.innerHTML = "Ändra";
    //     }
    // })

    //Färdig-knappens funktioner
    // let completedChoreBtn = document.createElement('button');
    // completedChoreBtn.innerHTML = "Färdig";
    // completedChoreBtn.addEventListener('click', function (e) {
    //     let completedChoresList = document.getElementById('completed-chores-list');
    //     completedChoresList.append(e.target.parentNode);
    //     e.target.remove();
    // })


    //Försök till att lyfta ur färdig-knappens click-funktion till objekt och class
    let completedChoreBtn = document.createElement('button');
    completedChoreBtn.innerHTML = "Färdig";
    completedChoreBtn.addEventListener("click", clickBtnFunction.completedChoreBtn);


    //Radera knappens funktioner
    // let deleteChoreBtn = document.createElement('button');
    // deleteChoreBtn.innerHTML = "Radera";
    // deleteChoreBtn.addEventListener('click', function (e) {
    //     e.target.parentNode.remove();
    // })



    //Försök till att lyfta ur radera-knappens click-funktion till objekt och class
    let deleteChoreBtn = document.createElement('button');
    deleteChoreBtn.innerHTML = "Radera";
    deleteChoreBtn.addEventListener("click", clickBtnFunction.deleteChoreBtn);



    let toDoChores = document.getElementById('to-do-list');
    toDoChores.append(li);
    li.append(newChoreInput, changeChoreBtn, completedChoreBtn, deleteChoreBtn, placeholderForErrorMessageDiv);

})


//Återställ knappen skapad med js
let removeAllChoresBtn = document.createElement("button");
removeAllChoresBtn.innerHTML = "Återställ";
let placeBesideAddChoreBtn = document.getElementById("add-chore-btns");
placeBesideAddChoreBtn.append(removeAllChoresBtn);
removeAllChoresBtn.addEventListener('click', function () {
    let ul = document.getElementsByTagName('ul');
    for (let i of ul) {
        while (i.lastElementChild) {
            i.firstElementChild.remove();
        }
    }
})


//Återställ knappen fast med knappen redan skapad i html-dokumentet
// let removeAllChores = document.getElementById('remove-all-chores-btn');
// removeAllChores.addEventListener('click', function () {
//     let ul = document.getElementsByTagName('ul');
//     for (let i of ul) {
//         while (i.lastElementChild) {
//             i.firstElementChild.remove();
//         }
//     }
// })
