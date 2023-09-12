var Employee = [
    ['Ahmed', 'programmer', 6],
    ["Saad", "Engineer", 3],
    ["Omar", "Accountant", 1],
    ["Mohammed", "CEO", 5],
    ["Rami", "Programmer", 2],
    ["Salem", "Analyst", 8],

]

for (var i = 0; i<Employee.length; i++){
   console.log(Employee[i]);
}

//2  making query
for(var i = 0; i<Employee.length; i++){
    if(Employee[i][2]>3){
        console.log(Employee[i][0])
    }
}

//3
for(var i = 0; i<Employee.length; i++){
    if(Employee[i][0] == "saad"){
        delete Employee[i];
    }
    console.table(Employee[i]);
}