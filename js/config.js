// Sets up all global page dependancies
import {updateTableData} from './buildTables.js';
import {getDataFromServer} from './client.js';
import {fullCount} from './aggregateCount.js';
const servURL = 'http://flip2.engr.oregonstate.edu:8226';

$(document).ready(function(){
    
    updateTableData(); // initial loading of page table data
    //getDataFromServer(`${servURL}/fullCount`, fullCount);

});

export {servURL};