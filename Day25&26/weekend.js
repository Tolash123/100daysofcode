var a;
for(var a =0; a < 5; a++){
    console.log(a);
}


//To check for odd and even number
var i = 0;
for(var count = 1; count <= 10; count++){
    checkEvenNum:
    while(count % 2 == 0){
        console.log(count + " is even number \n")
        break;
    }
    checkOddNum:
    i = count;
    while(i % 2 !== 0){
        console.log(i + " is odd number \n")
        i++
        continue;
    }
}