// Write a function that prints the first n square numbers and also calculates the sum of these numbers.
const printSquareNumbers = (n) => {
  //write code here
  let total = 0;
  for (let i =1;i<=n;i++){
    total += i*i;
    console.log(i*i);
  }
  console.log(total);
}
printSquareNumbers(5);
//will print: 1, 4, 9, 16, 25
// Final output is: 55
