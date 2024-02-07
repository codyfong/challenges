//Determine whether an integer is a palindrome.

function IsPalindromeNumber(x0){
    if(x0 < 0){
        console.log('test1')
        return false
    }
    let x = x0
    let rev = 0
    while(x > 0){
        rev = (rev*10) + (x%10)
        x = (x-(x%10))/10
    }
    return x0 === rev
}

console.log(IsPalindromeNumber(2002))