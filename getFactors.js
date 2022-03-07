const findFactors = (n, all = {}, c = 2) => {
  if (c >= n) {
    return [...Object.values(all)];
  } else if (n % c === 0) {
    let temp = [];
    let x = n;
    while (x % c === 0) {
      temp.push(c);
      x = x / c;
    }
    if (c === 2) {
      temp.push(x);
      let key = temp.sort((a, b) => a - b).join("");
      all[key] = temp;
    } else {
      temp.push(x);
      key = temp.sort((a, b) => a - b).join("");
      all[key] = temp;
      temp = [c];
      let i = c;
      while (i >= 2) {
        if (x % i === 0) {
          temp.push(i);
          x = x / i;
        } else {
          i--;
        }
      }
      x !== 1 && temp.push(x);
      key = temp.sort((a, b) => a - b).join("");
      all[key] = temp;
    }
    return findFactors(n, all, c + 1);
  } else {
    return findFactors(n, all, c + 1);
  }
};

module.exports = findFactors;
