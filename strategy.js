//策略模式
//根据不同命令可以命中不同的算法

var operate = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    },
    div: function (a, b) {
        return a / b;
    }
};

var calc = function (cmd, arg1, arg2) {
    return operate[cmd](arg1, arg2);
};

calc('add', 1, 3);  //4
calc('mul', 2, 4);  //8