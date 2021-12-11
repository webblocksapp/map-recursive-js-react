/**
 * mapRecursive function by Alex Merced
 *
 * https://dev.to/alexmercedcoder/javascript-writing-map-as-a-recursive-function-2854
 */
export const mapRecursive = (oldArray, callback, newArray = []) => {
  //base case: check if there are any items left in the original array to process
  if (oldArray.length <= 0) {
    //if all items have been processed return the new array
    return newArray;
  } else {
    //destructure the first item from old array and put remaining in a separate array
    const [item, ...theRest] = oldArray;
    //create an array of the current new array and the result of the current item and the callback function
    const interimArray = [...newArray, callback(item)];
    //return a recursive call to to map to process the next item.
    return mapRecursive(theRest, callback, interimArray);
  }
};
