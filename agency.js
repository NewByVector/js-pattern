//中介者模式
//独立的对象之间不直接通信，借助中介对象，当其中一个独立对象状态改变后，通知中介对象，中介对象也会将该变化通知到其他应该知道此变化的对象

//以两个玩家玩游戏为例，玩家play1按按键1，玩家play2按按键2，30s内看谁按得次数最多，并且分数实时显示在计分板

//玩家构造函数
function Player (name) {
    this.points = 0;
    this.name = name;
}
Player.prototype.play = function () {
    this.points++;
    mediator.played();
};

//计分板对象
var scoreboard = {
    element: document.getElementById('result'),
    //更新得分显示
    update: function (score) {
        var i, msg = '';
        for (i in score) {
            if (score.hasOwnProperty(i)) {
                msg += '<p><strong>' + i + '<\/strong>: ';
                msg += score[i];
                msg += '<\/p>';
            }
        }
        this.element.innerHTML = msg;
    }
}

//中介对象，作为play1、play2、计分板、按键事件之间通信中介
var mediator = {
    //所有的玩家
    players: {},

    //初始化
    setup: function () {
        var players = this.players;
        players.play1 = new Player('play1');
        players.play2 = new Player('play2');
    },

    //如果有人played,则更新分值
    played: function () {
        var players = this.players;
        var score = {
            play1: players.play1.points,
            play2: players.play2.points
        };
        scoreboard.update(score);
    },

    //处理用户交互
    keypress: function (e) {
        e = e || window.event;
        if (e.which == 49) {
            //按键1
            mediator.players.play1.play();
            return;
        } else if (e.which == 50) {
            //按键2
            mediator.players.play2.play();
            return;
        }
    }
};

//运行游戏
mediator.setup();
window.onkeypress = mediator.keypress;
setTimeout(function () {
    window.keypress = null;
    alert('game over!');
}, 30000);