class Display {
    constructor(order){
       this.order = order;
       this.name = "The Coffee Connection"
       this.address = "123 Lakeside Way"
       this.phone = "16503600708"
    }
    
    formatOrder(){
        return `Cappuccino ${this.order[0]} x $${this.order[1]}\nTax: $${this.order[2]}\nTotal: $${this.order[3]}`
    }

    formatBill() {
        return `${this.name}\n\n${this.address}\nPhone: +${this.phone}\n${this.order}\nThank you!`
    }

    showBill() {
        return this.formatBill()
    }
}