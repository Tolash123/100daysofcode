var activities = [
    ['working', 7],
    ['Eating', 6],
    ['walking', 4],
    ['playing game', 7],
    ['sleeping', 8],

];

var compute = new Array(5);
for (var i = 0; i<compute.length; i++)
compute[i]= new Array(3);
for(var row = 0; row <compute.length; row++){
    for(col = 0; col <compute[row].length; col++){
        compute[row][col] = row*col;
    }
}

var product = compute [5]*[3];

console.log(product);