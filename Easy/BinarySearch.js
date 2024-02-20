function BinarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] < target) {
    Search(arr, target, start + 1, end);
  } else if (arr[mid] > target) {
    Search(arr, target, start, end - 1);
  }
  return -1;
}
console.log(BinarySearch([-5, 2, 4, 6, 10], 10));

// Recursive Binary search
function RecursiveBinarySearch(arr, target) {
  return Search(arr, target, 0, arr.length - 1);
}
function Search(arr, target, start, end) {
  if (start > end) {
    return -1;
  }
  let middle = Math.floor((start + end) / 2);
  if (arr[middle] === target) {
    return middle;
  }
  if (target < arr[middle]) {
    return Search(arr, target, start, middle - 1);
  } else {
    return Search(arr, target, middle + 1, end);
  }
}

console.log(RecursiveBinarySearch([-5, 2, 4, 6, 10], 10));
const map = new Map();
map.size;
