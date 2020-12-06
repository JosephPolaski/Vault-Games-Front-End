import {updateTableData, updateOrderHistory, customerSearch, addressSearch, productSearch} from './buildTables.js'
import {getDataFromServer, postDataToServer, delDataFromServer, updateDataFromServer} from './client.js' 
import {servURL} from './config.js'

$(document).ready(function(){    

    var ROWSELECTED = null;

    //SELECT ROW EVENT
    $(document).on('click','#table-bod tr', function(e){

        if($(this).hasClass('tr-selected')){
            $(this).removeClass('tr-selected'); // add selected class
            ROWSELECTED = null;
        } else {
            // check for multiple selection
            if(ROWSELECTED === null){
                $(this).addClass('tr-selected'); // add selected class            
                ROWSELECTED = this;
            } else {
                $('#select-alert').addClass('fade-inOut');
                setTimeout(function(){$('#select-alert').removeClass('fade-inOut');}, 2000)             
            }               
                     
        }     
    });      

    // Destroying and rebuilding table
    // wrapped in timeout so it can catch all changes made
    function rebuildTable() { 
        setTimeout(function(){
        // delete table
        $('#big-table').remove();
        // rebuild table
        updateTableData()
        }, 1000);
    }

    /***************************************
     ********CREATE FUNCTIONS***************
     **************************************/
    //ADD CUSTOMER EVENT HANDLER
    $('#btn-add-customer').on('click',function(e){

        // build post request object
        let postObject = {};

        // set key value pairs
        postObject.fname = $('#customer-fname').val();
        postObject.lname = $('#customer-lname').val();
        postObject.email = $('#customer-email').val();         

        // make async post call
        postDataToServer(`${servURL}/insertCustomer`, postObject); // post new customer

        // rebuilds table
        rebuildTable();

    });

    //ADD PRODUCT EVENT HANDLER
    $('#btn-add-product').on('click',function(e){

        // build post request object
        let postObject = {};

        // set key value pairs
        postObject.title = $('#inputTitle').val();
        postObject.publisher = $('#inputPublisher').val();
        postObject.platform = $('#inputPlatform').val();
        postObject.genre = $('#inputGenre').val();
        postObject.rating = $('#inputRating').val();
        postObject.quantity = parseInt($('#inputQuantity').val());
        postObject.price = parseFloat($('#inputPrice').val()).toFixed(2);
       
        // make async post call
        postDataToServer(`${servURL}/insertProduct`, postObject); // post new customer

        // rebuilds table
        rebuildTable();

    });

    //GET ORDER HISTORY
    $('#btn-order-hist').on('click',function(e){
    
        let customerName = $('#orderInputSearch').val();
        let splitNames = customerName.split(' ');

        // build post request object
        let postObject = {};

        // set key value pairs
        postObject.fname = splitNames[0];
        postObject.lname = splitNames[1];        
        
        // delete table
        $('#big-table').remove(); // delete out of date table

        if(customerName == ""){
            updateTableData() // Render All orders
        } else {
            updateOrderHistory(postObject.fname, postObject.lname); // Render Customer Order History
        }
    });

    //SEARCH PRODUCTS
    $('#btn-search-prod').on('click',function(e) {
        let productName = $('#productSearch').val();

        let urlProductName = productName.replaceAll(' ', '%20')

        let prodObject = {};
        
        prodObject.title = urlProductName;

        console.log(prodObject.title)

        // delete table
        $('#big-table').remove(); // delete out of date table

        if(productName == ""){
            updateTableData() // Render All orders
        } else {
            productSearch(prodObject.title); // Render Customer Order History
        }
    });

    //CUSTOMER SEARCH BY LAST NAME ON CUSTOMERS
    $('#btn-search-cust').on('click',function(e){

        // This can be a partial last name as server handles this as a LIKE '%customerLastName%'
        let customerLastName = $('#inputCustomer').val();

        // build post request object
        let postObject = {};

        // set key value pairs
        postObject.lname = customerLastName;
        
        // delete table
        $('#big-table').remove(); // delete out of date table

        if(customerLastName == ""){
            updateTableData() // Render All orders
        } else {
            customerSearch(postObject.lname); // Render the customer searchecd
        }
    });

    //CUSTOMER SEARCH BY LAST NAME ON CUSTOMER_ADDRESSES
    $('#btn-search-addr').on('click',function(e){

        // This can be a partial last name as server handles this as a LIKE '%customerLastName%'
        let customerLastName = $('#searchCustomerByAddress').val();

        // build post request object
        let postObject = {};

        // set key value pairs
        postObject.lname = customerLastName;
        
        // delete table
        $('#big-table').remove(); // Delete out of date table

        if(customerLastName == ""){
            updateTableData() // Render All orders
        } else {
            addressSearch(postObject.lname); // Render the customer searchecd
        }
    });

    //ADD CUSTOMER ADDRESS EVENT HANDLER
    $('#btn-add-cAddr-form').on('click',function(e){

        // build post request object
        let postObject = {};

        // set key value pairs
        postObject.cid = parseInt($('.tr-selected th')[0].innerText);
        postObject.addr1 = $('#customer-addr1').val();
        postObject.addr2 = $('#customer-addr2').val();
        postObject.city = $('#customer-city').val();
        postObject.state = $('#customer-state').val();
        postObject.zip = $('#customer-zip').val();

        // make async post call
        postDataToServer(`${servURL}/insertCustAddress`, postObject); // post new customer

    });

    // update customer address
    $('#btn-edit-cAddr-form').on('click',function(e){

        // build post request object
        let putObject = {};

        // set key value pairs
        putObject.aid = parseInt($('.tr-selected th')[0].innerText);
        putObject.line_1 = $('#customer-addr1').val();
        putObject.line_2 = $('#customer-addr2').val();
        putObject.city = $('#customer-city').val();
        putObject.state = $('#customer-state').val();
        putObject.zip = $('#customer-zip').val();

        // make async post call
        updateDataFromServer(`${servURL}/updateAddress`, putObject); // edit existing customer
        console.log(putObject)
        rebuildTable();

    });


    //DELETE ADDRESS
    $('#btn-del-addr').on('click', function(f) {

        // build delete request object
        let delObject = {};

        delObject.aid = parseInt($('.tr-selected th')[0].innerText);
        
        delDataFromServer(`${servURL}/deleteAddress`, delObject);

        rebuildTable();
    });

    //DELETE CUSTOMER
    $('#btn-del-cust').on('click', function(f) {

        // build delete request object
        let delObject = {};

        delObject.cid = parseInt($('.tr-selected th')[0].innerText);
        
        delDataFromServer(`${servURL}/deleteCustomer`, delObject);

        rebuildTable();
    });


    //ADD ITEM TO ORDER LIGHTBOX EVENT
    $('#btn-add-ord-item').on('click', () =>{        
        $('#form-ord-row').append(`<div class="form-group col-md-6">
        <input type="text" class="form-control" id="order-item" placeholder="enter item name">
      </div>
      <div class="form-group col-md-3">
        <input type="text" class="form-control" id="itemQuantity" placeholder="item quantity">               
      </div>
      <div class="form-group col-md-3">
        <input type="text" class="form-control" id="itemQuantity" placeholder="item price">               
      </div>`);
        
    });

    //ADD CUSTOMER ORDER
    $('#btn-cust-ord').on('click', () =>{      
        
        // Object to hold order
        let orderObject = {
            cid: parseInt($('.tr-selected th')[0].innerText), // selected customer id
            itemID: new Array(),  // holds order items
            itemQuantities: new Array(), // holds order items
            total: 0
        }
 
        let prices = new Array();
 
        let keycount = 0  // counts items
 
        // Pull Data for all items
        $('#form-ord-row > div').children().each(function(){
            let itemValue = $(this).val()
            
            // check if on name or quantity
            if(keycount == 0){
                orderObject.itemID.push(itemValue) // add item names to proper key 
            } else if(keycount == 1) {
                orderObject.itemQuantities.push(itemValue) // add item quantities to proper key
            } else{
                prices.push(parseFloat(itemValue)) // increment price
            }
 
            // Reset flag after each item
            if(keycount == 2){
                keycount = 0
            } else {
                keycount = keycount+1;
            }                                  
 
        });
 
        // Calculate total price
        for(let i = 0;i < orderObject.itemQuantities.length;i++){
            orderObject.total += (orderObject.itemQuantities[i] * prices[i])
        }
 
        // Reset Search Forms
        $('#ltbox-form-ord').html(`<div class="form-row" id="form-ord-row">
        <div class="form-group col-md-6">
          <input type="text" class="form-control" id="order-item" placeholder="enter product id">
        </div>
        <div class="form-group col-md-3">
          <input type="text" class="form-control" id="itemQuantity" placeholder="item quantity">               
        </div>
        <div class="form-group col-md-3">
          <input type="text" class="form-control" id="itemQuantity" placeholder="item price">               
        </div>                                              
      </div>
      <div id="cust-ord-btn-wrap">
        <button type="button" class="btn btn-primary" id="btn-cust-ord">Add Customer Order</button>
        <button type="button" class="btn btn-primary" id="btn-add-ord-item">Add Another Item</button>
      </div>`)
 
        console.log(orderObject)
        // make async post call
        postDataToServer(`${servURL}/insertCustOrder`, orderObject); // post new customer
 
    });

    // Return Order
    $('#btn-return-order').on('click', ()=>{

        // build post request object
        let putObject = {};

        putObject.oid = parseInt($('.tr-selected th')[0].innerText), // selected order id

         // make async post call
         updateDataFromServer(`${servURL}/returnOrder`, putObject); // edit existing customer
         rebuildTable();
    });
});