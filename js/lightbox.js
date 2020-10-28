$(document).ready(function(){

    //ADD CUSTOMER LIGHTBOX EVENT
    $('#btn-add-cust').on('click', () =>{        
        $('#ltbox-bckdrp').removeClass('invisible');
        $('#ltbox-bckdrp').addClass('visible'); 

    });

    //LIGHTBOX CLOSE BUTTON
    $('#cust-close').on('click', () =>{        
        $('#ltbox-bckdrp').removeClass('visible');
        $('#ltbox-bckdrp').addClass('invisible'); 

    });
});