//1
var person = {
    firstName: "Alade",
    lastName: "Idris",
    age: 30,
    fullName: function () {
        return this.firstName + " " + this.lastName + " is " + this.age + " years old" ;
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
var user = {
    name: 'Mummar',
    nationality: 'Libyan',
    education: 'B.sc',
    position: 'CEO',

    Id: function(){
        return this.name+ " |" + this.nationality +" |"+ this.position;
    }
};

for(var i = 0; i<10; i++){
    console.log(user.Id())
}
//5
function myFunction(){
    return this;
}