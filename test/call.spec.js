const sinon = require('sinon')
const {car, useCall,displayDetails,sumArgsApply,sumArgsCall,sumArgsBind} = require('../src/call');
const { expect } = require('chai');



describe('TASK 1.Call', () => {
    const spy = sinon.spy(displayDetails,'call')
    it('call method should be used',() => {
        expect(useCall('Kate',car)).to.be.equal('Kate,this is your car:GA12345 Toyota')
        expect(spy.calledOnce).to.be.true
    })


});


describe('TASK 2. Call, apply, bind', () => {
    
    it('call method should be used',() => {
        const spyCall = sinon.spy(Array.prototype.reduce,'call')
        expect(sumArgsCall(1, 2, 3, 4)).to.be.equal(10)
        expect(spyCall.calledOnce).to.be.true
    })
    it('apply method should be used',() => {
        const spyApply = sinon.spy(Array.prototype.reduce,'apply')
        expect(sumArgsApply(1, 2, 3, 4,5)).to.be.equal(15)
        expect(spyApply.calledOnce).to.be.true
    })
    it('bind method should be used',() => {
        const spyBind = sinon.spy(Array.prototype.reduce,'bind')
        expect(sumArgsBind(1, 2, 3, 4,5,6)).to.be.equal(21)
        expect(spyBind.calledOnce).to.be.true
    })
    it('reduce method should be USED',() => {

     const spyReduce = sinon.spy(Array.prototype,'reduce')
     sumArgsCall(1, 2, 3, 4)
     sumArgsApply(1, 2, 3, 4,5)
     sumArgsBind(1, 2, 3, 4,5,6)
       expect(spyReduce.calledThrice).to.be.true
    })


});



