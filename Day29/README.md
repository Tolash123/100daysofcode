# Day 29

## The try / catch / finally statement

It handles some or all of the errors that may occur in a block of code, while still running code. 

Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things.

+ The try statement allows you to define a block of code to be tested for errors while it is being executed.

+ The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

+ The finally statement lets you execute code, after try and catch, regardless of the result.

syntax:

try{
    trycode
}
catch(err){
    catchCode
}
finally(
    finallyCode
)