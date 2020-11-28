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
            alert('ERROR: Duplicate value or potential conflict reaching server.')
        }
    });
}

//DELETE REQUEST FUNCTION
const delDataFromServer = (queryURL, delData) =>{

    //DELETE Data From Server
    $.ajax({
        type: 'DELETE',
        url: queryURL,
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: delData,
        datatype: 'jsonp',
        success: function(data){
            console.log(data)
        },
        error: function() {
            alert("Something went wrong and you were not able to delete.")
        }
    });
}

const updateDataFromServer = (queryURL, updateData) => {
    //UPDATE Data From Server
    $.ajax({
        type: 'PUT',
        url: queryURL,
        headers:{
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        data: updateData,
        datatype: 'jsonp',
        success: function(data) {
            console.log(data)
        },
        error: function() {
            alert("Something went wrong and you were not able to update.")
        }
    });
}


export {getDataFromServer, postDataToServer, delDataFromServer, updateDataFromServer};