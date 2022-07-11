
var n = document.getElementById("n");
var roll = document.getElementById("roll");
var date = document.getElementById("date");

n.innerHTML = "Sourabh";
roll.innerHTML = "201500703";

var day = new Date();
var d = day.getDate();
var month = day.getMonth()+1;
var year = day.getFullYear();

date.innerHTML = `${d}-${month}-${year}`;

console.log(`${d}-${month}-${year}`)
