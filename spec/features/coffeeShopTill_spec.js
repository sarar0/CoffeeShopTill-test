describe ("Coffee Shop Till", function(){
    
    describe("#showBill", function(){
        it("should format the bill when order is 1 Cappuccino", function(){
            let order = new Order()
            order.addItem("Cappuccino", 1)
            let display = new Display(order)
            expect(display.showBill()).toEqual("The Coffee Connection\n\n123 Lakeside Way\nPhone: +16503600708\nCappuccino 1 x $3.85\n\nTax: $0.33\nTotal: $4.18\nThank you!")
        })

        it("should format the bill when order is 1 Cappuccino and 3 teas", function(){
            let order = new Order()
            order.addItem("Cappuccino", 1)
            order.addItem("Tea", 3)
            let display = new Display(order)
            expect(display.showBill()).toEqual("The Coffee Connection\n\n123 Lakeside Way\nPhone: +16503600708\nCappuccino 1 x $3.85\nTea 3 x $3.65\n\nTax: $1.28\nTotal: $16.08\nThank you!")
        })
    }) 

})