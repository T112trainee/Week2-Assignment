let availableAtHome = {
  Potatoes: 2,
  Carrots: 3,
  Spices: 5,
};
let requiredForLunch = {
  Potatoes: 3,
  Carrots: 3,
  Spices: 3,
  'Ice-cream cups': 11,
  'Slices of bread': 2,
};

let ItemsAtHome = new Map<string, number>();
ItemsAtHome.set('Potatoes', 2);
ItemsAtHome.set('Carrots', 3);
ItemsAtHome.set('Spices', 5);
console.log(`Items available at Home:`, ItemsAtHome);

let ItemForLunch = new Map<string, number>();

ItemForLunch.set('Potatoes', 3);
ItemForLunch.set('Carrots', 3);
ItemForLunch.set('Spices', 3);
ItemForLunch.set('Ice-cream cups', 11);
ItemForLunch.set('Slices of bread', 2);

console.log('Items for Required Lunch:', ItemForLunch);

if (ItemsAtHome.keys >= ItemForLunch.keys) {
  console.log('nothing to buy');
} else {
  console.log('Need to buy');
}

function getShoppingList() {
  //const ItemRequired:number=(ItemForLunch.values-ItemsAtHome.values);
  //let tobuy=(requiredForLunch-availableAtHome)
}
//let toBuy = getShoppingList(availableAtHome, requiredForLunch);
//console.log(getShoppingList();
