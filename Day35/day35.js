//1
function user(id, FirstName, LastName){
    this.id = id;
    this.FirstName = FirstName;
    this.LastName = LastName;
}

var Alade = new user(1001, "Alade", "Idris");
var Fahad = new user(1002, "Fahad", "Saad");
console.log(Alade.id + " " + Fahad.FirstName + " "+ Alade.LastName);

//2


function userAdm(id, name, education, address, nationality){
    this.id = id;
    this.name = name;
    this.education = education;
    this.address = address;
    this.nationality = nationality;
};

var Christopher = new userAdm(1, 'christopher Nolan', 'level1', 'Alabama', 'English');
var Christ = new userAdm(2, 'christ Nolan', 'level3', 'Ny', 'American');

console.log(Christopher.id, Christopher.name + "\n" + Christ.id, Christ.name);