//ex 1
function myFunction(a,b){
    return a * b;
}
console.log(myFunction(4,3) + "\n");

//ex 2
(function s(){
    for (i = 0; i<5; i++)// You can delete this line of code
    console.log( 'Hello Dristol!' + '\n');
})()

// ex 3
var x = function (a, b){return a * b}
console.log(x(1,5) + '\n');

//ex 4
var myFunction = new Function('a','b', 'return a * b');
console.log(myFunction(5,5));
