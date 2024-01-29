function factorial(num){
    let fac = num;
    for (let i = num; i !== 1; i--){
        if (i !== 1){
            fac *= i-1;
        }
    }
    return fac;
}

console.log(factorial(1));

//How can I make it better?

