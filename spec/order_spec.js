describe ("Order", function(){
    let order;

    describe("#addItem", function(){
        beforeEach(function() {
            order = new Order()
        });

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

        it("updates quantity when same item is added twice", function(){
            let order = new Order()
            order.addItem("Cappuccino", 3)
            order.addItem("Cappuccino", 3)
            expect(order.orderList["Cappuccino"]).toEqual(6)
        })
    }) 

    describe("#getPrice", function(){
        it("should return the unitary price for the item Tea", function(){
            let order = new Order()
            expect(order.getPrice("Tea")).toEqual(3.65)
        })

        it("should return the unitary price for the item Cappuccino", function(){
            let order = new Order()
            expect(order.getPrice("Cappuccino")).toEqual(3.85)
        })
    }) 

    describe("#calculateSubtotal", function(){
        it("should calculate subtotal when order is only 1 Cappuccino", function(){
            let order = new Order()
            order.addItem("Cappuccino", 1)
            expect(order.calculateSubtotal()).toEqual(3.85)
        })

        it("should calculate subtotal when order is 1 Cappuccino and 3 teas", function(){
            let order = new Order()
            order.addItem("Cappuccino", 1)
            order.addItem("Tea", 3)
            expect(order.calculateSubtotal()).toEqual(14.80)
        })
    }) 

    describe("#calculateTotal", function(){
        it("should calculate subtotal and tax when order is only 1 Cappuccino", function(){
            let order = new Order()
            order.addItem("Cappuccino", 1)
            order.calculateTotal()
            expect(order.subtotal).toEqual(3.85)
            expect(order.tax).toEqual(0.33)
            expect(order.total).toEqual(4.18)
        })

        it("should calculate subtotal and tax when order is 1 Cappuccino and 3 teas", function(){
            let order = new Order()
            order.addItem("Cappuccino", 1)
            order.addItem("Tea", 3)
            order.calculateTotal()
            expect(order.subtotal).toEqual(14.80)
            expect(order.tax).toEqual(1.28)
            expect(order.total).toEqual(16.08)
        })
    }) 

})