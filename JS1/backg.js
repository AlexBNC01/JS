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



// -------------   ТАЙМЕР Лист ----------------------


// const timer = setInterval(function(){
//     console.log('Fired');
// }, 1000);

// clearInterval(timerintevalID);


// const time = setInterval(function(){
//     console.log('SF');
// },1000)

// setTimeout(function(){
//     clearInterval(time);
// }, 12001)



// -------------   Секундомер ----------------------


const counterEL = document.querySelector('#counter');
let counter = 0;
let timerID;


// setInterval(function(){
//     counter = counter + 1;

//     counterEL.innerText = counter;
// },1000)

// Start


const btnstart = document.querySelector('#start');

btnstart.onclick = function() {
    timerID = setInterval (function(){
        counter = counter + 1;
        
        counterEL.innerText = counter;
    }, 1000)

}

//Stop

const btnstop = document.querySelector('#stop');
btnstop.onclick = function (){
    clearInterval(timerID);

}






//Slider


let offset = 0;
const sliderline = document.querySelector('.slider-line');
document.querySelector('.slider-next').addEventListener('click' , function(){
    offset = offset+256;
    if (offset>1356){
        offset = 0;
    }
    sliderline.style.left = -offset + 'px';

});

document.querySelector('.slider-prev').addEventListener('click' , function(){
    offset = offset-256;
    if (offset<0){
        offset = 1356;
    }
    sliderline.style.left = -offset + 'px';

});



