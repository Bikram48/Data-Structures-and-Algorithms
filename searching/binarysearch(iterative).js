function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] == target) {
      return true;
    }

    if (target > arr[mid]) {
      start = mid + 1;
    }

    if (target < arr[mid]) {
      end = mid - 1;
    }
  }

  return false;
}

console.log(binarySearch([10, 14, 31, 40, 60, 90, 110], 1));
