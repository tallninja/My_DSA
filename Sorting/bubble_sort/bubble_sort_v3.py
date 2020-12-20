


def bubbleSort(arr):
    for i in range(len(arr) - 1):
        swap = False
        for j in range(len(arr) - 1):
            print(arr, arr[j], arr[j + 1])
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swap = True
        
        if not swap:
            break


    return arr


print(bubbleSort([12, 1, 7, 5]))
