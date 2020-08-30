


def capitalize(arr):
    if len(arr) == 1:
        return [arr[0].upper()]
    res = capitalize(arr[0:-1])
    res.append(arr[len(arr) - 1:][0].upper())
    return res



print(capitalize('ernest'))
