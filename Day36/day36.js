var person = {
    firstName: "Alade",
    lastName: "Idris",
    age: 30,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.firstName + "\n");
delete person.firstName;
console.log(person.firstName + "\n");