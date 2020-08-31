


def linearSearch(arr, val):
    for i in range(len(arr)):
        if arr[i] == val:
            return i
    return -1



print(linearSearch([1, 5, 7, 9, 3], 7))
print(linearSearch([1, 5, 7, 9, 3], 2))
