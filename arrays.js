var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return[element, ...array];
  
}

//addElementToBeginningOfArray(chocolateBars, "hersheys bar")
//console.log(chocolateBars)

function destructivelyAddElementToBeginningOfArray(array, element) {
  return[array.unshift(element)]
  
}

function addElementToEndOfArray(array, element) {
  return[...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  [array.push(element)];
  return array
}

function accessElementInArray(array) {
  return array;
}

//function destructivelyRemoveElementFromBeginningOfArray() {
//} 
