$(document).ready(function(){
    $( function() {
      $( "#menu_item" ).selectmenu();
    });

    let orderOne = new Order;
    // orderOne.addItem("Tea", 1)
    // orderOne.addItem("Cafe Latte", 4)
    // orderOne.addItem("Cappuccino", 4)
    let displayOne = new Display(orderOne);

    $('#display_bill').html(displayOne.issueBill())

})