class Display {
    constructor(order){
       this.order = order;
       this.name = "The Coffee Connection"
       this.address = "123 Lakeside Way"
       this.phone = "16503600708"
    }
    
    formatOrder(){
        return `${this.order[0]} ${this.order[1]} x $${this.order[2]}\nTax: $${this.order[3]}\nTotal: $${this.order[4]}`
    }

    formatBill() {
        return `${this.name}\n\n${this.address}\nPhone: +${this.phone}\n${this.formatOrder()}\nThank you!`
    }

    showBill() {
        return this.formatBill()
    }
}