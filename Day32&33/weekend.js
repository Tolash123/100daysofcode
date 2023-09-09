try{
    var x = Number(prompt("Please enter first number: "));
    var y = Number(prompt("please enter second number: "));
    if (y == 0){
        throw("Error: Divide by zero");
    }else{
        console.log("Divede " + x +" / " + y  + "= "+ x/y);
    }
}
catch(err){
    console.log(err);
}
finally{
    console.log("done!");
}