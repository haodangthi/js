const sinon = require('sinon')
const { expect } = require('chai');
const {recursion} = require('../src/recursion')

describe("Recursion. TASK 1.1. Power of two! ",()=>{
    function makeTest(x,y) {
        
        it(`${x} should be equal to pow(2,${y})` , function() {
            expect(recursion.two(x)).to.equal('YES')
        });
      }
      function makeFailTest(x) {
        
        it(`${x} should NOT be a power of 2` , function() {
            expect(recursion.two(x)).to.equal('NO')
        });
      }
    
      for (let x = 0; x <= 10; x++) {
        makeTest(2**x,x);
      }
      for (let x = 1; x <= 15; x++) {
        makeFailTest(x*3*8);
      }

      it(`recursion.two should be called recursively` , function() {
        const spyTwo = sinon.spy(recursion, 'two');
        expect(recursion.two(8)).to.equal('YES')
        expect(spyTwo.callCount).to.equal(4);
    });

})

describe("Recursion. TASK 1.2. Prime number! ",()=>{
    const primes=[ 103, 107, 109, 113, 127, 131, 137, 139, 149]
    
    
    const checkPrime= primeNumber=>{
        it(`a number should be a prime number` , function() {
            expect(recursion.isPrime(primeNumber,primeNumber-1)).to.equal(true)
        });
    }
    primes.forEach(num=>checkPrime(num))

    it(`recursion.isPrime should be called recursively` , function() {
        const spyIsPrime = sinon.spy(recursion,'isPrime')
        recursion.isPrime(7,6)
        expect(spyIsPrime.callCount).to.equal(6);
    });


})

describe("Recursion. TASK 1.3. Steamroller! ",()=>{
    const arraysToCheck=[[[["a"]], [["b"]]],[1, [2], [3, [[4]]]],[1, [], [3, [[4]]]],[1, {}, [3, [[4]]]]]
    const results=[["a", "b"],[1, 2, 3, 4],[1, 3, 4],[1, {}, 3, 4]]
    const spy = sinon.spy(Array.prototype,'flat')
    const spy2 = sinon.spy(Array.prototype,'flatMap')


    const checkArray= (array,result)=>{
        it(`${array} should be equal ${result}` , function() {
            expect(recursion.steamrollArray(array)).to.deep.equal(result)
            
        });
        it('FLAT AND FLATMAP methodS should NOT be USED',() => {
            expect(spy.notCalled).to.be.true
            expect(spy2.notCalled).to.be.true
        })
    }
    arraysToCheck.forEach((num,index)=>checkArray(num,results[index]))

    it(`recursion.isPrime should be called recursively` , function() {
        const spySteamrollArray = sinon.spy(recursion,'steamrollArray')
        recursion.steamrollArray([1, [2], [3, [[4]]]])
        expect(spySteamrollArray.callCount).to.equal(4);
    });
})
