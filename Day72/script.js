
var myWindow; //declare a variable myWindow

//To open a new window
function openW(){
    myWindow = window.open('', 'window', 'height:500px, width:500px')
}
//To close window
function closeW(){
    if(myWindow){
        myWindow.close();
    }
}
//To check if the window is closed or not
function checkW(){
    if(!myWindow){
        document.getElementById('msg').innerHTML = 'window is opened';
    }else{
        if(myWindow.closed){
            document.getElementById('msg').innerHTML = 'window is closed';
        }else{
           document.getElementById('msg').innerHTML = 'window has not been closed' 
        }
    }
}
