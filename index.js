// Write a function that prints the first n square numbers and also calculates the sum of these numbers.
const printSquareNumbers = (n) => {
  //write code here
  //original solution
  let total = 0;
  for (let i =1;i<=n;i++){
    total += i*i;
    console.log(i*i);
  }
  console.log(total);

  //Reverse solution
  // let total =0;
  // let temp = 1;
  // for(let i = n;i>0;i--){
  //   total +=i+i;
  //   console.log(temp*temp);
  //   temp++;
  // }

}
printSquareNumbers(5);
//will print: 1, 4, 9, 16, 25
// Final output is: 55
