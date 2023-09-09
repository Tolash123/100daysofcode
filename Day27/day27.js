//function 1
var x;
function square(x){
    return x*x;
}
console.log(square(3) + "\n");

//function 2
function counter(){
    for(var count = 1; ; count++){
        console.log(count + "A \n");
        if(count === 5){
            return;
        }
        console.log(count + "B \n");
    }
    console.log(count + "c \n");
}
counter();
