// var join = function (arr1, arr2) {
//   let resultArr = [];
//   const ids = [];
//   for (let i = 0; i < arr1.length; i++) {
//     let iEle = arr1[i];
//     for (let j = 0; j < arr2.length; j++) {
//       let jEle = arr2[j];
//       if (iEle.id === jEle.id && ids.indexOf(jEle.id) === -1) {
//         resultArr.push({ ...iEle, ...jEle });
//         ids.push(jEle.id);
//         continue;
//       } else if (iEle.id < jEle.id && ids.indexOf(iEle.id) === -1) {
//         resultArr.push(iEle);
//         ids.push(iEle.id);
//         continue;
//       }
//     }
//   }
//   const remainingArr = [...arr1, ...arr2].filter(
//     (item) => ids.indexOf(item.id) === -1
//   );
//   resultArr.push(remainingArr);
//   return resultArr.sort((a, b) => a.id - b.id);
// };

// Working Approach
var join = function (arr1, arr2) {
  let result = {};
  for (let i = 0; i < arr1.length; i++) {
    result[arr1[i].id] = arr1[i];
  }
  console.log(result);
  for (let i = 0; i < arr2.length; i++) {
    if (result[arr2[i].id]) {
      for (const key in arr2[i]) {
        console.log(key);
        result[arr2[i].id][key] = arr2[i][key];
      }
    } else {
      result[arr2[i].id] = arr2[i];
    }
  }
  return Object.values(result);
};
const arr1 = [
  { id: 1, x: 0, g: 2 },
  { id: 2, e: 23, a: 55 },
  { id: 3, y: 6, r: 11, v: 14 },
];
const arr2 = [
  { id: 2, p: 80, f: 76, k: 85 },
  { id: 4, c: 29, k: 98 },
];
console.log(join(arr1, arr2));
