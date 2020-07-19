const car = {
  registrationNumber: "GA12345",
  brand: "Toyota",
};

function displayDetails(ownerName) {
  return ownerName+",this is your car:"+this.registrationNumber+" "+this.brand
  
}
function useCall(ownerName,car) {
  return displayDetails.call(car, ownerName);
}
//console.log(useCall('Lena',car))


function sumArgsCall(){
    const array = Object.values(arguments);
    const add = (a, b) => a + b;
    return Array.prototype.reduce.call(array,add)
}
function sumArgsApply(){
    const array = Object.values(arguments);
    const add = (a, b) => a + b;
    return Array.prototype.reduce.apply(array,[add])
}
function sumArgsBind(){
    const array = Object.values(arguments);
    const addBind = Array.prototype.reduce.bind(array);
    const add = (a, b) => a + b;
    return addBind(add);
}


//console.log(sumArgsCall(1, 2, 3, 4));
//console.log(sumArgsApply(1, 2, 3, 4));
//console.log(sumArgsBind(1, 2, 3, 4));



module.exports = { car, useCall, displayDetails ,sumArgsApply,sumArgsCall,sumArgsBind};
