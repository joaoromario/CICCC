//Omit Return
//If you can write the code in a single line, you can omit the return keyword. This can result in very short code.

const f = (a, b) => a + b;
/*
The above line is equal to:
const f = (a, b) => {
    const sum = a + b;
    return sum;
};
console.log(f(3, 4)); // 7
*/
console.log(f(3, 4)); // 7