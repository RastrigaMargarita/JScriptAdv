'use strict'

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 }]
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector(".main__goods-list").innerHTML = listHtml;
    }

    countSum() {
        let sum = 0;
        this.goods.forEach(good => {
            sum += good.price;
        })
        return sum;
    }
}

class GoodsItem {
    constructor(title = "скоро тут будет товар", price = "0 EUR") {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="main__goods-item"><h3>${this.title}</h3><p>${this.price}</p> EUR</div>`;
    }
}

class Cart {
    constructor() {
        this.goods = [];

    }
    AddItem(good) {
        this.goods.forEach(alreadyBeen => {
            if (alreadyBeen.title == good.title) { alreadyBeen.quantity += 1; return };
        })
        this.goods.push(new CartItem(good, 1));
    }

    DelItem(good) {
        this.goods.forEach(alreadyBeen => {
            if (alreadyBeen.title == good.title) {
                alreadyBeen.quantity -= 1;
            };
        });
    }


}

class CartItem {
    constructor(good, quantity) {
        this.good = good;
        this.quantity = quantity;
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
console.log(list.countSum());
