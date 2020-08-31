


function linearSearch(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1
}



console.log(linearSearch([1, 3, 7, 9, 5], 7))
console.log(linearSearch([1, 3, 7, 9, 5], 2))
