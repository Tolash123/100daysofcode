//1
function person1(){}
function person2(){}
person1.prototype = Object.create(person2.prototype);
const person3 = new person2()
console.log(person1.prototype.isPrototypeOf(person3));
console.log(person2.prototype.isPrototypeOf(person3));

//2
function user(){
    var firstName = 'mummar';
    var nationality = 'Togolese';
}

function user1(){
  return user();
}

console.log(user.prototype.isPrototypeOf(user1()));
