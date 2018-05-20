//工厂模式
//工厂模式用于生产对象

function factory(name, age) {
    var obj = {};
    obj.name = name;
    obj.age = age;
    obj.sayName = function () {
        console.log(this.name);
    };
    obj.sayAge = function () {
        console.log(this.age);
    };
    return obj;
}

var p1 = factory('vector', 25);
console.log(p1);  //{name: "vector", age: 25, sayName: ƒ, sayAge: ƒ}