var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// decending order
function decending() {
    integers.sort((start, end) => {
      return end - start;
    });
    document.getElementById("div").innerHTML = integers;
    console.log(" numbers in decending order ")
}
decending();

// lesser than 19
let result = integers.filter( (x) => {
  return x < 19;
  });
console.log(result, "result");