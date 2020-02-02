class Display {
    constructor(order){
       this.order = order;
       this.name = order.getShopInfo().shopName;
       this.address = order.getShopInfo().address;
       this.phone = order.getShopInfo().phone;
    }
    
    formatOrder(){
        var formattedList = ""
        const entries = Object.entries(this.order.orderList)
        for (const [item, quantity] of entries) {
            formattedList = formattedList.concat(`${item} ${quantity} x $${this.order.getPrice(item)}<br>`)
        }
        return formattedList;
    }

    issueBill() {
        this.order.calculateTotal()
        return `${this.name}<br><br>${this.address}<br>Phone: +${this.phone}<br>.<br>${this.formatOrder()}<br>Tax: $${this.order.tax}<br>Total: $${this.order.total}<br>Thank you!`
    }

}