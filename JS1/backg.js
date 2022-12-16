const button = document.getElementById("btn1");
const color = document.querySelector(".spcolor")

const colors = ["#FFF", "rgb(57, 20, 20)", "rgb(57, 20, 60)", "grey", "yellow",
];

button.addEventListener("click", () => {
    let hexColor = colors[getRandomNumber()]
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

const inputText = document.querySelector("#input");
const textBlock = document.querySelector("#text-block");
const btn = document.querySelector("#btn")




const todolist = document.querySelector("#todo-list");
const todoform = document.querySelector("#todo-form");
const todoinput = document.querySelector("#todo-input");



todoform.addEventListener('submit', formHandler);

function formHandler(event){

    event.preventDefault();

    const tasktext = todoinput.value;

    const li = `<li>${tasktext}</li>`

    todolist.insertAdjacentHTML('beforeend', li);

    todoinput.value = '';

    todoinput.focus();


}





// if (btn.addEventListener("click")){}







/*
const button1 = document.getElementById("btn1");
const color1 = document.querySelector(".spcolor")

const colors1 = ["#FFF", "rgb(57, 20, 20)", "rgb(57, 20, 60)", "grey", "yellow",
];

button.addEventListener("click", () => {
    let hexColor = colors[getRandomNumber()]
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}



*/
