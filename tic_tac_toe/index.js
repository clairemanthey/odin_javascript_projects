let chooseX = document.getElementById("btn-x");
let choose0 = document.getElementById("btn-0");
let start = document.getElementById("go");


let choiceX = () => {
	console.log("You chose X");
	start.classList.add("go-visibilty")
}

let choice0 = () => {
	console.log("You chose 0");
	start.classList.add("go-visibilty")
}

chooseX.addEventListener("click", choiceX);
choose0.addEventListener("click", choice0)