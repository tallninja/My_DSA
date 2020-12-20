


function bubbleSort(arr){
    let swap;
    for(let i = arr.length; i > 0; i--){
        swap = false;
        for(let j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j + 1]);
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swap = true;
            } 
        }

        if(swap = false) break;
    }
    return arr;
}


console.log(bubbleSort([12, 1, 7, 5]))
