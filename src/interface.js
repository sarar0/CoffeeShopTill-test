$(document).ready(function(){
    $( function() {
      $( "#menu_item" ).selectmenu();
    })

    let orderOne = new Order;
    // orderOne.addItem("Tea", 1)
    // orderOne.addItem("Cafe Latte", 4)
    orderOne.addItem("Cappuccino", 4)
    let displayOne = new Display(orderOne);
    // document.body.innerHTML = displayOne.issueBill()

    $('#display_bill').text(displayOne.issueBill())

})