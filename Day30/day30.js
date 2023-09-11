//1
var person = {
    firstName: "Alade",
    lastName: "Idris",
    age: 30,
    eyecolor: "brown",
};
console.log("Name: " + person.firstName + "\n");
console.log("Age: " + person["age"] + "\n");

//2
var college = {
    lecturer: "Mr Alade",
    mail: 'confluence@email.com',
    phoneNo: '070324',
    address : {
        street: "cooker",
        city: 'lagos'

    }
}

console.log(college)
console.log(college.address.street)