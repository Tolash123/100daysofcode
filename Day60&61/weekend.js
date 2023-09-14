var first = [1, 2, 3, 5, 8, 13];
var second = [1, 2, 3, 4, 8, 13];

console.log(first + "\n" + second); //It prints out the first and the second array

function myFunction(item, index){
    if(first[index] != second[index]){
        console.log('index: ' + index + ' value: '+ item + '\n')
    }
}
first.forEach(myFunction);
second.forEach(myFunction);
