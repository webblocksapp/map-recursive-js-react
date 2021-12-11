export const mapRecursive = <T>(
  oldArray: T[],
  callback: (item: T) => T,
  newArray: T[] = []
): T[] => {
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
    return mapRecursive<T>(theRest, callback, interimArray);
  }
};
