//事件委托模式
//给每一个子元素注册监听器比较耗内存，基于DOM事件冒泡的原理，将事件监听器注册在父元素上。

//给ul下的li绑定点击事件
var ul = document.getElementById('list');
ul.addEventListener('click', function (e) {
    var target = e.target;
    if (target.node === 'LI') {
        //处理逻辑
    }
});
