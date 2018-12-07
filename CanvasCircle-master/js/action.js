/**
 * Created by 佳锐 on 2017/3/21.
 */
window.onload = function(){
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height  = window.innerHeight;
  //利用面向对象的思想创建圆模型
    var Square = function(x,y,radiu,option){
        this.wid = canvas.width;
        this.hei = canvas.height;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radiu = radiu;
        this.option = option;
        this.radius = Math.random()*5 + 1;
        this.angle = 0;//圆周运动的初始角度
    };
    Square.prototype = {
        draw:function(){
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.option.strokeStyle;
            this.ctx.lineWidth = this.option.lineWidth;
            this.ctx.arc(this.x,this.y,this.radiu,0,2*Math.PI,true);
            this.ctx.stroke();
        },
        move:function(){
            /*根据角度计算出x轴和y轴的偏移量*/
            this.x += this.radius*Math.cos(this.angle*(Math.PI/180));
            this.y += this.radius*Math.sin(this.angle*(Math.PI/180));
            this.angle+=5;
            this.draw();
        }
    };
    /*创建帧动画*/
    var Far = function(){
        this.width = canvas.width;
        this.height = canvas.height;
        this.ctx = ctx;
        this.timer = null;
        this.squares = [];//创建数组，用于存放圆实例
    };
    Far.prototype = {
        //循环渲染
        start : function(){
            this.timer = setInterval((function(param){
                return function(){param.render();}
            })(this),30);
        },
        //渲染方法
        render : function(){
            /*将之前的画布清除掉*/
            this.ctx.clearRect(0,0,canvas.width,canvas.height);
            /*遍历每个圆实例，让这些圆角度发生变化，从而让运动轨迹发送变化*/
            for(i in this.squares){
                this.squares[i].move();
                /*圆角度增加判断*/
                if(this.squares[i].angle>360){
                    this.squares[i].angle = 0;
                }
            }
        }
    };
    /*创建帧实例*/
    var frame = new Far();
    /*创建圆实例*/
    for(var i=0;i<10;i++){
        /*圆的所有属性都是一定范围内的随机数*/
        var x = Math.random()*(canvas.width);
        var y = Math.random()*(canvas.height);
        var radiu = Math.random()*20;
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        var a = Math.random();
        var option = {
            strokeStyle : 'rgba('+r+','+g+','+b+','+a+')',
            lineWidth : Math.random()*10
        };
        //把圆实例放到帧模型的数组中
        frame.squares[i] = new Square(x,y,radiu,option);
    }
    //开始渲染
    frame.start();
};