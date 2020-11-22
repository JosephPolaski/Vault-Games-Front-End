/*      BOOTSTRAP GRAPH     */
/*-------------------------*/
var custCount = parseInt($('#cust-num-main')[0].text)
var prodCount = $('#prod-num-main').val()
var ordCount = $('#ord-num').val()

console.log(custCount);
console.log($('#cust-num-main')[0]);

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
type: 'bar',
data: {
labels: ["Customers", "Inventory", "Orders Processed"],
datasets: [{
label: 'Click to hide chart',
data: [12, 14, 16],
backgroundColor: [
'rgba(255, 99, 132, 0.2)',
'rgba(54, 162, 235, 0.2)',
'rgba(255, 206, 86, 0.2)',
'rgba(75, 192, 192, 0.2)'
],
borderColor: [
'rgba(255,99,132,1)',
'rgba(54, 162, 235, 1)',
'rgba(255, 206, 86, 1)',
'rgba(75, 192, 192, 1)'
],
borderWidth: 1
}]
},
options: {
scales: {
yAxes: [{
ticks: {
beginAtZero: true
}
}]
}
}
});