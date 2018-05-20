//迭代器模式
//遍历某一个数据结构，这里以数组为例

var iterator = (function () {
    var index = 0,
        data = [1, 2, 3, 4, 5],
        len = data.length;
    return {
        next: function () {
            if (!this.hasNext()) {
                return null;
            }
            return data[index++];
        },
        hasNext: function () {
            return index < len;
        }
    };
}());

while(iterator.hasNext()) {
    console.log(iterator.next());
}