var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];


let result = integers.sort((start, end) => {return end - start}).filter(x => {return x < 19;}).map((y) => y * 1.5 - 1);
console.log(result, "result");

// Multiply each remaining number by 1.5 and then subtract 1.



