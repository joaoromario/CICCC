function findMax(arr){
    return Math.max(...arr); //this "..." is called spread and it returns attributes the values of the array in the order provided
}

console.log(findMax([1, 100, 2, 53, 7]));