//Create program to enter the data of each employee
var employees = [
    [1, 'Ahmed', 'programmer', 6],
    [2,"Saad", "Engineer", 3],
    [3, "Omar", "Accountant", 1],
    [4, "Mohammed", "CEO", 5],
    [5, "Rami", "Programmer", 2],
    [6, "Salem", "Analyst", 8],

]



for (var i = 0; i < employees.length; i++) {
    document.write("<tr><td>" + employees[i][0] + "</td>");
    document.write("<td>" + employees[i][1] + "</td>");
    document.write("<td>" + employees[i][2] + "</td>");
    document.write("<td>" + employees[i][3] + "</td></tr>");
}


/*
//Read data of employees with more than 3 years of experience

for (var i = 0; i < employees.length; i++) {
    if (employees[i][2] > 3) {
        document.write("<tr><td>" + employees[i][0] + "</td>");
        document.write("<td>" + employees[i][1] + "</td>");
        document.write("<td>" + employees[i][2] + "</tr>");
        document.write("<td>" + employees[i][2] + "</td></tr>");
    }

}

//Delete data of employee saad
for (var i = 0; i < employees.length; i++) {
    if (employees[i][0] == "Saad") {
       delete employees[i]; 
    }
    console.table(employees[i]);
}
*/