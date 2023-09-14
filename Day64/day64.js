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
console.log(person.fullName.call(person1) + '\n');
// ex2
var colleague = {
    firstName: 'John',
    lastName: 'Doe',
}

var person2 = {
    fullName: function(city, country){
        return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
    }
}


  console.log(person2.fullName.call(colleague, "Oslo", "Norway"));