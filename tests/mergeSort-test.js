import { expect } from 'chai';
import { mergeSort } from '../scripts/mergeSort.js';
import { merge } from '../scripts/mergeSort.js';
import genRanNum from '../scripts/genRanNum.js';
import charGen from '../scripts/charGen.js';

describe('merge function', () => {

  it('should be a function', () => {
    expect(merge).to.be.instanceof(Function);
  });

  it('should merge two sorted arrays into one sorted array', () => {
    let array1 = [1, 4, 6, 8];
    let array2 = [3, 5, 9, 11];
    let compArray = [1, 3, 4, 5, 6, 8, 9, 11];

    let mergedArray = merge(array2, array1);

    expect(mergedArray).to.deep.equal(compArray)
  })

})

describe('Merge sort', () => {

  it('should be a function', () => {
    expect(mergeSort).to.be.instanceof(Function);
  });

  it('should sort an array of positive numbers', () => {
    let numbers = [ 5, 3, 2, 1 ];
    let sorted = mergeSort(numbers);

    expect(sorted).to.deep.equal([ 1, 2, 3, 5 ]);
  });

  it('should sort negative numbers', () => {
    let negNumArray = [ -1, -100, -4, -28 ];
    let sortedNegArray = [ -100, -28, -4, -1 ];

    expect(mergeSort(negNumArray)).to.deep.equal(sortedNegArray);
  })

  it('should sort positive and negative numbers', () => {
    let posNegArray = [ -50, 4, -6, 18 ];
    let sortedPosNegArray = [ -50, -6, 4, 18];

    expect(posNegArray).to.not.equal(sortedPosNegArray);
    expect(mergeSort(posNegArray)).to.deep.equal(sortedPosNegArray);
  })

  it('should sort lowercase letters', () => {
    let letters = [ 'd', 'r', 'j', 'a', 'y' ];
    let sortedLetters = [ 'a', 'd', 'j', 'r', 'y' ];

    expect(letters).to.not.equal(sortedLetters);
    expect(mergeSort(letters)).to.deep.equal(sortedLetters)
  })

  it('should sort large arrays of numbers', () => {
    let randomArray = genRanNum(1000);
    let compSorted = Array.from(randomArray).sort( (a, b) => a - b);

    expect(mergeSort(randomArray))
    .to.deep.equal(compSorted)
  })

  it('should sort large arrays of characters', () => {
    let ranCharArray = charGen(10);
    let compSorted = Array.from(ranCharArray).sort();

    expect(ranCharArray).to.not.deep.equal(compSorted);
    expect(mergeSort(ranCharArray)).to.deep.equal(compSorted);
  })
})
