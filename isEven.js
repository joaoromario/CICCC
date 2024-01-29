function isEven(number){
    if (number % 2 ===0){
        return true;
    }else {
        return false;
    }
}

function isEven2(number){
    return number % 2 ===0 ? true: false;
}

function isEven3(number){ //simplified
    return number % 2 ===0;
}

console.log(isEven(2));

console.log(isEven2(10));