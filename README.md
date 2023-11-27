# DSA-With-JS

Dsa with Javascript

# GCD - Greatest Common Divisor

**The Greatest Common Divisor (GCD), also known as the Greatest Common Factor (GCF) or Highest Common Factor (HCF).**

The greatest common divisor of two numbers is the largest number that divides both of them without leaving a remainder.

GCD of any two numbers is never negative or 0 as the least positive integer common to any two numbers is always 1.

- For example,the GCD of 8 & 12 is 4 because 4 is the largest number that divides both 8 & 12 evenly.

- 8-> 1,2,4,8
- 12->1, 2,4,6,12
- The common factors are: 1,2,4 , so 4 is the largest number.

lets take another example to understand better:

##### Question: Find the greatest common divisor of 13 and 16.

- 13 -> 1,13
- 16 -> 1,2,4,8,16

#### Answer: GCD : 1

#### Write a program to calculate GCD or HCF of two numbers?

```js
function gcd(a, b) {
  let ans = 1;
  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i == 0 && b % i == 0) {
      ans = i;
    }
  }
  return ans;
}
console.log(gcd(12, 20));
```

### How to find the GCD of two numbers using recursion or Euclidean Algorithm?

1. The GCD (Greatest Common Divisor) of two numbers is the largest number that can divide both numbers without leaving a remainder. To find the GCD of two numbers using recursion, you can follow these steps:

   - Check if any of the numbers is 0. If the first number is 0, the second number is the GCD. If the second number is 0, the first number is the GCD.

   - If neither of the numbers is 0, find the remainder when the first number is divided by the second number.

Now, replace the first number with the second number and the second number with the remainder found in step 2. Repeat steps 2 and 3 until one of the numbers is 0.

```
//Euclidean Algorithm
function gcd(a,b){
    if(b==0){
        return a;
        }else{
            return gcd(b,a%b);
    }
}
console.log(gcd2(12, 6));
```

### Finding LCM of two number ?

LCM stands for Least Common Multiple which means it's the smallest positive integer that both given integers can divide into without leaving any remainder.
LCM is calculated by dividing the product of two numbers with their GCD.

```
function gcd(a,b){
    let ans =1
    for(let i =2; i<= Math.min(a,b);i++){
        if(a %i ==0 & b%i ==0){
            ans=i
;        }
    }
    return ans;
}

function findlcm(a,b){
    let G = gcd(a,b)
    return (a*b)/ G
}
console.log(findlcm(9,12)) //36
```

### Finding Greatest Common Divisor by LCM Method?

_Formula_ :

GCD(a,b) = a\*b/(LCM of a & b)

```
function gcdBylcm(a, b) {
  return (a * b) / lcm(a, b);
}

function lcm(a, b) {
  let G = gcd4(a, b);
  return (a * b) / G;
}
function gcd4(a, b) {
  if (b == 0) {
    return a;
  }
  return gcd4(b, a % b);
}

console.log(gcdBylcm(12, 20));
```
