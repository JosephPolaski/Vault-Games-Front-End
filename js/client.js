 //GET REQUEST FUNCTION
const getDataFromServer = (queryURL, callBack)=>{

    //GET Customer Data From Server
    $.ajax({
        type: 'GET',
        url: queryURL,
        datatype: 'json',
        success: callBack,
        error: function() {
            alert('Oh No! It seems there was an error in contacting the server!')
        }
    });

}


export {getDataFromServer};