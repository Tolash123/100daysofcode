//Using boolean values
var a = 0;
if (a == 5)
    console.log(a);

var b = 0;
if (b !== 5)
    console.log(b);

// comparing the variables
var x = 5;
var y = "5";
if (x == y)
    console.log("x = y")

var s = 5;
var t = "5";
if (s === t)
    console.log("s === t")

//conditional ternary operator
var age, voteable;
age = 18;
voteable = (age <= 18)? "Too young" : "Too old";
console.log(voteable);

//check for the nationality using tenary operator

var country, nationality;
country = ["Togo", "Nigeria", "Cameroon", "England"];
nationality = (country == "Cameroon")? "Togo" : "Cameroon";
console.log(nationality);