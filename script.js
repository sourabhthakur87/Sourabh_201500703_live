var name1 = document.getElementById('name')
var Roll = document.getElementById('roll')
var address = document.getElementById('address')
var Date = document.getElementById('date')



name1.innerHTML = 'Sourabh';
Roll.innerHTML = '201500703';
address.innerHTML = 'GLA University, Mathura';




var day = new Date;
var d = day.getDate();
var month = day.getMonth();
var year = day.getFullYear();


console.log(month)

date.innerHTML = `${d}-${month}-${year}`;
