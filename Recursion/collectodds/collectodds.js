


function collectOdds(arr){
    odds = [];

    function collector(input_arr){
        if (input_arr.length === 0) return;
        if (input_arr[0] % 2 !== 0) odds.push(input_arr[0]);
        collector(input_arr.slice(1));
    }

    collector(arr);
    return odds;
}



console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]))
