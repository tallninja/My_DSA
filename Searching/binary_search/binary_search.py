import math


def binarySearch(arr, value):
    start_pointer = 0
    end_pointer = len(arr) - 1
    mid_pointer = math.floor((start_pointer + end_pointer) / 2)

    while arr[mid_pointer] != value and start_pointer <= end_pointer:
        if value < arr[mid_pointer]:
            end_pointer = mid_pointer - 1
        else:
            start_pointer = mid_pointer + 1

        mid_pointer = math.floor((start_pointer + end_pointer) / 2)

    if arr[mid_pointer] == value:
        return mid_pointer

    return -1





print(binarySearch([4, 7, 9, 12, 15, 23, 45, 56, 68, 91], 20))
