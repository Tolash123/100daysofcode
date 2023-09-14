//example 1

function print(j){
    for(var i = 0; i<j; i++){
        console.log(i + '\n');
    }
}
print(5);

//example 2
function distance(x1, x2, y1, y2 ){
    var dx = x2 -x1;
    var dy = y2 -y1;
    return Math.sqrt(dx*dx + dy*dy);
}
var dis = distance(10, 20,10,30);
console.log('distance(10, 20, 10, 30) : ' + dis + '\n');


//example 3
function hypotenuse(a, b){
    function square(x){
        return x*x;
    }
    return Math.sqrt(square(a) + square(b));
}

console.log(hypotenuse(3,4));