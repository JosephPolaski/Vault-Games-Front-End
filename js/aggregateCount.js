import {servURL} from './buildTables.js'

var activeCustomers;
var activeProducts;
var ordersProcessed; 

function fullCount(data) {
    activeCustomers = data.results[0]['cpo'];
    activeProducts = data.results[1]['cpo'];
    ordersProcessed = data.results[2]['cpo'];

    console.log(activeCustomers);
    console.log(activeProducts);
    console.log(ordersProcessed);

    $('#cust-num').text(activeCustomers)
    $('#prod-num').text(activeProducts)
    $('#ord-num').text(ordersProcessed)
}

export {activeCustomers, activeProducts, ordersProcessed, fullCount}
// Cannot use import statement outside a module