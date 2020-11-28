$(document).ready(function(){

    /****************************
    ****** CUSTOMER PAGE**********
    ******************************/

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

    //ADD CUSTOMER ORDER LIGHTBOX EVENT
    $('#btn-ord-cust').on('click', () =>{        
        $('#cust-ltbox-bckdrp-3').removeClass('invisible');
        $('#cust-ltbox-bckdrp-3').addClass('visible');
    });    

    //ADD CUSTOMER ORDER LIGHTBOX CLOSE BUTTON
    $('#cust-close-3').on('click', () =>{        
        $('#cust-ltbox-bckdrp-3').removeClass('visible');
        $('#cust-ltbox-bckdrp-3').addClass('invisible');
    });  


    //ADD CUSTOMER ADDRESS LIGHTBOX EVENT
    $('#btn-add-cAddr').on('click', () =>{        
        $('#cust-ltbox-bckdrp-2').removeClass('invisible');
        $('#cust-ltbox-bckdrp-2').addClass('visible');
    });

    //UPDATE CUSTOMER ADDRESS LIGHTBOX EVENT
    $('#btn-upd-addr').on('click', () =>{        
        $('#cust-ltbox-bckdrp-2').removeClass('invisible');
        $('#cust-ltbox-bckdrp-2').addClass('visible');
    });

    //ADD CUSTOMER LIGHTBOX CLOSE BUTTON
    $('#cust-close-2').on('click', () =>{        
        $('#cust-ltbox-bckdrp-2').removeClass('visible');
        $('#cust-ltbox-bckdrp-2').addClass('invisible');
    });

    /****************************
    ****** PRODUCT PAGE**********
    ******************************/

    //ADD PRODUCT LIGHTBOX EVENT
    $('#btn-add-product-main').on('click', () =>{      
        $('#ltbox-bckdrp-prod').removeClass('invisible');
        $('#ltbox-bckdrp-prod').addClass('visible');
    });

    //ADD PRODUCT LIGHTBOX CLOSE BUTTON
    $('#prod-close').on('click', () =>{        
        $('#ltbox-bckdrp-prod').removeClass('visible');
        $('#ltbox-bckdrp-prod').addClass('invisible');
    });

});