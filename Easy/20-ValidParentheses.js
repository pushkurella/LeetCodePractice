// var isValid = function (s) {
//   // const map = new Map({"bracket": 0, "square": 0, "para":0});
//   const map = { bracket: 0, square: 0, para: 0 };
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "{") {
//       map["bracket"] = map["bracket"] + 1;
//     } else if (s[i] === "}") {
//       map["bracket"] = map["bracket"] - 1;
//     }

//     if (s[i] === "[") {
//       map["square"] = map["square"] + 1;
//     } else if (s[i] === "]") {
//       map["square"] = map["square"] - 1;
//     }

//     if (s[i] === "(") {
//       map["para"] = map["para"] + 1;
//     } else if (s[i] === ")") {
//       map["para"] = map["para"] - 1;
//     }
//   }
//   if (
//     map["bracket"] % 2 !== 0 ||
//     map["square"] % 2 !== 0 ||
//     map["para"] % 2 !== 0
//   ) {
//     return false;
//   }
//   return true;
// };
// var isValid = function (s) {
//   if (s.length % 2 !== 0) return false;
// const map = {
//   "{": "}",
//   "[": "]",
//   "(": ")",
// };
// if (
//   s.indexOf(map["{"]) === -1 &&
//   s.indexOf(map["["]) === -1 &&
//   s.indexOf(map["("]) === -1
// ) {
//   return false;
// }

// const temp = [];
// for (let i = 0; i < s.length; i++) {
//   if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
//     temp.push(s[i]);
//   } else {
//     let topElement = temp.pop();
//     if (map[topElement] !== s[i]) {
//       return false;
//     }
//   }
// }
// return temp.length > 0 ? false : true;
// };
var isValid = function (s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{") {
      arr.push("}");
    } else if (s[i] === "(") {
      arr.push(")");
    } else if (s[i] === "[") {
      arr.push("]");
    } else if (arr.pop !== s[i]) {
      return false;
    }
  }
  return arr.length > 0 ? false : true;
};
console.log(isValid("{[]}"));

// console.log(isValid("(]"));
