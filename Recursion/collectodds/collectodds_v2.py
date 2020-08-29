


def collectOdds(arr):
    odds = []

    if len(arr) == 0:
        return odds

    if arr[0] % 2 != 0:
        odds.append(arr[0])

    odds = odds + collectOdds(arr[1:])
    return odds



print(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]))
