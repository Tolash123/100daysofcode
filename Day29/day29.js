var x;
function positive(x){
    if(x >= 0) return x;
    else throw "x must not be negative";
}
try{
    var n = Number(promp("please enter a positive integer", ""));
    positive(n);
    console.log(n + "is positive");
}catch(y){
    console.log(y);
}finally{
    console.log("finally, i got it");
}