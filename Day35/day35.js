function user(id, FirstName, LastName){
    this.id = id;
    this.FirstName = FirstName;
    this.LastName = LastName;
}

var Alade = new user(1001, "Alade", "Idris");
var Fahad = new user(1002, "Fahad", "Saad");
console.log(Alade.id + " " + Fahad.FirstName + " "+ Alade.LastName);