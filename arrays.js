var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return[element, ...array];
  
}

//addElementToBeginningOfArray(chocolateBars, "hersheys bar")
//console.log(chocolateBars)

function destructivelyAddElementToBeginningOfArray(array, element) {
  [array.unshift(element)]
  
}

function addElementToEndOfArray(array, element) {
  return[...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  return[array.push(element)]
}

function accessElementInArray(array) {
  return array[x];
}

//function destructivelyRemoveElementFromBeginningOfArray() {
//} 
