function person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
person.prototype.nationality = "Nigerian";
var myFather = new person("Mummar", "Gaddagi", 50, "black");
console.log("The nationality: " + myFather.nationality);