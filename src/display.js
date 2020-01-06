class Display {
    constructor(order){
       this.order = order;
       this.name = order.shopInfo.shopName;
       this.address = order.shopInfo.address;
       this.phone = order.shopInfo.phone;
    }
    
    formatOrder(){
        var formattedList = ""
        const entries = Object.entries(this.order.orderList)
        for (const [item, quantity] of entries) {
            formattedList = formattedList.concat(`${item} ${quantity} x $${this.order.shopInfo.prices[0][item]}<br>`)
        }
        return formattedList;
    }

    issueBill() {
        this.order.calculateTotal()
        return `${this.name}<br><br>${this.address}<br>Phone: +${this.phone}<br>.<br>${this.formatOrder()}<br>Tax: $${this.order.tax}<br>Total: $${this.order.total}<br>Thank you!`
    }

}