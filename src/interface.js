$(document).ready(function(){

    let orderOne = new Order;
    let displayOne = new Display(orderOne);
    $('#button1').click(function( event ) {
        event.preventDefault();
        var item = $("#menu_item").val();
        var quantity = $("#quantity").val();
        orderOne.addItem(item, quantity)
        $('#order_list').html(displayOne.formatOrder())
    });
    
    $('#button2').click(function( event ) {
        event.preventDefault();
        $('#display_bill').html(displayOne.issueBill())
        $(this).attr("disabled", "disabled");
        $('#button1').attr("disabled","disabled");
    })

    $('#reload').click(function() {
        location.reload();
    });
    
})