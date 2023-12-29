const receivesAFunction=datus=>datus();

var fn;
const returnsANamedFunction=()=>{
   (function (){
    fn=returnsANamedFunction
   })
    return function cheruh (){fn()}
}

const returnsAnAnonymousFunction=()=>{
    return function(){fn()}
}