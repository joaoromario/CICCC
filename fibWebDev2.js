//With memoization

function fib(n, prevValues = []){
    if (prevValues[n] != null){ //checks if the values are already stored (memoization)
        return prevValues[n];
    }
    let result;
    if(n <=2){
        result = 1;
    }else {
        result = fib(n-1, prevValues) + fib(n-2, prevValues); //calls the function itself and stores the values on prevValues
    }
    prevValues[n] = result; //saves the results in the array
    return result;
}

console.log(fib(8));