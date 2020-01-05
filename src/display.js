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
            formattedList = formattedList.concat(`${item} ${quantity} x $${this.order.shopInfo.prices[0][item]}\n`)
        }
        return formattedList;
    }

    issueBill() {
        this.order.calculateTotal()
        return `${this.name}\n\n${this.address}\nPhone: +${this.phone}\n.\n${this.formatOrder()}\nTax: $${this.order.tax}\nTotal: $${this.order.total}\nThank you!`
    }

}