function flip() {
    return Math.random() >= 0.5;
}

function randomNumber(n) {
  if(n==0){
    return 0;
  }

  if(n < 0 || n > 1000000){
    throw "The number must be within the range. (0 ... 1000000)";
  }

  var n_bin = (n >>> 0).toString(2);

  while(true){
    var count = n_bin.length;
    var stack = new Array();

    while(count >= 0){
      stack[count] = Number(flip());
      count --;
    }

    random_n = parseInt(stack.join(""), 2);

    if(random_n <= n){
      return random_n;
    }
  }
}

console.log(randomNumber(0)) // returns 0
console.log(randomNumber(500)) // returns 123
console.log(randomNumber(1)) // returns 0
console.log(randomNumber(500)) // returns 466
console.log(randomNumber(1000001)) // throw error
