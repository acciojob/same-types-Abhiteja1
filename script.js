function isSameType(value1, value2) {
  // Convert values to numbers if they are strings
  if (typeof value1 === 'string' && !isNaN(value1)) {
    value1 = Number(value1);
  }
  
  if (typeof value2 === 'string' && !isNaN(value2)) {
    value2 = Number(value2);
  }

  // Check if types are different and one of them is a string
  if (typeof value1 !== typeof value2) {
    return false;
  }

  // Check if the types are the same
  return true;
}
  
// Example usage:
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
