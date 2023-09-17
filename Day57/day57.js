// toString
var number = [1, 2, 3];
number.toString();
console.log(number + "\n");

//forEach example 1
var sum = 0;
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(myFunction);
function myFunction(item) {
    return sum += item;
}
console.log(sum + "\n");

//example 2
var numbers = [1, 2, 3, 4];
numbers.forEach(myFunction)
function myFunction(item, index, arr) {
    arr[index] = item * 10;

}
console.log(numbers + "\n")

//3
var colleagueId = [1, 2, 3, 4,5,6,7,8];
colleagueId.forEach(myFunc)
function myFunc(item, index, arr){
    arr[index] = item *100 ;
}
console.log(colleagueId)