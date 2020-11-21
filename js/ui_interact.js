import {updateTableData, servURL} from './buildTables.js'
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
        postObject.addr1 = $('#customer-addr1').val();
        postObject.addr2 = $('#customer-addr2').val();
        postObject.city = $('#customer-city').val();
        postObject.state = $('#customer-state').val();
        postObject.zip = $('#customer-zip').val();        

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


});