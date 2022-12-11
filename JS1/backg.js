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

