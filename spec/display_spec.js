describe ("Display bill", function(){
    describe("#formatBill", function(){
        xit("should format the bill when order is empty", function(){
            let order = ["Cappuccino",0,0,0,0]
            let display = new Display(order)
            expect(display.formatBill()).toEqual("The Coffee Connection<br><br>123 Lakeside Way<br>Phone: +16503600708<br>Cappuccino 0 x $0<br>Tax: $0<br>Total: $0<br>Thank you!")
        })
    })  
    
    describe("#showBill", function(){
        xit("should format the bill when order is 1 Cappuccino", function(){
            let order = ["Cappuccino",1, 3.85, 2.87, 6.72]
            let display = new Display(order)
            expect(display.showBill()).toEqual("The Coffee Connection<br><br>123 Lakeside Way<br>Phone: +16503600708<br>Cappuccino 1 x $3.85<br>Tax: $2.87<br>Total: $6.72<br>Thank you!")
        })
    }) 

    describe("#formatOrder", function(){
        xit("should return the formatted order with tax and total", function(){
            let order = ["Cappuccino",1, 3.85, 2.87, 6.72]
            let display = new Display(order)
            expect(display.formatOrder()).toEqual("Cappuccino 1 x $3.85<br>Tax: $2.87<br>Total: $6.72")
        })
    })
})