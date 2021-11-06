

let addChore = document.getElementById('add-chore-btn');

addChore.addEventListener('click', function () {
    let li = document.createElement('li');
    let newChoreInput = document.createElement("input");
    let input = document.getElementById('add-chore')
    newChoreInput.value = input.value;
    newChoreInput.setAttribute('type', 'text');
    input.value = '';
    newChoreInput.setAttribute('disabled', 'true');


    let changeChoreBtn = document.createElement('button');
    changeChoreBtn.innerHTML = "Ändra";
    changeChoreBtn.addEventListener('click', function (e) {
        newChoreInput.toggleAttribute("disabled");
        if (e.target.innerHTML === "Ändra") {
            e.target.innerHTML = "Spara";
        }
        else {
            e.target.innerHTML = "Ändra";
        }
    })

    let completedChoreBtn = document.createElement('button');
    completedChoreBtn.innerHTML = "Färdig";
    completedChoreBtn.addEventListener('click', function (e) {
        let completedChoresList = document.getElementById('completed-chores-list');
        completedChoresList.append(e.target.parentNode);
        e.target.remove();
    })



    let deleteChoreBtn = document.createElement('button');
    deleteChoreBtn.innerHTML = "Radera";
    deleteChoreBtn.addEventListener('click', function (e) {
        e.target.parentNode.remove();
    })

    let toDoChores = document.getElementById('to-do-list');
    toDoChores.append(li);
    li.append(newChoreInput, changeChoreBtn, completedChoreBtn, deleteChoreBtn);

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

