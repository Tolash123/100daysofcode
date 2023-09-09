# Day 34

*What is this*

This refers to the object it belongs to.

*this is a method*

In an object method, this refers to the owner object.

fullName: function(){
    return this.firsName + " " + this lastName;
}


*this Alone*

when used alone, this refers to the global object.

var x = this;

*this in a function*

In a function, this refers to the Global object[object Window].

> function myFunction(){
    return this;
}