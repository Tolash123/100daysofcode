function myFunction(){
    var a = 4;// local
    return a*a;
}

console.log(myFunction());
//----------------------
var b = 4; //global
function myFunc(){
    return Math.sqrt(b);
}
console.log(myFunc());
//-----------------
var counter = 0;
function add(){
    counter += 1;
}add();add();

console.log(counter + '\n');

//------------
var add = (function (){
    var count = 0;
    return function(){
        count += 1; return count
    }
})();add();