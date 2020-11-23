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

    //ADD ITEM TO ORDER LIGHTBOX EVENT
    $('#btn-add-ord-item').on('click', () =>{        
        $('#form-ord-row').append(`<div class="form-group col-md-9">
        <input type="text" class="form-control" id="order-item" placeholder="enter item name">
      </div>
      <div class="form-group col-md-3">
        <input type="text" class="form-control" id="itemQuantity" placeholder="item quantity">               
      </div>`);
        
    });

    //ADD CUSTOMER ORDER
    $('#btn-cust-ord').on('click', () =>{      
        
        // Object to hold order
        let orderObject = {
            itemNames: [],
            itemQuantities: []
        }

        let keycount = 0

        // Pull Data for all items
        $('#form-ord-row > div').children().each(function(){
            let itemValue = $(this).val()
            
            // check if on name or quantity
            if(keycount % 2 == 0){
                orderObject.itemNames.push(itemValue) // add item names to proper key 
            } else {
                orderObject.itemQuantities.push(itemValue) // add item quantities to proper key
            }
            keycount = keycount+1;           

        });

        console.log(orderObject)

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