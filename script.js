function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add: function(a,b) {
    return a+b;
  },
  subtract: function(a,b) {
    return a-b;
  },
  divide: function(a,b) {
    return a/b;
  },
  multiply: function(a,b) {
    return a*b;
  }
};

function caesarCipher(string, shift) {
  const inputInArray = string.split("");

  inputInArray.forEach(function (value, i) {
    if (value.match(/^[a-zA-Z]*$/)) inputInArray[i] = nextCharacter(value,shift);
  });

  const shifted = inputInArray.join("");

  return shifted;
} 

function nextCharacter(character, shift){
  let nextUnicode = character.charCodeAt(0) + shift;
  if ((character.match(/^[A-Z]*$/) && nextUnicode > 90) || (character.match(/^[a-z]*$/) && nextUnicode > 122)) nextUnicode -= 26;
  if ((character.match(/^[A-Z]*$/) && nextUnicode < 65) || (character.match(/^[a-z]*$/) && nextUnicode < 97)) nextUnicode += 26;
  return String.fromCharCode(nextUnicode);
}

function analyzeArray(array){
  const objectInfo = {
    average: array.reduce((a, b) => a + b, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  }
  return objectInfo;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };