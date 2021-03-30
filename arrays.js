"use strict";


// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for (const i in items) {
  console.log(`${items[i]} ${i}`);
  }
  // for (const [i, item] of items.entries()) {
  //   console.log(`${item} ${i}`);
  // }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  const result = [];
  for (const [i, item] of items.entries()) {
    if (i % 2 ===0){
      result.push(item);
    }
  }
  console.log(result);
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code

  // const sortedItems = items.sort((a, b) => a - b);
  // const sortedNItems = sortedItems.slice(0,n);
  // sortedNItems.reverse();
  // console.log(sortedNItems);

  //5, 10 => 10-5
  items.sort((a, b) => b - a);
  console.log(items.slice(-n));
}

smallestNItems([5, 10, 1, 11, 3, 7, 2], 5);
