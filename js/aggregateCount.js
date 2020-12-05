var activeCustomers;
var activeProducts;
var ordersProcessed; 

function fullCount(data) {
    activeCustomers = data.results[0]['cpo'];
    activeProducts = data.results[1]['cpo'];
    ordersProcessed = data.results[2]['cpo'];

    // updating cards for dashboard
    $('#cust-num-main').text(activeCustomers)
    $('#prod-num-main').text(activeProducts)
    $('#ord-num-main').text(ordersProcessed)

    // updating cards for rest of document
    $('#cust-num').text(activeCustomers)
    $('#prod-num').text(activeProducts)
    $('#ord-num').text(ordersProcessed)

    // get dashboard chart wrapper
    var ctx = document.getElementById("myChart").getContext('2d');

    // create graoh chart
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ["Customers", "Inventory", "Orders Processed"],
        datasets: [{
        label: 'Click to hide chart',
        data: [activeCustomers, activeProducts, ordersProcessed],
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


    return [activeCustomers, activeProducts, ordersProcessed];
}

export {activeCustomers, activeProducts, ordersProcessed, fullCount}
// Cannot use import statement outside a module