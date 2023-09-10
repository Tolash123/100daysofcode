var person = {
    firstName: "Mummar",
    lastName: "Gaddafi",
    age: 30,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};
console.log("firstName" in person);
console.log("\n")
console.log(person.hasOwnProperty("lastName"));
console.log("\n");
console.log(person.propertyIsEnumerable("age"));