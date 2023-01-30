function rotateLeft(arr, idx) {
  const n = arr.length;
  let k = 0;
  let newArray = [];
  if (idx) {
    if (Number.isInteger(idx)) {
      if (n - 1 < idx) {
        console.log("not enough elements in your array");
      }
      let temp = new Array(n);
      for (let i = idx; i < n; i++) {
        temp[k] = arr[i];
        k++;
      }
      for (let i = 0; i < idx; i++) {
        temp[k] = arr[i];
        k++;
      }

      for (let i = 0; i < n; i++) {
        newArray.push(temp[i]);
      }
      console.log(newArray);
    } else {
      console.log("please enter a integer as index");
    }
  } else {
    console.log("please enter a index");
  }
}
rotateLeft([1, 2, 3, 4], 1);
