

function truthCheck(collection, pre) {
    return collection.some(el=>!!!el[pre])
    ?false
    :true
  }



  function sumSalaries(salaries){
      return Object.values(salaries).reduce((total,salary)=>total+salary)

  }

  function count(obj){
     return Object.keys(obj).length
  }


  


  function findOccurrences(sentence,letter){
    const arr= sentence.toLowerCase().split(' ')
    const newObj={}
    arr.forEach(word=>{
        let occurence= word.split(letter.toLowerCase()).length-1
        newObj[word]=occurence
    })
      return newObj
  }

  console.log(findOccurrences("Create a nice cool JUICY function", "c"))
  console.log(findOccurrences("Hello World let's start coding coco", "o"))
  console.log(findOccurrences("An amazing APPLE a day keeps an Archeologist AWAY...", "A"))


module.exports={truthCheck,count,sumSalaries,findOccurrences}