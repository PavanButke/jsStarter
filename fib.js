function fib(n){
const num=[1, 1];
    for(let i=2 ; i<n+1 ;i++)
    {
       
        num.push(num[i-2]+num[i-1])
    }
    return num[n];

}

console.log(fib(5));
