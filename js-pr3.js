//q:1 multiplication table given number

// let a=6;

// for(let i=0;i<=10;i++){
//     let j;
//     j=a*i;
//     console.log(a +  " * "+i+" = "+j);
// }

//q:2 factorial number of given number

// let num=5;
// let fact=1;
// let s=num;

// while(s>0){
//     fact*=s;
//     s--;
// }
// console.log("factorial of "  + num +  "is=" + fact);

//q.3 Armstrong number of given number

// let numb = 750, v = 1;

// do {
//     let sums = 0, temp = v, digits = 0, n = v;

//     do { digits++; n = (n - n % 10) / 10; } while (n);

//     do {
//         let d = temp % 10, p = 1, j = digits;
//         do { p *= d; j--; } while (j);
//         sums += p;
//         temp = (temp - temp % 10) / 10;
//     } while (temp);

//     if (sums === v) console.log(v);

//     v++;
// } while (v <= numb);


//q.4 Palindrone number of given number

// let q = 300;  
// let w = 1;

// while (w <= q) {
//     let o = w;
//     let r = 0;
//     let t = w;

//     while (t > 0) {
//         let d = t % 10;
//         r = r * 10 + d;
//         t = (t - (t % 10)) / 10;  
//     }

//     if (o === r) {
//         console.log(w);
//     }

//     w++;
// }



//q.5 calculate fibonacci series of a given number

// let n = 10; 
// let a = 0, b = 1, x, i = 1;

// while (i <= n) {
//     console.log(a);
//     x = a + b;
//     a = b;
//     b = x;
//     i++;
// }


//q.6

// let sum1=0;
// let q=1;
// do{
//     sum1+=q;
//     q++;
// }while(q<=30);
// console.log("sum of numbers from 1 to 30 is:"+sum1);

//q.7

// y=1;
// do{
//     if(y%3===0){
//         console.log("Fizz");
//     }
//     else if(y%5===0){
//         console.log("Buzz");
//     }else if(y%3===0 && y%5===0){
//         console.log("Fizzbuzz");
//     }else{
//         console.log(y);
//     }
//     y++;
// }while(y<=100);

//q.8

// // let ans="";
// // for(let x=1;x<=10;x++){
// //     ans+=x;
// //     if(x<10){
// //         ans+="-";
// //     }
// // }
// console.log(ans);

//Q.9
// let result="";
// let sum=0;
// for(let r=1;r<=10;r++){
//     let square=r*r;
//     sum+=square;
//     result+=square;
//     if(r<10){
//         result+="+";
//     }
// }
// console.log(result,"=",sum);

//q.10

// let r="";

// for(let i = 5; i >= 1; i--)
//     {
//     for(let j = 5; j >= i; j--){
//         r+=j;
//     }
//     r+="\n"
// }
// console.log(r);

//q.11

// let x = 5;
// let y = 1;
// let z = "";

// for (let t = 1; t <= x; t++) {
//    for (let num = 1; num <= t; num++) {
//       z += y+" ";
//       y++;
//    }
//    z += "\n";
// }
// console.log(z);