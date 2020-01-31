describe ("Coffee Shop Till", function(){
    
    describe("#showBill", function(){
        let order;
        let display; 

        beforeEach(function() {
            order = new Order()
            display = new Display(order)
        });

        it("should format the bill when order is 1 Cappuccino", function(){ 
            order.addItem("Cappuccino", 1)
            expect(display.issueBill()).toEqual("The Coffee Connection<br><br>123 Lakeside Way<br>Phone: +16503600708<br>.<br>Cappuccino 1 x $3.85<br><br>Tax: $0.33<br>Total: $4.18<br>Thank you!")
        })

        it("should format the bill when order is 1 Cappuccino and 3 teas", function(){
            order.addItem("Cappuccino", 1)
            order.addItem("Tea", 3)
            expect(display.issueBill()).toEqual("The Coffee Connection<br><br>123 Lakeside Way<br>Phone: +16503600708<br>.<br>Cappuccino 1 x $3.85<br>Tea 3 x $3.65<br><br>Tax: $1.28<br>Total: $16.08<br>Thank you!")
        })

        it("should format the bill when order is 3 Cappuccinos, 1 Tea, 2 Flat Whites", function(){
            order.addItem("Cappuccino", 1)
            order.addItem("Tea", 1)
            order.addItem("Flat White", 2)
            expect(display.issueBill()).toEqual("The Coffee Connection<br><br>123 Lakeside Way<br>Phone: +16503600708<br>.<br>Cappuccino 1 x $3.85<br>Tea 1 x $3.65<br>Flat White 2 x $4.75<br><br>Tax: $1.47<br>Total: $18.47<br>Thank you!")
        })
    }) 

})