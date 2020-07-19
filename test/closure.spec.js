
const sinon = require('sinon')
const { expect } = require('chai');
const { inArray, inBetween, byField }= require('../src/closure')
const { users, res1, res2 }=require('./res')

const array = [];
for (let i=0;i<100;i++){
    array.push(i)
}

describe('CLOSURE.Task 1. inBetween',()=>{
   
    const resArrays=[[ 3, 4, 5, 6 ],[11,12,13,14,15],[22,23,24,25],[19,20,21,22],[59,60,61,62],[],[12],
    [31,32,33,34,35]]
    resArrays.forEach(arr=>{
        const last= arr.length-1
        it(`inBetween function should return true if a value is between two numbers in the given array`,()=>{
            expect(array.filter(inBetween(arr[0], arr[last]))).to.deep.equal(arr)
    
        })
    })
    
})

describe('CLOSURE.Task 2. inArray',()=>{

    const resArrays=[[ 3, 4, 5, 6 ],[11,12,13,14,15],[22,23,24,25],[19,20,21,22],[59,60,61,62],[],[12]]
    resArrays.forEach(arr=>{
        const last= arr.length-1
        it(`inArray function should return true if both given arrays contain that value `,()=>{
            expect(array.filter(inArray(arr))).to.deep.equal(arr)
    
        })
    })

    it(`inArray function should return true if both given arrays contain that value`,()=>{
        expect(array.filter(inArray([1, 2, 1001]))).to.deep.equal([1,2])

    })
    it(`inArray function should return true if both given arrays contain that value`,()=>{
        expect(array.filter(inArray([1, 2, 1001]))).to.deep.equal([1,2])

    })
    it(`inArray function should return true if both given arrays contain that value`,()=>{
        expect(array.filter(inArray([1, 20, 201]))).to.deep.equal([1,20])

    })
    
})


describe('CLOSURE.Task 3. Sort by field',()=>{
    it(`should correctly sort by name `,()=>{
        users.sort(byField('name'))
        expect(users).to.deep.equal(res1)
    })

    it(`should correctly sort by age `,()=>{
        users.sort(byField('age'))
        expect(users).to.deep.equal(res2)
    })
})

