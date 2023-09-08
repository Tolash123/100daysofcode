var x = 0;
var y = 0;
while(x < 5){
    x++;
    if(x == 3){
        continue;
    }
    y += x;
    console.log("y = " +y+ " x =" +x+ "\n");
}

var i = 0;
var j = 10;
checkiandj:
while(i < 4){
    console.log(i);
    i += 1;
    checkj:
    while(j > 4){
        console.log(j);
        j -= 1;
        if((j % 2) == 0){
            continue checkj;
        }
        console.log( j +"is odd.");
    }
    console.log("i = " + i);
    console.log("j = " + j);
}