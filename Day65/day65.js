var person = {
    fullName: function (){
        return this.firstName + ' ' + this.lastName;
    }
}

var person1 = {
    firstName: 'Orahachi',
    lastName: 'Rose'
}

console.log(person.fullName.apply(person1) + '\n');

//example2

var ami = {
    fullName: function(city, country){
        return this.firstName + ' ' + this.lastName + ' is from ' + city + ', ' + country + '\n';
    }
}
var ami1 = {
    firstName: 'Alade',
    lastName: 'Idris',
}

console.log(ami.fullName.apply(ami1, ['oslo', 'Norway']));