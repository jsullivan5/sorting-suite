
let merge = (array1, array2) => {
  let mergedArray = []

  while (array1.length > 0 && array2.length > 0) {
    array1[0] > array2[0] ?
    mergedArray.push(array2.shift())
    : mergedArray.push(array1.shift())
  }

  while (array1.length > 0) {
    mergedArray.push(array1.shift());
  }

  while (array2.length > 0) {
    mergedArray.push(array2.shift())
  }
  return mergedArray
}

let mergeSort = (array) => {

  if (array.length < 2) {
    return array
  }

  let left = array.slice(0, Math.floor(array.length / 2))
  let right = array.slice(Math.floor(array.length / 2))

  left = mergeSort(left)
  right = mergeSort(right)

  return merge(left, right)
}

export {mergeSort};
export {merge};
