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

//POST REQUEST FUNCTION

const postDataToServer = (queryURL, postData) =>{

    //POST Customer Data From Server
    $.ajax({
        type: 'POST',
        url: queryURL,
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: postData,
        datatype: 'jsonp',
        success: function(data){
            console.log(data)
        },
        error: function() {
            alert('Oh No! It seems there was an error in contacting the server!')
        }
    });

}


export {getDataFromServer, postDataToServer};