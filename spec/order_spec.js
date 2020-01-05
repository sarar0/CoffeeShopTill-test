describe ("Order", function(){
    
    describe("#addItem", function(){
        it("should add an item and quantity to the order", function(){
            let order = new Order()
            order.addItem("Cappuccino", 1)
            expect(Object.keys(order.orderList).length).toEqual(1)
        })

        it("should add multiple items and quantities to the order", function(){
            let order = new Order()
            order.addItem("Cappuccino", 3)
            order.addItem("Cafe Latte", 2)
            expect(Object.keys(order.orderList).length).toEqual(2)
        })
    }) 

    describe("#getPrice", function(){
        it("should return the unitary price for the item", function(){
            let order = new Order()
            order.getPrice("Cappuccino", 1)
            expect(order.getPrice("Cappuccino")).toEqual(3.85)
        })
    }) 

})