function logger (text) {
    /* let text = hello */
    console.log (text)
}

/*logger('hello')
logger('szia') */

function logTheSumOfTwoNumbers(x, y) /* camelCase */ { 
/* let x = 1
let y = 2 */

console.log(x + y);
}
/* lofTheSumOfTwoNumbers(1, 2); */

function sumTwoNumbers(x , y) {
    let sum = 0;
    sum = x + y;

    return sum;
}

logger(sumTwoNumbers(10, 5))