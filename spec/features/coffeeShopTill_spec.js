describe ("Coffee Shop Till", function(){
    
    describe("#showBill", function(){
        it("should format the bill when order is 1 Cappuccino", function(){
            let order = new Order()
            order.addItem("Cappuccino", 1)
            let display = new Display(order)
            expect(display.issueBill()).toEqual("The Coffee Connection<br><br>123 Lakeside Way<br>Phone: +16503600708<br>.<br>Cappuccino 1 x $3.85<br><br>Tax: $0.33<br>Total: $4.18<br>Thank you!")
        })

        it("should format the bill when order is 1 Cappuccino and 3 teas", function(){
            let order = new Order()
            order.addItem("Cappuccino", 1)
            order.addItem("Tea", 3)
            let display = new Display(order)
            expect(display.issueBill()).toEqual("The Coffee Connection<br><br>123 Lakeside Way<br>Phone: +16503600708<br>.<br>Cappuccino 1 x $3.85<br>Tea 3 x $3.65<br><br>Tax: $1.28<br>Total: $16.08<br>Thank you!")
        })
    }) 

})