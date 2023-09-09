var person = {
    firstName: "Mohammed",
    lastName: "Ali",
    age: 30,

    fullName: function(){
        return this.firstName + " " + this.lastName + " is " + this.age + " years old";
    }
};
console.log(person.fullName());