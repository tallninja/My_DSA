


function bubbleSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - 1; j++){
            console.log(arr, arr[j], arr[j + 1])
            if(arr[j] > arr[j + 1]){
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            } 
        }
    }

    return arr
}



console.log(bubbleSort([12, 1, 7, 5]))
