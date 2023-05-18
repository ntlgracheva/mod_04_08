
const cart = {
    items: [],
    totalPrice: 0,
    count: 0,

    getTotalPrice() {
        return this.totalPrice
    },

    add(productName, productPrice, productAmount = 1) {
        this.items.push({
            productName: productName,
            productPrice: productPrice,
            productAmount: productAmount,
        });

        this.count = this.items.reduce((acc, item) => acc + item.productAmount,
            0,
        );

        this.calculateItemPrice()
    },

    increaseCount(num) {
        return this.count += num;
    },

    calculateItemPrice() {
        return this.totalPrice = this.items.reduce((acc, item) => acc + (item.productPrice * item.productAmount),
            0,
        );
    },

    clear() {
        this.items = [];
        this.totalPrice = 0;
        this.count = 0;
    },

    print() {
        const itemsList = this.items.map(item => JSON.stringify(item));
        console.log(`Список товаров в корзине: ${itemsList}/n общую стоимость корзины: ${this.totalPrice}`);
    }
}

cart.add("pc", 500, 3);
cart.add("table", 100, 2);
cart.add("pen", 1, 30);

cart.print();

