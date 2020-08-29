


def collectOdds(arr):
    odds = []

    def collector(input_arr):
        if len(input_arr) == 0:
            return

        if input_arr[0] % 2 != 0:
            odds.append(input_arr[0])

        collector(input_arr[1:])


    collector(arr)

    return odds


print(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]))
