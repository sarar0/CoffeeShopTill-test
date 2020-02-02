$(document).ready(function(){

    let orderOne = new Order;
    let displayOne = new Display(orderOne);
    $('#button1').click(function( event ) {
        event.preventDefault();
        var item = $("#menu_item").val();
        orderOne.addItem(item, 1)
        $('#order_list').html(displayOne.formatOrder())
    });
    
    $('#button2').click(function( event ) {
        event.preventDefault();
        $('#display_bill').html(displayOne.issueBill())
    })
})