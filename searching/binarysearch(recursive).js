function binarySearch(arr, target, start, end) {
  if (start > end) {
    return false;
  }

  mid = Math.floor(start + (end - start) / 2);

  if (arr[mid] == target) {
    return true;
  }

  if (target > arr[mid]) {
    binarySearch(arr, target, mid + 1, end);
  }

  if (target < arr[mid]) {
    binarySearch(arr, target, start, mid - 1);
  }
}

let arr = [10, 14, 31, 40, 60, 90, 110];
console.log(binarySearch(arr, 14, 0, arr.length));
