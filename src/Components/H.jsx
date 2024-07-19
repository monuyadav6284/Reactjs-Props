import React from "react";

function H() {
  return (
    <>
      <h1> {React.version}</h1>
    </>
  );
}

export default H;


// function fibo(n) {
//     for (let i = 0; i <= n; i++) {
//         console.log(fibonacci(i));
//     }
// }

// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }
//     const fibNumber = fibonacci(n - 1) + fibonacci(n - 2);
//     return fibNumber; 
// }

// fibo(10);  
