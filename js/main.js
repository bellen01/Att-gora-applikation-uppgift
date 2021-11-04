

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

    let completedChoreBtn = document.createElement('button');
    completedChoreBtn.innerHTML = "Färdig";


    let deleteChoreBtn = document.createElement('button');
    deleteChoreBtn.innerHTML = "Radera";

    let toDoChores = document.getElementById('to-do-list');
    toDoChores.append(li);
    li.append(newChoreInput, changeChoreBtn, completedChoreBtn, deleteChoreBtn);

})

