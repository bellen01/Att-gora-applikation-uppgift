
let errorMessage = 'Skriv i en syssla';
function isStringEmpty(text) {
    return text.trim() === "";
}



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


    //Ändra knappens funktioner
    let changeChoreBtn = document.createElement('button');
    changeChoreBtn.innerHTML = "Ändra";
    changeChoreBtn.addEventListener('click', function (e) {
        if (isStringEmpty(newChoreInput.value)) {
            // errorMessage = 'Skriv i en syssla'
            // let displayErrorMessage = document.createElement("div");
            // displayErrorMessage.className = 'addErrorMessage';
            placeholderForErrorMessageDiv.innerHTML = errorMessage;
            // e.target.parentNode.append(placeholderForErrorMessageDiv);
            return;
        }
        placeholderForErrorMessageDiv.innerHTML = '';
        newChoreInput.toggleAttribute("disabled");
        if (e.target.innerHTML === "Ändra") {
            e.target.innerHTML = "Spara";
        }
        else {
            e.target.innerHTML = "Ändra";
        }
    })


    //Färdig-knappens funktioner
    let completedChoreBtn = document.createElement('button');
    completedChoreBtn.innerHTML = "Färdig";
    completedChoreBtn.addEventListener('click', function (e) {
        let completedChoresList = document.getElementById('completed-chores-list');
        completedChoresList.append(e.target.parentNode);
        e.target.remove();
    })


    //Radera knappens funktioner
    let deleteChoreBtn = document.createElement('button');
    deleteChoreBtn.innerHTML = "Radera";
    deleteChoreBtn.addEventListener('click', function (e) {
        e.target.parentNode.remove();
    })

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

// let errorMessage = "";
// if (isStringEmpty(inputEmail.value)) {
//     errorMessage += 'Email is required!<br>';
// }
// if (isStringEmpty(inputPassword.value)) {
//     errorMessage += 'Password is required!<br>';
// }
// if (isStringEmpty(inputAddress.value)) {
//     errorMessage += 'Address is required!<br>';
// }
// if (isStringEmpty(inputAddress2.value)) {
//     errorMessage += 'Second address is required!<br>';
// }
// if (isStringEmpty(inputCity.value)) {
//     errorMessage += 'City is required!<br>';
// }
// if (isStringEmpty(inputZip.value)) {
//     errorMessage += 'Zip code is required!<br>';
// }

// function isStringEmpty(text) {
//     return text.trim() === "";         //  true/false
// }