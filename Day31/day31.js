//1
var person = {
    firstName: "Mohammed",
    lastName: "Ali",
    age: 30,

    fullName: function () {
        return this.firstName + " " + this.lastName + " is " + this.age + " years old";
    }
};
console.log(person.fullName());

//2
var university = {
    uniName: 'Custech',
    address: {
        LGA: 'Adavi LGA',
        state: 'kogi state',
    },
    building: 30,
    department: 50,

    fullUni: function () {
        return this.uniName + ", " + this.address.state  
        ;
    }
};

console.log(university.fullUni());
