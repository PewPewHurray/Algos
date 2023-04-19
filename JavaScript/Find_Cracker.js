// Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

// var array = [
// ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
// ["name2", 110, ["B", "A", "A", "A"]],
// ["name3", 200, ["B", "A", "A", "C"]],
// ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
// ];
// The scores for each grade is:

// A: 30 points
// B: 20 points
// C: 10 points
// D: 5 points
// Everything else: 0 points
// If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

// Returns the name of the hacked name as an array when scoring with this rule.

function findHack(arr) {
    let lst = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i][1]>200){
            lst.push(arr[i][0]);
            continue;
        }
        let points = 0;
        let flag = true;
        for (let j = 0; j < arr[i][2].length; j++){
            let grade = arr[i][2][j];
            if(grade==="A"){
                points+=30;
            } else if(grade==="B"){
                points+=20;
            } else if(grade==="C"){
                points+=10;
                flag=false;
            } else if(grade==="D"){
                points+=5;
                flag=false;
            } else{
                flag=false;
            }
        }
        if(arr[i][2].length>=5 & flag===true){
            points+=20;
        }
        if(points>200){
            points=200;
        }
        if(points !== arr[i][1]){
            lst.push(arr[i][0]);
        }
    }
    return lst;
}