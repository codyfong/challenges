//Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

//For example:
//Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

//Follow up:
//Could you do it without any loop/recursion in O(1) runtime?

function AddDigits(integer) {
    let digits = String(integer).split('').map(Number)
    let sum = 0
    while(integer.toString().length > 1){
        digits.forEach(digit => {
        sum += digit
    })
    integer = sum
    digits = String(integer).split('').map(Number)
    sum = 0
}
return(integer)
}

console.log(AddDigits(38))