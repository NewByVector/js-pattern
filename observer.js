//观察者模式
//当发生一个感兴趣的事件时，将该事件通告给所有观察者
//形成对象之间的松散耦合

function EventTarget() {
    this.handlers = {};
}
EventTarget.prototype = {
    constructor: EventTarget,
    addHandler: function (type, handler) {
        if (typeof this.handlers[type] == "undefined") {
            this.handlers[type] = [];
        }
        this.handlers[type].push(handler);
    },
    fire: function (event) {
        if (!event.target) {
            event.target = this;
        }
        if (this.handlers[event.type] instanceof Array) {
            var handlers = this.handlers[event.type];
            for (var i = 0, len = handlers.length; i < len; i++) {
                handlers[i](event);
            }
        }
    },
    removeHandler: function (type, handler) {
        if (this.handlers[type] instanceof Array) {
            var handlers = this.handlers[type];
            for (var i = 0, len = handlers.length; i < len; i++) {
                if (handlers[i] === handler) {
                    break;
                }
            }
            handlers.splice(i, 1);
        }
    }
};

var publisher = new EventTarget();  //定义发布者
//向发布者中注册订阅者
publisher.addHandler('call1',function () {
    console.log('call1');
});
publisher.addHandler('call1',function () {
    console.log('call1 again');
});
//发布者发布消息
publisher.fire({type: 'call1'});  //call1 call1 again