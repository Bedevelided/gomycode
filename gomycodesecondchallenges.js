let sum = 0;
let set1 = [3 , 1 , 7 , 9];
let set2 = [2 , 4 , 1 , 9 , 3]
// for(let i = 0 ; i < set1.length ; i++){
//     if(set1[i] === 1) continue
//     sum = sum + set1[i]
// }

let iIndexes  = [];
for(let i = 0 ; i < set1.length ; i++){
    for(let j = 0 ; j < set2.length ; j++){
        if(set2[j] === set1[i]){
          sum = sum + set1[i] + set2[j]
        }
    }
}
let sum1 = 0;
for(let j = 0 ; j < set1.length ; j++){
    sum1 = sum1 + set1[j]
}

let sum2 = 0;
for(let j = 0 ; j < set2.length ; j++){
    sum2 = sum2 + set2[j]
}

let distintsum = sum1 + sum2 - sum;
distintsum

