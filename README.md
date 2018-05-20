
这里我也把平时整体的设计模式分享一下。

设计模式是解决一类问题的模板，为软件设计中常见的问题提供解决方案。JavaScript 是一种弱类型、动态的、基于原型的语言，所以它可以以很简单的方式去实现一些模式。切记不要去套用后台语言的设计模式，这往往会丢失 JavaScript 这门语言的动态性和灵活性。

## 一些常用的设计模式

1. `单例模式`：保证一个对象只有一个实例，第二次创建的实例和第一次创建的完全一样。[代码](https://github.com/NewByVector/js-pattern/blob/master/singleton.js)

2. `工厂模式`：提供创建对象的方法。[代码](https://github.com/NewByVector/js-pattern/blob/master/factory.js)

3. `迭代器模式`：为遍历一个数据结构提供方法。[代码](https://github.com/NewByVector/js-pattern/blob/master/iterator.js)

4. `装饰者模式`：增强普通对象的功能，按照顺序进行装饰。[代码](https://github.com/NewByVector/js-pattern/blob/master/decorate.js)

5. `策略模式`：根据不同命令命中不同算法，可以避免使用多重条件语句。[代码](https://github.com/NewByVector/js-pattern/blob/master/strategy.js)

6. `外观模式`：将复杂的子系统功能隐藏在外观之后，提供简单的调用接口。[代码](https://github.com/NewByVector/js-pattern/blob/master/feature.js)

7. `代理模式`：通过包装一个对象以控制对它的访问,ES6中的Proxy就是通过代理扩展对象功能。[代码](https://github.com/NewByVector/js-pattern/blob/master/proxy.js)

8. `中介者模式`：对象之间不直接通信，借助中介对象进行通信，解决对象间通信产生的紧耦合问题。[代码](https://github.com/NewByVector/js-pattern/blob/master/agency.js)

9. `观察者模式`：又称发布-订阅模式，发布者中保存着一份订阅者的列表，当发布者的状态发生改变的时候就主动向订阅者发出通知。[代码](https://github.com/NewByVector/js-pattern/blob/master/observer.js)

10. `事件委托模式`：在定义DOM事件时用的最多，在父元素上监听事件代替给众多子元素监听事件。[代码](https://github.com/NewByVector/js-pattern/blob/master/entrust.js)
