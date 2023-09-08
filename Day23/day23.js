var i =0;
HowToLabel: while (i<3){
    console.log("i= " +i+ "\n");
    i++;
}


for(var i = 0; i < 1000; i++){
    console.log("Hello \n");
    if(i==2)
    break;
}


var x = 0;
var z = 0;
labelCancelLoops: while(true){
    console.log("Outer loops(x):" + x + " ");
    x += 1;
    z = 1;
    while(true){
        console.log("Inner loops(z):" + x + "\n");
        z += 1;
        if (z === 3 && x === 3){
            break labelCancelLoops;
        }else if (z === 3){
            break;
        }
    }
}