// map
var numbers = [4, 9, 16];
var x = numbers.map(Math.sqrt);
//filter
a = [1,2,3,4,5];
smallvalues = a.filter(function(x){
    return x < 3
});
everyother = a.filter(function(x,i){
    return i%2==0
});
console.log(everyother + "\n")
console.log(smallvalues + "\n")
//every & some

b = [1,2,3,4,5];
y = b.every(function(x){
    return x < 10;
})
z = b.every(function(x){
    return x % 3 === 0;
})
console.log(y + "\n");
console.log(z + "\n")

//reduce and reduceRight

var number = [175, 50, 25];
var leftToRight = number.reduce(function(total, num){
    return total - num;
});
var rightToLeft = number.reduceRight(function(total, num){
    return total-num;
});
console.log(leftToRight + "\n");
console.log(rightToLeft + "\n");

//indexOf & lastIndexOf
var fruits = [1, 2, 3, 4, 5];
var x = fruits.indexOf(1);
var t = fruits.lastIndexOf(2);
console.log(x + '\n');
console.log(t + "\n")