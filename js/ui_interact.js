import {updateTableData, updateOrderHistory} from './buildTables.js'
import {getDataFromServer, postDataToServer} from './client.js' 
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

        // delete table
        $('#big-table').remove(); // delete out of date table

        // refresh table
        updateTableData();

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

        // delete table
        $('#big-table').remove(); // delete out of date table

        // refresh table
        updateTableData();

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

        // delete table
        //$('#big-table').remove(); // delete out of date table

        // refresh table
        //updateTableData();

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
            itemNames: new Array(),  // holds order items
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
                orderObject.itemNames.push(itemValue) // add item names to proper key 
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
          <input type="text" class="form-control" id="order-item" placeholder="enter item name">
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
});