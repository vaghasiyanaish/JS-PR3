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

// let num=153;
// let sum=0;
// let data=num;

// while(num !=0){
//     let rem=num%10;
//     sum=sum+rem**3;
//     num=Math.floor(num/10);
// }
// console.log(sum);
// if(data==sum){
//     console.log("atmstrong number");
// }else{
//     console.log("not an armstrong number");
// }


//q.4 Palindrone number of given number

let num=153;
let sum=0;
let data=num;

while(num !=0){
    let rem=num%10;
    sum=(10*sum)+rem;
    num=Math.floor(num/10);
}
console.log(sum);
if(data==sum){
    console.log("palindrone number");
}else{
    console.log("not an palindrone number");
}




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