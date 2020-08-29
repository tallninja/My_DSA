


function collectOdds(arr){
    odds = []
    if (arr.length === 0) return odds;
    if (arr[0] % 2 !== 0) odds.push(arr[0]);

    odds = odds.concat(collactOdds(arr.slice(1)))
    return odds
}



console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]))
