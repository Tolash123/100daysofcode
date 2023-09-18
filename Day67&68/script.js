let cache = [];
const memo = function(){
    return function(n){
        if(cache.includes(n))
        console.log('Existing')
        else
        console.log('new');
        cache.push(n)
    }
}();
memo('Tolani');
console.log(cache)