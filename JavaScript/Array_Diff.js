// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    for(let i = 0; i < b.length; i++){
        for(let j = 0; j < a.length; j++){
            if(b[i] === a[j]){
                if(j !== a.length-1){
                    for(let k = j; k < a.length - 1; k++){
                    a[k] = a[k+1];
                    }
                }
                a.pop();
                j--;
            }
        }
    }
    return a;
}

console.log(arrayDiff([1,2], [1]));
console.log(arrayDiff([1,2,2,2,2,3], [2]));