// You manage a grocery store and need to keep track of the inventory of various items. 
//You will use arrays to store the data and various functions to manipulate and analyze the data.
// Create an array containing the names of all items in the inventory maximum of 10.
// Create a separate array with the corresponding stock quantities of each item maximum of 10.
// Write a function to add a new item to the inventory, updating both arrays.

let itemNames=["Sugar","Rice","Beans","Salt","CookingOil","Detergent","Vegetables","Fruits"];
let quantitiesInKgs=[10,20,30,40,50,60,70,80];

function allItems(itemName,quantityInKgs) {
  if(itemNames.length>=10 || quantitiesInKgs.length>=10){
   console.log("Beyond maximum of 10");
   return;
 
 }
  else if(itemNames.includes(itemName)){
    console.log("Already exits");
    return;
  }
  else{
  itemNames.push(itemName);
  quantitiesInKgs.push(quantityInKgs);
  }

}
allItems("Maize",100);
console.log(itemNames);
console.log(quantitiesInKgs);





// Write a function to update the stock quantity of an existing item.
function update(itemName,newStock) {
  const index=itemNames.indexOf(itemName);
if (index!==-1) {
  quantitiesInKgs[index]=newStock
  return true;
}else{
  return false
} 

}
update("Maize", 19);
console.log(itemNames);
console.log(quantitiesInKgs);



// Write a function to calculate the total number of items in the inventory.
function calculateTotalItems() {
   console.log(itemNames.length);
  
  
}
calculateTotalItems();


// Write a function to find the item with the lowest stock quantity.

function ItemWithLowestStock() {
  let lowestStock = quantitiesInKgs[0];
  let lowestItem = itemNames[0];
  for (let i = 1; i < quantitiesInKgs.length; i++) {
    if (quantitiesInKgs[i] < lowestStock) {
      lowestStock = quantitiesInKgs[i];
      lowestItem = itemNames[i];
    }
  }
  return lowestItem;
}
console.log(ItemWithLowestStock());