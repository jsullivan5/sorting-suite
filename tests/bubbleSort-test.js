import { expect, assert } from 'chai';
import bubbleSort from '../scripts/bubbleSort.js';
import genRanNum from '../scripts/genRanNum.js';
import charGen from '../scripts/charGen.js';

describe('Bubble sort', () => {

  it('should be a function', () => {
    expect(bubbleSort).to.be.instanceof(Function);
  });

  it('should sort an array of positive numbers', () => {
    let numbers = [ 5, 3, 2, 1 ];
    let sorted = bubbleSort(numbers);

    expect(sorted).to.deep.equal([ 1, 2, 3, 5 ]);
  });

  it('should sort negative numbers', () => {
    let negNumArray = [ -1, -100, -4, -28 ];
    let sortedNegArray = [ -100, -28, -4, -1 ];

    expect(bubbleSort(negNumArray)).to.deep.equal(sortedNegArray);
  })

  it('should sort positive and negative numbers', () => {
    let posNegArray = [ -50, 4, -6, 18 ];
    let sortedPosNegArray = [ -50, -6, 4, 18];

    expect(posNegArray).to.not.equal(sortedPosNegArray);
    expect(bubbleSort(posNegArray)).to.deep.equal(sortedPosNegArray);
  })

  it('should sort lowercase letters', () => {
    let letters = [ 'd', 'r', 'j', 'a', 'y' ];
    let sortedLetters = [ 'a', 'd', 'j', 'r', 'y' ];

    expect(letters).to.not.equal(sortedLetters);
    expect(bubbleSort(letters)).to.deep.equal(sortedLetters)
  })

  it('should sort large arrays of numbers', () => {
    let randomArray = genRanNum(1000);
    let compSorted = Array.from(randomArray).sort( (a, b) => a - b);

    expect(bubbleSort(randomArray))
    .to.deep.equal(compSorted)
  })

  it('should sort large arrays of characters', () => {
    let ranCharArray = charGen(1000);
    let compSorted = Array.from(ranCharArray).sort();

    expect(ranCharArray).to.not.deep.equal(compSorted);
    expect(bubbleSort(ranCharArray)).to.deep.equal(compSorted);
  })
})
