
const sinon = require('sinon')
const { expect } = require('chai');
const {arr,arr2,arr3,arr4,arr5,arr6,arr7,arr8,salaries,salaries2,user,user2,obj1,obj2,obj3} = require('./objects')
const {truthCheck,count,sumSalaries,findOccurrences}=require('../src/objects')

describe('OBJECTS. Task 1.Truth check',()=>{
    const trueArrays=[arr,arr5,arr6]
    const trueParam=["sex","onBoat","single"]
    const falseArrays=[arr2,arr3,arr4,arr7,arr8]
    const falseParam=["sex","age","onBoat","single","single"]

    trueArrays.forEach((arr,index)=>{
        it(`each object of the array SHOULD contain the given key with a truthy value` ,()=>{
            expect(truthCheck(arr,trueParam[index])).to.equal(true)
        })
    })

    falseArrays.forEach((arr,index)=>{
        it('there should be at least 1 object which doesn\'t contain the given key OR its value should not be truthy',()=>{
            expect(truthCheck(arr,falseParam[index])).to.equal(false)
        })
        
    })
})


describe('OBJECTS. TASK 2.1. Find a total amount of salaries',()=>{
    
         it('The total amount of money should be correct',()=>{
          
             expect(sumSalaries(salaries)).to.equal(950)
         })
         it('The total amount of money should be correct',()=>{
            expect(sumSalaries(salaries2)).to.equal(760)
        })
        
      
         it('Object values method should be used',()=>{
            const spy = sinon.spy(Object,'values')
            sumSalaries(salaries)
            expect(spy.calledOnce).to.be.true
         })
     
})

describe('OBJECTS. TASK 2.2. Find the amount of keys of the given object',()=>{
    it('Should return the correct amount of keys,Object.keys should be used',()=>{
        const spy = sinon.spy(Object,'keys')
        expect(count(user)).to.equal(2)
        expect(spy.calledOnce).to.be.true

    })
    it('Should return the correct amount of keys,Object.keys should be used',()=>{
        expect(count(user2)).to.equal(3)
    })
})

describe('OBJECTS. TASK 4. Find Occurrences',()=>{
    it('Should return an object of each word in the sentence, with the count of the specified character as the value. ',()=>{
        expect(findOccurrences("Create a nice cool JUICY function", "c")).to.deep.equal(obj1)

    })
    it('Should return an object of each word in the sentence, with the count of the specified character as the value.',()=>{
        expect(findOccurrences("Hello World let's start coding coco", "o")).to.deep.equal(obj2)

    })
    it('Should return an object of each word in the sentence, with the count of the specified character as the value.',()=>{
        expect(findOccurrences("An amazing APPLE a day keeps an Archeologist AWAY...", "A")).to.deep.equal(obj3)

    })
})



