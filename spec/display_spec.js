describe ("Display bill", function(){
    var order;
    var display;
    
        it("check that order.issueBill() has been called", function(){
            let order = jasmine.createSpyObj('order', ['getShopInfo', 'calculateTotal', 'orderList']);
            order.getShopInfo.and.callFake(function() {
                return {
                    "shopName": "",
                    "address": "",
                    "phone": "",
                    "prices": [{}]
                  };
            });
            
            display = new Display(order)
            display.issueBill()
            expect(order.calculateTotal).toHaveBeenCalled();            
        })
    })
