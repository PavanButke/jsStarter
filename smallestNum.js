// function smallN(num){
//     if(num.length !=0){
//         let curr_min = num[0];
//  for(let n=1 ; n< num.length ; n++)
//         {
//             if(n < curr_min)
//             {
//                 curr_min = n;
//             }
//         }
//         return curr_min;
//     }
// }

// console.log(smallN([10, 11 ,15, 13]))

function getMin(numbers){
    let currentMin = numbers[0];
    
    if(numbers.length !=0){
        
        for(const num of numbers){
            if(num < currentMin){
            currentMin = num;
            }
        }
    }
    return currentMin;

}

console.log(getMin([16,12,12,15]))