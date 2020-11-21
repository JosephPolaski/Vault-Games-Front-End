 //GET REQUEST FUNCTION
const getDataFromServer = (queryURL, callBack)=>{

    var result;
    //GET Customer Data From Server
    $.ajax({
        type: 'GET',
        url: queryURL,
        datatype: 'json',
        success: callBack,
        error: function() {
    
        }
    });

}


export {getDataFromServer};