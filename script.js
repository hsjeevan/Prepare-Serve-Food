function prepareFood(tableNum, items, callback) {
    console.log('Preparing food for item - ', items);
    callback(tableNum, items);
}

function serveFood (tableNum, items) {
    console.log('Serving food for items - ', items)
} 

var tableNum = 100;
var items = ["Burger" , "Pasta" , "Coke"];
prepareFood(tableNum,items,serveFood)
