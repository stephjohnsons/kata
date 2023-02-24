/* ------------------------------------------------------
   Unique in Order
   https://www.codewars.com/kata/54e6533c92449cc251001667 
   ------------------------------------------------------*/
   
var uniqueInOrder = function(iterable){
  // If empty iterable, returns empty array
  if (iterable.length === 0) {
    return [];
  };
  
  // If iterable is string, then split them.
  if (typeof iterable === 'string') {
    iterable = iterable.split('');
  };
  
  // Create empty array and add the first element to the result.
  let result = [];
  result.push(iterable[0]);
  
  // Iterate over the iterable. 
  // Comapres each element with the previous element to ensure uniqueness. 
  /// If different, add it to result array. 
  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i-1]) {
      result.push(iterable[i]);
    };
  };
  
  // Return result. 
  return result;
};
