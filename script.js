//Variables
let input = document.getElementById('newTask');
let list = document.getElementById('to-do-list');
let addButton = document.getElementById('addTask');

//Event Listeners
addButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = input.value
    list.appendChild(paragraph);
    input.value = "";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    });
    paragraph.addEventListener('dblclick', function() {
        list.removeChild(paragraph);
    });
});

input.addEventListener('keypress', e => {
   if (e.key === "Enter"){
    var paragraph = document.createElement('p')
    paragraph.innerText = input.value
    list.appendChild(paragraph);
    input.value = "";
    }
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    });
    paragraph.addEventListener('dblclick', function() {
        list.removeChild(paragraph);
    });
});

