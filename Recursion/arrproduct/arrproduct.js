


function arrProduct(arr){
    if (arr.length === 0) return 1;
    return arr[0] * arrProduct(arr.slice(1))
}



console.log(arrProduct([9, 7, 5, 3]))
