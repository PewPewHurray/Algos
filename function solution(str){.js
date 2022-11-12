function openOrSenior(data){
    let arr = [];
    for(let i = 0; i < data.length; i++){
        if(data[i][0] >= 55 && data[i][1] > 7){
            arr.push("Senior");
        }
        else{
            arr.push("Open");
        }
    }
    return arr;
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]));