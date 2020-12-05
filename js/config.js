// Sets up all global page dependancies
import {updateTableData} from './buildTables.js';
import {getDataFromServer} from './client.js';
import {fullCount} from './aggregateCount.js';
const servURL = 'http://flip1.engr.oregonstate.edu:8596';

$(document).ready(function(){
    
    updateTableData(); // initial loading of page table data
    //getDataFromServer(`${servURL}/fullCount`, fullCount);

});

export {servURL};