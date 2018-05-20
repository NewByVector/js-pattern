//单例模式
//一个类只能构造出唯一实例

//静态属性方式实现
function Person() {
    if (typeof Person.instance === 'object') {
        return Person.instance;
    }
    this.name = 'vector';
    this.age = 25;
    Person.instance = this;
}

//闭包方式实现
var Person = (function () {
   var instance;
   return function (name, age) {
       if (instance) {
           return instance;
       }
       this.name = 'vector';
       this.age = 25;
       instance = this;
   };
}());

var p1 = new Person();
var p2 = new Person();
console.log(p1 === p2);  //true