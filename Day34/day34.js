//1
var person = {
    firstName: "Alade",
    lastName: "Idris",
    age: 30,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName() + "\n");


//2
var test = {
    prop: 42,
    func: function(){
        return this.prop;
    },
};
console.log(test.func() + "\n");

//3
var x = this;
console.log(x + "\n");

//4
console.log(this === window);

a=37;
console.log("\n" + window.a);
this.b = "It is mine";
console.log("\n" + window.b);
console.log("\n" +b);
console.log("\n")

//5
function myFunction(){
    return this;
}