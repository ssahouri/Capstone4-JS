var fries = document.getElementById("fries");
var burger = document.getElementById("burger");
var shake = document.getElementById("shake");
var drink = document.getElementById("drink");
var checkOut = document.getElementById("checkOut");
var totalTable = document.getElementById("totalTable");


var items = [];
var prices = [];

fries.onclick = function() {
	addItemToArray("Fries", "3");
}

burger.onclick = function() {
	addItemToArray("Burger", "5");
}

shake.onclick = function() {
	addItemToArray("Shake", "4");
}

drink.onclick = function() {
	addItemToArray("drink", "2");
}

function addToArray(item, price) {
	items.push(item);
	prices.push(price);
}

checkOut.onclick = function() {
	if (items.length < 1) {
		alert("Order Something!")
	} else {
		showTotalBox();
		for (var i = 0; i < items.length; i++) {
			totalTable.innerHTML += "<tr><td>" + items[i] + "</td><td>$" + prices[i] + "</td></tr>";
		}
		totalTable.innerHTML += "<br>" + calcTotal();
		menuList.style.display = "none";
	}
}

function calcTotal() {
	var total = null;
	for (var i = 0; i < prices.length; i++) {
		total += parseInt(prices[i], 10);
	}
	return "<b>Total:</b> $" + total;
}

function showTotalBox() {
	document.getElementById("totalBox").style.display = "block";
}



