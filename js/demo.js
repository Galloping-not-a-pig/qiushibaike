/*
 * @Author: QCF
 * @Date:   2016-12-19 16:34:45
 * @Last Modified by:   QCF
 * @Last Modified time: 2016-12-20 18:32:45
 */

(function(window) {
    //抽象出一个构造函数
    function Myobj(data) {
        this.imgSrc = '';
        this.name = '';
        this.contents = '';
        this.num1 = '';
        this.num2 = '';
        this.data = data;
    }
    //构造函数创建原型
    Myobj.prototype = {
        bindDOM: function() {
            var str = '';
            str += '<div class="QB">'
            str += '<div class="author">';
            str += '<div class="Avatar">';
            str += '<img src="' + this.imgSrc + '" alt="">';
            str += '</div>';
            str += '<a href="" class="username">' + this.name + '</a>';
            str += '</div>';
            str += '<div class="article">';
            str += '<span class="content">' + this.contents + '</span>';
            str += '</div>';
            str += '<div class="stats">';
            str += '<span class="number2">' + this.num2 + '</span>评论';
            str += '<span class="number1">' + this.num1 + '</span>好笑';
            str += '</div>';
            str += '<div class=" SUB">';
            str += '<i class="i-smile"></i>';
            str += '<i class="i-cry"></i>';
            str += '<i class="i-talk"></i>';
            str += '</div>';
            str += '<div class=" SAB"><i class="i-wx"></i><i class="i-qq"></i><i class="i-ozne"></i><i class="i-wb"></i></div>'

            str += '</div>';
            return str;
        },

        bindDOMs: function() {
            var str = '';
            for (var i = 0; i < this.data.length; i++) {
                str += this.data[i].bindDOM();
            }

            container.innerHTML = str;
        },

        init: function(container) {
            this.bindDOMs(container);
        }
    };
    // window.Myobj = Myobj;


    //ajax获取数据
    try {
        var xmlRequest = new XMLHttpRequest();
    } catch (e) {
        var xmlRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    var dd = new Date();
    xmlRequest.open("get", "info.json?" + dd.getTime(), true);
    xmlRequest.send();

    xmlRequest.onreadystatechange = function() {
        if (xmlRequest.readyState == 4) {
            if (xmlRequest.status == 200) {
                var xrq = xmlRequest.responseText;
                var json = JSON.parse(xrq).data;
                console.log(json);
                // json=json.slice(0,10)
                var p = new Myobj(transformobj(json));
                p.init(document.getElementById(container));
            }
        }
    }

    function transformobj(json) {
        var list = [];
        for (var i = 0; i < json.length; i++) {
            var p = new Myobj();
            p.imgSrc = json[i].src;
            p.name = json[i].username;
            p.contents = json[i].content;
            p.num1 = json[i].number1;
            p.num2 = json[i].number2;

            list.push(p);
        }

        return list;
    }
var obt2=document.getElementById("bt2");
obt2.onclick=function(){
 try {
        var xmlRequest = new XMLHttpRequest();
    } catch (e) {
        var xmlRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    var dd = new Date();
    xmlRequest.open("get", "info2.json?" + dd.getTime(), true);
    xmlRequest.send();

    xmlRequest.onreadystatechange = function() {
        if (xmlRequest.readyState == 4) {
            if (xmlRequest.status == 200) {
                var xrq = xmlRequest.responseText;
                var json = JSON.parse(xrq).data;
                console.log(json);
                // json=json.slice(4,14)
                var p = new Myobj(transformobj(json));
                p.init(document.getElementById(container));
            }
        }
    }
}
var obt1=document.getElementById("bt1");
obt1.onclick=function(){
 try {
        var xmlRequest = new XMLHttpRequest();
    } catch (e) {
        var xmlRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    var dd = new Date();
    xmlRequest.open("get", "info.json?" + dd.getTime(), true);
    xmlRequest.send();

    xmlRequest.onreadystatechange = function() {
        if (xmlRequest.readyState == 4) {
            if (xmlRequest.status == 200) {
                var xrq = xmlRequest.responseText;
                var json = JSON.parse(xrq).data;
                console.log(json);
                // json=json.slice(0,10)
                var p = new Myobj(transformobj(json));
                p.init(document.getElementById(container));
            }
        }
    }
}



})(window);
