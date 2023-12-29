/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const final = [];
  const totalMap = new Map();
  transactions.forEach((t) => {
    if (!totalMap.has(t.category)) {
      totalMap.set(t.category, t.price);
    } else {
      totalMap.set(t.category, totalMap.get(t.category) + t.price);
    }
  });

  totalMap.forEach((value, key) =>
    final.push({ category: key, totalSpent: value })
  );
  return final;
}

module.exports = calculateTotalSpentByCategory;
