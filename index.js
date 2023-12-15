// receivesAFunction
let receivesAFunction = (spy) => {
    spy()
}



// returnsANamedFunction
let returnsANamedFunction = () => {
    return function namedFunction() {
        // function body
    }
}


// returnsAnAnonymousFunction
let returnsAnAnonymousFunction = () => {
    return (() => {
        // function body
    }) ;
}