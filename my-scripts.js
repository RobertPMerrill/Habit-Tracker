//Comments are designated by 2 slashes
//Set count
if(localStorage.getItem("count") == null) {
	localStorage.setItem("count", 0)
}

//Function "Update count"
function update() {

	document.getElementById("count").innerHTML = localStorage.getItem("count");
}
//Call the function update
update();
// Add one to the count
function plusOne() {
	//First update the database count, then call it and display it.
	//Unfortunately, it will return the number as a string,
	//So you have to convert the string to a number
localStorage.setItem("count", (Number(localStorage.getItem("count")) + 1));

update();
}

function reset() {
	if(confirm("Reset to zero?")) {
localStorage.setItem("count",0);
update();
	}
}