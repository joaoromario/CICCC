
function sumNumbers(numbers){
    let sum = 0;
    let arr = numbers[0];
    for (let i = 0; i < 3; i++){
        sum +=numbers[i];
    }
    console.log(sum);
}

sumNumbers([1,3,10]);