//Code whithout recursion

function countDown(n){
    for(let i = n; i > 0; i--){ //loop for the countdown
        console.log(i); // print the values as the countdown beggins with i
    }
    console.log("Hoooray"); //prints the message after the loop finishes
}

//Code with recursion

function countDownRecursive(n){
    if (n <= 0){ //exit of the recursion (This line is super necessary to finish the loop)
        console.log("Hoooray");
        return //finishes the recursion
    }
    console.log(n); //prints the numbers starting with n
    countDownRecursive(n-1); //calls the function itself with n = n - 1
}

countDownRecursive(4);