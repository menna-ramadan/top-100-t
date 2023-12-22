console.log("hellooooo");
// function myfun(arr) {
//   return arr.filter((x) => x > 0).reduce((acc, current) => acc + current, 0);
// }
// console.log(myfun([1, -6, -5, 9]));

// function myfun(n) {
//   return n
//     .toString()
//     .split("")
//     .map((x) => Number(x))
//     .reverse();
// }

// console.log(myfun(234));

// function myfun(n) {
//   return n <= 0 ? n : n * -1;
// }

// console.log(myfun(0));

// function myfun(arr) {
//   return "hello " + arr.indexOf("needle");
// }

// console.log(myfun(["menna", "noooo", "menna", "noooo", "needle"]));

// function positiveSum(arr) {
//   return arr.filter((x) => x > 0).reduce((acc, current) => acc + current, 0);
// }

// console.log(positiveSum([1, -4, 7, 12]));

// function squareSum(numbers) {
//   return numbers.map((x) => x * x).reduce((acc, current) => acc + current, 0);
// }

// function summation(num) {
//   return (num) => (num * num++) / 2;
// }
// console.log(summation(3));

// function noSpace(x) {
//   return x.split(" ").join("");
// }
// console.log(noSpace("kjhkjh kjhkh kjlijlk hh ggyg "));

// function highAndLow(numbers) {

//   return `${Math.max(...numbers.split(" "))} ${Math.min(
//     ...numbers.split(" ")
//   )}`;
// }
// console.log(highAndLow("2 8 6"));

// function descendingOrder(n) {
//   return Number([...String(n)].sort((a, b) => b - a).join(""));
// }
// console.log(descendingOrder("5433290"));

// function getMiddle(s) {

//   midd = Math.floor(s.length / 2);
//   return s.length % 2 == 0 ? s[midd - 1] + s[midd] : s[midd];
// }

// console.log(getMiddle("dokpjo"));

// function getCount(str) {
//   return str.replace(/[^aieuo]/gi, "").length;
// }
// console.log(getCount("jhggfddsaiytu"));

// function getCount(str) {
//   words = str.split(" ");
//   shorts = words[0].length;
//   return words.filter((x) => x.length > shorts);
// }
// console.log(getCount("jhgg fdds aiy tu"));

function squareDigits(num) {
  return Number(
    num
      .split("")
      .map((x) => x * x)
      .join("")
  );
}

console.log(squareDigits("2112"));
