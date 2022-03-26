// function isPrime(n){
//     for(let i=2 ; i< n; i++){
//     if(n%i==0){
//             return false
//     }
// }
    

//     return true;
// }

// console.log(isPrime(5))

function isPrime(n){
 for(let i=2 ; i< Math.sqrt(n); i++){
    console.log("count", i)

    if(n%i==0){
            return false
    }
}
    

    return true;
}

console.log(isPrime(27277))