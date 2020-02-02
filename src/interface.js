$(document).ready(function(){

    let orderOne = new Order;
    orderOne.addItem("Tea", 1)
    // orderOne.addItem("Cafe Latte", 4)
    // orderOne.addItem("Cappuccino", 4)
    let displayOne = new Display(orderOne);


    $('#button2').click(function( event ) {
        event.preventDefault();
        $('#display_bill').html(displayOne.issueBill())
    })
})