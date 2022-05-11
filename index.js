let barsButton = document.getElementById("bars");
let buttonList = document.getElementById("button-list");

barsButton.addEventListener('click', e =>{
    console.log("click");
    buttonList.classList.toggle("buttons-res-on");
});
