//策略模式
//根据不同参数可以命中不同的策略

var validator = {
    //所有可用的检查
    types: {},
    //错误消息
    messages: [],
    //当前验证的配置
    config: {},
    //验证
    validate: function (data) {
        var i, msg, type, checker, result_ok;
        this.messages = [];

        for (i in data) {
            if (data.hasOwnProperty(i)) {
                type = this.config[i];
                checker = this.types[type];
                if (!type) {
                    continue;  //不需要验证
                }
                if (!checker) {
                    throw {
                        name: 'ValidationError',
                        message: 'No handler to validate type ' + type
                    };
                }
                result_ok = checker.validate(data[i]);
                if (!result_ok) {
                    msg = 'Invalid value for *' + i + '*, ' + checker.instructions;
                    this.messages.push(msg);
                }
            }
        }

        return this.hasErrors();
    },
    hasErrors: function () {
        return this.messages.length != 0;
    }
};

validator.types.isNonEmpty = {
    validate: function (value) {
        return value !== '';
    },
    instructions: 'the value cannot be empty'
};
validator.types.isNumber = {
    validate: function (value) {
        return !isNaN(value);
    },
    instructions: 'the value can only be a valid number'
};

var data = {
    name: 'vector',
    age: 'qq'
};
validator.config = {
    name: 'isNonEmpty',
    age: 'isNumber'
};
validator.validate(data);
if (validator.hasErrors()) {
    console.log(validator.messages.join('\n'));
}