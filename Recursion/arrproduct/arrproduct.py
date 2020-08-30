


def arrProduct(arr):
    if len(arr) == 0:
        return 1
    return arr[0] * arrProduct(arr[1:])



print(arrProduct([9, 7, 5, 3]))
