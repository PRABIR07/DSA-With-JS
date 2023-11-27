// GCD | HCF
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

// using recursion or Euclidean Algorithm
function gcd2(a, b) {
  if (b == 0) {
    return a;
  }
  return gcd2(b, a % b);
}
console.log(gcd2(12, 6));

// Find LCM of two number?

function gcd3(a, b) {
  let ans = 1;
  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i == 0 && b % i == 0) {
      ans = i;
    }
  }
  return ans;
}

function findlcm(a, b) {
  let G = gcd3(a, b);
  return (a * b) / G;
}
console.log(findlcm(9, 12));

// Finding Greatest Common Divisor by LCM Method?

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
