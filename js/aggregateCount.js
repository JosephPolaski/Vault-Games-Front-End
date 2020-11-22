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

    return [activeCustomers, activeProducts, ordersProcessed];
}

export {activeCustomers, activeProducts, ordersProcessed, fullCount}
// Cannot use import statement outside a module