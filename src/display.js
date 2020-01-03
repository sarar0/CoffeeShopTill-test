class Display {
    constructor(order){
       this.order = order;
       this.name = "The Coffee Connection"
       this.address = "123 Lakeside Way"
       this.phone = "16503600708"
    }
    
    formatOrder(){
        
    }

    formatBill() {
        return this.name + "\n\n" + this.address + "\nPhone: +" + this.phone + "\n"+ this.order + "\nThank you!"
    }

    showBill() {
        return this.formatBill()
    }
}