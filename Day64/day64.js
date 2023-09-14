// ex1
var person = {
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
}

var person1 = {
    firstName: 'John',
    lastName: 'Doe'
}
var person2 = {
    firstName: 'Idris',
    lastName: 'Muktar'
}
var person3 = {
    firstName: 'Alade',
    lastName: 'Tolani'
}
var person4 = {
    firstName: 'Ayodeji',
    lastName: 'Ayomikun'
}
console.log(person.fullName.call(person1) + '\n')
console.log(person.fullName.call(person2) + '\n')
console.log(person.fullName.call(person4) + '\n')
console.log(person.fullName.call(person3) + '\n')

// ex2
var person = {
    fullName: function(city, country){
        return this.firsName + ' ' + this.lastName + ',' + city + ',' + country;
    }
}

var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  console.log(person.fullName.call(person1, "Oslo", "Norway") + "<br>");