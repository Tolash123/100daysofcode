let url = new URL(eportal.custech.edu.ng);
let params = new URLSearchParams(url.search.slice(1));

params.set('par', 5);
console.log(params.toString());