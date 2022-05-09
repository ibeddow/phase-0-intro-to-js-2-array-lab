const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
 cats.push(name)
 return cats
}

function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats
   }

   function destructivelyRemoveLastCat(name){
    cats.pop(name)
    return cats
   }

   function destructivelyRemoveFirstCat(name){
    cats.shift(name)
    return cats
   }

   function appendCat(name){
    const newArray = cats.slice()
    newArray.push(name)
    return newArray 
   }

 
   function prependCat(name){
    const newArray2 = cats.slice()
    newArray2.unshift(name)
    return newArray2 
   }

   function removeLastCat(name){
    const newArray3 = cats.slice()
    newArray3.pop(name)
    return newArray3
   }

   function removeFirstCat(name){
    const newArray4 = cats.slice()
    newArray4.shift(name)
    return newArray4
   }