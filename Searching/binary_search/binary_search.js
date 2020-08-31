


function binarySearch(arr, value){
    start_pointer = 0
    end_pointer = arr.length - 1
    mid_pointer = Math.floor((start_pointer + end_pointer) / 2)

    while(arr[mid_pointer] !== value && start_pointer <= end_pointer){
        if(value < arr[mid_pointer]){
            end_pointer = mid_pointer - 1
        }else{
            start_pointer = mid_pointer + 1
        }

        mid_pointer = Math.floor((start_pointer + end_pointer) / 2)
    }

    return arr[mid_pointer] === value ? mid_pointer : -1
}


console.log(binarySearch([4, 7, 9, 12, 15, 23, 45, 56, 68, 91], 68))
