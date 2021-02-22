module.exports = function check(str, bracketsConfig) {

  let stack = [];

  let open = new Object();

  let closed = new Object();

  let line = new Object();


  for (let n = 0; n < bracketsConfig.length; n++) {
    let arr = bracketsConfig[n];
    if (arr.length > 0) {
      if (arr[0] === arr[1]) {
        line[arr[0]] = true;
      } else {
        open[arr[0]] = arr[1];
        closed[arr[1]] = true;
      }
    }

  }

  for (let i = 0; i < str.length; i++) {

    let char = str[i];

    if (open[char] || line[char]) {
      if (open[char]) {
        stack.push(char);
      }
    }
    else if (line[char]) {
      if (stack.pop() !== line[char]) {
        stack.push(char);
      }
      else {
        stack.pop();
      }

    }
    else if (closed[char] || line[char]) {
      if (open[stack.pop()] !== char && line[stack.pop()] !== char) return false;
    }
  }
  console.log(open);
  console.log(closed);
  console.log(line);
  return stack.length === 0;
}

