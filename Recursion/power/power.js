


function power(num, exponent){
    if (exponent === 0) return 1;
    return num * power(num, exponent - 1)
}



console.log(power(2, 5))
