// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(data) {
    if(data !== undefined){
        if(data[0] === "plus"){
            return 0 + data[1];
        }
        else if(data[0] === "minus"){
            return 0 - data[1];
        }
        else if(data[0] === "times"){
            return 0 * data[1];
        }
        else{
            return Math.floor(0/data[1]);
        }
    }
    return 0;
}
function one(data) {
    if(data !== undefined){
        if(data[0] === "plus"){
            return 1 + data[1];
        }
        else if(data[0] === "minus"){
            return 1 - data[1];
        }
        else if(data[0] === "times"){
            return 1 * data[1];
        }
        else{
            return Math.floor(1/data[1]);
        }
    }
    return 1;
}
function two(data) {
    if(data !== undefined){
        if(data[0] === "plus"){
            return 2 + data[1];
        }
        else if(data[0] === "minus"){
            return 2 - data[1];
        }
        else if(data[0] === "times"){
            return 2 * data[1];
        }
        else{
            return Math.floor(2/data[1]);
        }
    }
    return 2;
}
function three(data) {
    if(data !== undefined){
        if(data[0] === "plus"){
            return 3 + data[1];
        }
        else if(data[0] === "minus"){
            return 3 - data[1];
        }
        else if(data[0] === "times"){
            return 3 * data[1];
        }
        else{
            return Math.floor(3/data[1]);
        }
    }
    return 3;
}
function four(data) {
    if(data !== undefined){
        if(data[0] === "plus"){
            return 4 + data[1];
        }
        else if(data[0] === "minus"){
            return 4 - data[1];
        }
        else if(data[0] === "times"){
            return 4 * data[1];
        }
        else{
            return Math.floor(4/data[1]);
        }
    }
    return 4;
}
function five(data) {
    if(data !== undefined){
        if(data[0] === "plus"){
            return 5 + data[1];
        }
        else if(data[0] === "minus"){
            return 5 - data[1];
        }
        else if(data[0] === "times"){
            return 5 * data[1];
        }
        else{
            return Math.floor(5/data[1]);
        }
    }
    return 5;
}
function six(data) {
    if(data !== undefined){
        if(data[0] === "plus"){
            return 6 + data[1];
        }
        else if(data[0] === "minus"){
            return 6 - data[1];
        }
        else if(data[0] === "times"){
            return 6 * data[1];
        }
        else{
            return Math.floor(6/data[1]);
        }
    }
    return 6;
}
function seven(data) {
    if(data !== undefined){
        if(data[0] === "plus"){
            return 7 + data[1];
        }
        else if(data[0] === "minus"){
            return 7 - data[1];
        }
        else if(data[0] === "times"){
            return 7 * data[1];
        }
        else{
            return Math.floor(7/data[1]);
        }
    }
    return 7;
}
function eight(data) {
    if(data !== undefined){
        if(data[0] === "plus"){
            return 8 + data[1];
        }
        else if(data[0] === "minus"){
            return 8 - data[1];
        }
        else if(data[0] === "times"){
            return 8 * data[1];
        }
        else{
            return Math.floor(8/data[1]);
        }
    }
    return 8;
}
function nine(data) {
    if(data !== undefined){
        if(data[0] === "plus"){
            return 9 + data[1];
        }
        else if(data[0] === "minus"){
            return 9 - data[1];
        }
        else if(data[0] === "times"){
            return 9 * data[1];
        }
        else{
            return Math.floor(9/data[1]);
        }
    }
    return 9;
}

function plus(data) {
    lst = [];
    lst.push("plus");
    lst.push(data);
    return lst;
}
function minus(data) {
    lst = [];
    lst.push("minus");
    lst.push(data);
    return lst;
}
function times(data) {
    lst = [];
    lst.push("times");
    lst.push(data);
    return lst;
}
function dividedBy(data) {
    lst = [];
    lst.push("dividedBy");
    lst.push(data);
    return lst;
}

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3
console.log(eight(dividedBy(three()))); // must return 2