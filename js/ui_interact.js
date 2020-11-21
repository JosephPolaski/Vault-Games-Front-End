$(document).ready(function(){    

    var ROWSELECTED = null;

    //SELECT ROW EVENT
    $('table.table tbody tr').on('click',function(e){        

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

});