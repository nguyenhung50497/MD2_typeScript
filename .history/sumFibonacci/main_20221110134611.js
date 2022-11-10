// function fibonacci(num: number, memo: any) {
//     memo = memo || {};
  
//     if (memo[num]) return memo[num];
//     if (num <= 1) return num;
  
//     return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
// }

function fibonacci(number) {
    if (number <= 1) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}

let sum = 0;
for (let i = 0; i < 10; i++) {
    sum += fibonacci(i);
    console.log(fibonacci(i));
}

console