describe ("Display bill", function(){
    describe("#formatBill", function(){
        it("should format the bill when order is empty", function(){
            let order = ""
            let display = new Display(order)
            expect(display.formatBill()).toEqual("The Coffee Connection\n\n123 Lakeside Way\nPhone: +16503600708\n\nThank you!")
        })
    })  
    
    describe("#showBill", function(){
        it("should format the bill when order is 1 Cappuccino", function(){
            let order = "Cappuccino 1 x 3.85\nTax: $2.87\nTotal: $6.72"
            let display = new Display(order)
            expect(display.showBill()).toEqual("The Coffee Connection\n\n123 Lakeside Way\nPhone: +16503600708\nCappuccino 1 x 3.85\nTax: $2.87\nTotal: $6.72\nThank you!")
        })
    }) 
})