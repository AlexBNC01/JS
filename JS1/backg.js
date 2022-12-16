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

inputText.addEventListener("input", () => {
        console.log(inputText.value);
        textBlock.innerText = inputText.value;
    }
);













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
