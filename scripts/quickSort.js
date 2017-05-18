let quickSort = (array) => {
  let small = [];
  let large = [];
  let pivot = array[0];

  if ( array.length < 2 ) {
    return array;
  }

  for (let i = 1; i < array.length; i ++) {
    (pivot > array[i]) ? small.push(array[i]) :
    large.push(array[i])
  }

  return [...quickSort(small), pivot, ...quickSort(large)]
}

export default quickSort
