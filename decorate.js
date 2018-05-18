//装饰者模式
//动态地给函数赋能

function Sale(price) {
    this.price = price;
    this.decorators_list = [];
}

Sale.decorators = {};
Sale.decorators.fedtax = {
    getPrice: function (price) {
        return price + price * 5 / 100;
    }
};
Sale.decorators.money = {
    getPrice: function (price) {
        return '$' + price.toFixed(2);
    }
};

Sale.prototype.decorate = function (decorator) {
    this.decorators_list.push(decorator);  
};

Sale.prototype.getPrice = function () {
    var price = this.price,
    i,
    len = this.decorators_list.length,
    name;
    for (i = 0; i < len; i++) {
        name = this.decorators_list[i];
        price = Sale.decorators[name].getPrice(price);
    }
    return price;
};

var sale = new Sale(100);
sale.decorate('fedtax');
sale.decorate('money');
sale.getPrice();