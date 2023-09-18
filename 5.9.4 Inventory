var STARTING_ITEMS_IN_INVENTORY = 20;
function start(){
	var numItems = STARTING_ITEMS_IN_INVENTORY;	
    while(numItems > 0){
        println('We have ' + numItems + 'items in inventory.');
        var items = readInt('How many items would you like to buy? ');
        var check=numItems;
        numItems -= items;
        if(numItems < 0){
            println('There is not enough items in the inventory.');
            numItems=check;
        }else{
            println('Now we have ' + numItems + ' left.');
        }
    println('');
    }
    println('All Out!');
}
