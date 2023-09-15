const memo = function(){
    let cache = [];
    return function(n){
        if(cache.includes(n)){
            console.log("already in memory");
        }else{
            console.log("first");
            cache.push(n);
        }
    }
}();
memo(1)
memo(1);