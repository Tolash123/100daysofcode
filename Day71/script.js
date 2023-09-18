var myVar = setInterval(setColor, 300);
function setColor(){
    var x = document.body;
    x.style.backgroundColor = x.style.backgroundColor == "black"? "white": "black";
}
//To stop the toggling between the background colors
function stopColor(){
    clearInterval(myVar);
};
//To change background color
function conTog(){
    return setColor();
}

