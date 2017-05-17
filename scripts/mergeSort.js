let sorted1 = [ 1, 7, 40];
let sorted2 = [ 3, 8, 10, 600];
let mergedArray = [];


let merge = (array1, array2) => {
  let mergedArray = []
  while (array1.length > 0 && array2.length > 0) {
    array1[0] > array2[0] ? mergedArray.push(array2.shift()) : mergedArray.push(array1.shift())
    console.log(array1, array2)
    console.log('--------------')
  }
  while (array1.length > 0) {
    mergedArray.push(array1.shift());
    console.log(array1, array2)
    console.log('--------------')
  }
  while(array2.length > 0) {
    mergedArray.push(array2.shift())
    console.log(array1, array2)
    console.log('--------------')
  }
  return mergedArray
}

// merge(sorted1, sorted2)

let bigArray = [1, 5, 6, 2, 10, 8, 11, 40]

let sort = (array) => {

  if (array.length < 2) {
    return array
  }

  let left = array.slice(0, Math.floor(array.length/2))
  let right = array.slice(Math.floor(array.length/2))
  console.log(left, 'left')
  console.log(right, 'right')
  left = sort(left)
  right = sort(right)

  return merge(left, right)
}

sort(bigArray)
