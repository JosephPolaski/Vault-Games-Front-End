import {getDataFromServer} from './client.js'  

const servURL = 'http://flip2.engr.oregonstate.edu:8296';

//Get Current Page URL
var currentPage = location.href;

//Check which page is currently loaded
var customers = currentPage.search("customers");
var custAddress = currentPage.search("customerAddresses");
var orders = currentPage.search("orders");
var products = currentPage.search("products"); 

// SETUP HEADER
function setHeader(columns){
// add table to wrapper
$('#table-wrapper').append('<table id="big-table" class="table"></table>');

// add thead and row
$('#big-table').append('<thead class="thead-dark"></thead>')

// add header row
$('.thead-dark').append('<tr id="headrow"></tr>')

// Add Headings
for(let i = 0; i < columns.length; i++){
    let cellString = '<th scope="col">' + columns[i] + '</th>';
    $('#headrow').append(cellString);
}
}

// BUILD TABLE
function buildTable(data){   

let rowNum = 1; // tracks row number for labeling

$('#big-table').append('<tbody id="table-bod"></tbody>') // add table body

// BUILD ROWS AND CELLS
for(let key in data['results']){
    
    $('#table-bod').append('<tr id="tr-' + rowNum + '"></tr>'); // add row for each key in response data

    let currentRow = Object.values(data['results'][key]); // capture current row values array

    // insert cells for row
    for(let i = 0; i < currentRow.length; i++){
        let rowID = '#tr-'+ rowNum;
        // first item -> insert <th></th>
        if(i == 0){
            $(rowID).append('<th scope="row">'+ currentRow[i] +'</th>'); 
        } else {    // other items -> insert <td></td>
            $(rowID).append('<td>'+ currentRow[i] +'</td>');
        }
    }

    rowNum++; // increment row number
}

}

const updateTableData = ()=>{
    // CUSTOMER PAGE
    if(customers !== -1){
        getDataFromServer(`${servURL}/allCustomers`,buildTable); // make async call  
        setHeader(['Customer ID', 'First', 'last', 'Email']);       
    }

    // CUSTOMER ADDRESSES PAGE
    if(custAddress !== -1){
        //GET Address Data From Server
        getDataFromServer(`${servURL}/allAddresses`, buildTable); // make async call
        setHeader(['Customer ID', 'First', 'last', 'Street Address', 'City', 'State', 'Zip']); 
    }

    // ORDERS PAGE
    if(orders !== -1){
        //GET Order Data From Server
        getDataFromServer(`${servURL}/allOrders`, buildTable); // make async call
        setHeader(['Order id', 'Customer', 'Order Status', 'Date Ordered', 'Total Price']); 
    }

    // PRODUCTS PAGE
    if(products !== -1){
        //GET Product Data From Server
        getDataFromServer(`${servURL}/allProducts`, buildTable); // make async call
        setHeader(['Product id', 'Title', 'Publisher', 'Platform', 'Genre', 'Rating', 'quantity', 'price']); 
    }
}


export {updateTableData, servURL};
