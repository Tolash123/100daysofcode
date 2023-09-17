var str = 'Hello world'
//charAt()

var a = str.charAt(0);
var b = str.charAt(str.length-3);
console.log(a + "\n");
console.log(b + "\n")

//includes
var n = str.includes('world');
console.log(n + "\n")

//localCompare
var str1 = 'ab'
var str2 = 'ab'
var n = str1.localeCompare(str2);
console.log(n + '\n')

//search
var d = str.search("Hello");
console.log(d + "\n");

//toUpperCase
var d = str.toUpperCase();
console.log(d + "\n");

//toLowerCase
var d = str.toLowerCase();
console.log(d + "\n")