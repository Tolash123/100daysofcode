# Day 63

## Function
- Functions can be used as values: ex.

> function myFunction(a,b){
    return a * b;
}
var x = myFunction(4,3);

- Self-Invoking functions:
 A self-invoking expression is invoked(started) automatically, without being called. Function expressions will execute automatically if the expression is followed by (). Example:
 (function (){
    var c = 'hello'; // i will invoke myself
 })();

 - function expressions
 It can also be defined using an expression. A function expression can be stored in a variable. Ex.

 var x = function(a, b){return a * b};

 - The function() constructor
 They are defined with the function keyword. functions can also be defined with a built-in js function constructor called function(). Ex:
 var myFunction = new Function('a', 'b', 'return a * b');
 var x = myFunction(4,3)