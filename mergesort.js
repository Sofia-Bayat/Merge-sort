function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  let middle = Math.floor(wholeArray.length / 2),
   firstHalf = wholeArray.slice(0, middle),
   secondHalf = wholeArray.slice(middle);

  return [firstHalf, secondHalf];
}

function merge(left, right){
  let result = [];
  let length = left.length >= right.length ? left.length: right.length;
  for(let i =0; i < length; i++){
    if(left.length && right.length){
      if(left[0] < right[0]){
        result.push(left.shift());
      }else{
        result.push(right.shift());
      }
    }else if (left.length){
      result.push(left.shift());
    }else{
      result.push(right.shift());
    }
  }
  return result;
}

function mergeSort(array) {
  /* your code here */
  let arr, sortedArr = [];
  if(array.length <= 2){
    sortedArr.push.sort(array);
    if(sortedArr.length === 2){
      result.push(merge(sortedArr[0],sortedArr[1]));
    }
  } else {
    arr = split(array);
    for (let i=0; i<arr.length; i++) {
      mergeSort(arr[i]);
    }
  }
  // for(let x=0; x<sortedArr.length/2; x++) {
  //   result = merge(sortedArr[i],sortedArr[i+1]);
  // }

}
