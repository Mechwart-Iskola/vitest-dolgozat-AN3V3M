import {it,expect,describe} from 'vitest';
import {factorial,findLongestWord,countVowels,isSubset,findCommonObjects } from './functions';

describe('factorial', () => {
    it('positive', () => {
        expect(factorial(5)).toBe(120);
        expect(factorial(3)).toBe(6);
    });
    it('null', () => {
        expect(factorial(0)).toBe(1);
        });
    it('negative', () => {
        expect(() => factorial(-3)).toThrowError('Factorial is not defined for negative numbers');
        });
    });
describe('findLongestWord',()=> {
    it('normal',() => {
        expect(findLongestWord('The quick brown fox jumps over the lazy dog')).toBe('jumps');
    });
    it('One word sentence',() => {
        expect(findLongestWord('Hello')).toBe('Hello');
    });
    it('normal',() => {
        expect(findLongestWord("")).toBe("");
    });
    it('extra',() => {
        expect(findLongestWord('A quick test')).toBe('quick');
    });
});
describe('countVowels',() =>{
    it('normal', ()=> {
        expect(countVowels('Hello world')).toBe(3);
    })
    it('Consonant', ()=> {
        expect(countVowels('bcdfg')).toBe(0);
    })
    it('Lower and uppercase', ()=> {
        expect(countVowels('AeIoU')).toBe(5);
    })
    it('Clear string',()=> {
        expect(countVowels("")).toBe(0);
    })
});
describe('isSubset',()=>{
    it('Subset',()=> {
        const obj1 = { a: 1}, obj2 = { a: 1, b: 2};
        expect(isSubset(obj1,obj2)).toBe('true')
    });
    it('Not subset',()=> {
        const obj1 = { c: 3}, obj2 = { a: 1, b: 2};
        expect(isSubset(obj1,obj2)).toBe('false')
    });
});
describe('findCommonObjects',()=> {
    it('Has same objects',()=>{
       const arr1 = [{id:1,name:'Alice'},{id:2,name:'Bob'}];
       const arr2 =[{id:2,name:'Bob'},{id:3,name:'Charlie'}];
      expect(findCommonObjects(arr1,arr2)).toEqual([{ id: 2, name:'Bob' }]);
    });
    it('Doesnt have same object',()=>{
        const arr1 = [{id:1,name:'Alice'}];
        const arr2 =[{id:3,name:'Charlie'}];
       expect(findCommonObjects(arr1,arr2)).toEqual([]);
     });
     it('Clear object',()=>{
        const arr1 = [{}];
        const arr2 =[{}];
       expect(findCommonObjects(arr1,arr2)).toEqual([])
     });
     it('Only one object',()=>{
        const arr1 = [{id:1,name:'Alice'}];
        const arr2 =[{}];
       expect(findCommonObjects(arr1,arr2)).toEqual([]);
     });
});
