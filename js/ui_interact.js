import {updateTableData, servURL, updateOrderHistory} from './buildTables.js'
import {getDataFromServer, postDataToServer} from './client.js' 

$(document).ready(function(){    

    var ROWSELECTED = null;

    //SELECT ROW EVENT
    $(document).on('click','#table-bod tr', function(e){
        console.log('HELLO!')

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


});