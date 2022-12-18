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




// -------------   TODO Лист ----------------------
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

    // const li = `<li>${tasktext}</li>`;
    // todolist.insertAdjacentHTML('beforeend', li);

    const newtask = document.createElement('li');
    newtask.innerText = tasktext;

    const deletebtn = document.createElement('button');
    deletebtn.setAttribute('role', 'button');
    deletebtn.innerText = 'Delete';
    deletebtn.style['margin-left'] = '15px';
    newtask.append(deletebtn);

    deletebtn.addEventListener('click', deletetask);

    todolist.append(newtask);



    todoinput.value = '';

    todoinput.focus();
}

function deletetask() {
    this.closest('li').remove();

}