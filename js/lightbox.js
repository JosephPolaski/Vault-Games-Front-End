$(document).ready(function(){

    //ADD CUSTOMER LIGHTBOX EVENT
    $('#btn-add-cust').on('click', () =>{        
        $('#cust-ltbox-bckdrp-1').removeClass('invisible');
        $('#cust-ltbox-bckdrp-1').addClass('visible'); 

    });

    //ADD CUSTOMER LIGHTBOX CLOSE BUTTON
    $('#cust-close-1').on('click', () =>{        
        $('#cust-ltbox-bckdrp-1').removeClass('visible');
        $('#cust-ltbox-bckdrp-1').addClass('invisible'); 

    });

    //ADD CUSTOMER ADDRESS LIGHTBOX EVENT
    $('#btn-add-cAddr').on('click', () =>{        
        $('#cust-ltbox-bckdrp-2').removeClass('invisible');
        $('#cust-ltbox-bckdrp-2').addClass('visible');
    });

    //ADD CUSTOMER LIGHTBOX CLOSE BUTTON
    $('#cust-close-2').on('click', () =>{        
        $('#cust-ltbox-bckdrp-2').removeClass('visible');
        $('#cust-ltbox-bckdrp-2').addClass('invisible');
    });

});