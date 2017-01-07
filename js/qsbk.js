(function(window){
	function Myobj(data){
		this.imgSrc = '';
		this.name = '';
		this.contents = '';
		this.num1 = '';
		this.num2 = '';
		this.data = data;
	}

	Myobj.prototype = {
		bindDOM: function(){
			var str = '';
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
			str += '<span class="number1">' + this.num1 + '</span>好笑';
			str += '<span class="number2">·' + this.num2 + '</span>评论';
			str += '</div>';
			str += '<div class="face">';
			str += '<i class="icon-smile"></i>';
			str += '<i class="icon-cry"></i>';
            str += '<i class="icon-talk"></i>';
            str += '</div>';
            str += '<div class="share"><i class="icon-wx"></i><i class="icon-qq"></i><i class="icon-ozne"></i><i class="icon-wb"></i></div>'

            return str;
		},

		bindDOMs: function(){
			var str = '';
			for(var i = 0; i < this.data.length; i++){
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
		}
		catch(e) {
			var xmlRequest = new ActiveXObject("Microsoft.XMLHTTP");
		}

		var dd = new Date();
		xmlRequest.open("get", "info.json?" + dd.getTime(),true);
		xmlRequest.send();

		xmlRequest.onreadystatechange = function(){
			if (xmlRequest.readyState == 4) {
				if (xmlRequest.status == 200) {
					var xrq = xmlRequest.responseText;
					var json = JSON.parse(xrq).data;
					console.log(json);
					var p = new Myobj(transformobj(json));
    				p.init(document.getElementById(container));
				}
			}
		}


		function transformobj(json) {
			var list = [];
			for(var i = 0; i< json.length; i++){
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

    
		}
)(window);