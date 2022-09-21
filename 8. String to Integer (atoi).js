/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trim();
  let result = "";
  if (s.length == 0) return 0;
  if (s.length == 1)
    if (s >= "0" && s <= "9") return parseInt(s);
    else return 0;
  // first two: if has sign
  if (s[0] == "+" || s[0] == "-") {
    result = getNumber(s.substring(1));
  } else {
    result = getNumber(s);
  }

  if (result.length == 0) {
    return 0;
  }

  if (result.length > 10) {
    return s[0] == "-" ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
  }
  result = parseInt(result) * (s[0] == "-" ? -1 : 1);
  if (result > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }
  if (result < Math.pow(-2, 31)) return Math.pow(-2, 31);
  return result;
};

function getNumber(input) {
  let res = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] >= "0" && input[i] <= "9") {
      if (res.length == 0 && input[i] == "0") {
        continue;
      }
      res += input[i];
    } else return res;
  }
  return res;
}
