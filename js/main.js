

let addChore = document.getElementById('add-chore-btn');

addChore.addEventListener('click', function () {
    let li = document.createElement('li');
    let newChoreInput = document.createElement("input");
    let input = document.getElementById('add-chore')
    newChoreInput.value = input.value;
    newChoreInput.setAttribute('type', 'text');
    input.value = '';
    newChoreInput.setAttribute('disabled', 'true');
    //newChoreInput.toggleAttribute("disabled");


    let changeChoreBtn = document.createElement('button');
    changeChoreBtn.innerHTML = "Ändra";
    changeChoreBtn.addEventListener('click', function () {
        changeChoreBtn.innerHTML = "Spara";
        newChoreInput.toggleAttribute("disabled");
    })

    let completedChoreBtn = document.createElement('button');
    completedChoreBtn.innerHTML = "Färdig";
    completedChoreBtn.addEventListener('click', function () {

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

// let removeAllChores = document.getElementById('remove-all-chores-btn');
// removeAllChores.addEventListener('click', function () {
//     let li = document.getElementsByTagName('li');
//     li.innerHTML = "";
// })

//Återställ knappen
let removeAllChores = document.getElementById('remove-all-chores-btn');
removeAllChores.addEventListener('click', function () {
    let ul = document.getElementsByTagName('ul');
    for (let i of ul) {
        while (i.lastElementChild) {
            i.firstElementChild.remove();
        }
    }
})

// let removeAllChores = document.getElementById('remove-all-chores-btn');
// removeAllChores.addEventListener('click', function () {
//     for (let i of ul) {
//         for (let child of i) {
//             child.lastElementChild.remove();
//         }
//     }
// })
