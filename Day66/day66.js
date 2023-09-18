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

//-----------------

var price = 3000;//global
function myFunction(){
        if(price == 3100){
            console.log('new price is: ' + price)
        }else
        console.log('check back later. Thank You!')
    
}
myFunction();