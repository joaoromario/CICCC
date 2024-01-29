//Without recursion
function sumRange(n){
    let total = 0;
    for(let i = n; i > 0; i--){
        total += i;
    }
    return total;
}

//With recursion

function sumRangeRecursive(n, total = 0){
    if (n <=0){
        return total;
    }
    return sumRangeRecursive(n-1, total + n);
}

//How does it work:
/*sumRangeRecursive(3, 0) //começo da execução n = 3 e total = 0
    sumRangeRecursive(2, 3) //segunda execução n = 2 e total = 3 (0 + 3)
        sumRangeRecursive(1, 5) //terceira execução n = 1 e total = 5 (3 + 2)
            sumRangeRecursive(0, 6) //última execução pq atende a condicional de n menor ou = 0
*/