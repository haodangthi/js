
// Дано натуральное число N. Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

class Recursion{
    constructor() {
        this.counter=0
    }
    two(num){
        
        if(num==1){
            return 'YES'
        }
        else if (num%2!==0){
            return "NO"
        }
        else {
            return this.two(num/2)
        }
    }
    isPrime(number,div){
       
  
        if( div==1){
            return true;
        } else if(number==1){
            return false
        } else if(number%div==0){
            return false
        } 
    
        return this.isPrime(number,div-1)
        
    }

    steamrollArray(arr) {
        
        let newArray=[]
        if(!arr.some(el=> Array.isArray(el))){
            return arr
        }
       
       arr.forEach(el=>{
        Array.isArray(el)?
              newArray=newArray.concat(el):
              newArray.push(el)
             })
       return this.steamrollArray(newArray)
        
    }
}

const recursion= new Recursion()
module.exports={ recursion}