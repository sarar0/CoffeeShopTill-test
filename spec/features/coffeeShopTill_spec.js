describe ("Coffee Shop Till", function(){
    
    describe("#showBill", function(){
        xit("should format the bill when order is 1 Cappuccino", function(){
            let order = new Order()
            order.addItem("Cappuccino", 1)
            let display = new Display(order)
            expect(display.showBill()).toEqual("The Coffee Connection\n\n123 Lakeside Way\nPhone: +16503600708\nCappuccino 1 x $3.85\nTax: $2.87\nTotal: $6.72\nThank you!")
        })
    }) 

})