class Order {
    constructor() {
        this.shopInfo = {
            "shopName": "The Coffee Connection",
            "address": "123 Lakeside Way",
            "phone": "16503600708",
            "prices": [
              {
                "Cafe Latte": 4.75,
                "Flat White": 4.75,
                "Cappuccino": 3.85,
                "Single Espresso": 2.05,
                "Double Espresso": 3.75,
                "Americano": 3.75,
                "Cortado": 4.55,
                "Tea": 3.65,
                "Choc Mudcake": 6.40,
                "Choc Mousse": 8.20,
                "Affogato": 14.80,
                "Tiramisu": 11.40,
                "Blueberry Muffin": 4.05,
                "Chocolate Chip Muffin": 4.05,
                "Muffin Of The Day": 4.55
              }
            ]
          };
        this.orderList = {}
        this.subtotal = 0
        this.tax = 0;
        this.total = 0;
        this.taxPercentage = 8.64/100;
    }

    addItem(item, quantity) {
        this.orderList[item] = quantity
    }

    getPrice(item) {
          return this.shopInfo.prices[0][item]
    }

    calculateSubtotal() {
        const entries = Object.entries(this.orderList)
        for (const [item, quantity] of entries) {
            this.subtotal += (this.getPrice(item) * quantity)
        }
        return this.subtotal = Math.round(this.subtotal * 100)/100
    }

    calculateTotal() {
        this.tax = Math.round((this.calculateSubtotal()* this.taxPercentage) * 100)/100 ;
        this.total = Math.round((this.subtotal + this.tax) * 100)/100 ;     
    }
 
}