class Order {
    constructor(priceList) {
        this.priceList = priceList;
        this.orderList = {}
    }

    addItem(item, quantity) {
        this.orderList[item] = quantity
    }

    getPrice(item) {
        
    }
    
}