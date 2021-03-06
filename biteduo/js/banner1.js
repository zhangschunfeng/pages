var jq = $;
$(document).ready(
	
	
		
    function () {
        /*创建幻灯片开始*/
        var s = new slide();
        s.urls = ['images/home.png', 'images/air.png', 'images/work.png'];//banner图片链接
        s.playTime = 3000;
        s.duration = 500;
        s.easing = "easeInOutQuad";
        s.clickEasing = "easeOutCubic";
        try {
            s.play();
        } catch (e) {
        }
        /*创建幻灯片结束*/
    }
);

/*幻灯片*/
function slide(urls, playTime, duration, easing, clickEasing) {
    var direction = "left";
    var flag = false;
    var prev = 2, num = 0, next = 1;
    var picList = jq("#picList");
    var slide_li = jq('.slide_li');
    var slide_img = jq('.slide_img');
    var thumb = jq("#slideThumb");
    var slideNum, size, tmpnum;
    var _this = this;
    var w;
    _this.urls = urls;//banner图片链接
    _this.playTime = playTime;//设置切换秒数
    _this.duration = duration;//设置滑动延迟秒数
    _this.easing = easing;//滑动效果
    _this.clickEasing = clickEasing;//点击时滑动效果


    /*自动设置切换按钮*/
    function setThumb() {
        size = picList.find("li").length;
        //var links = jq("#picList li img:first");
        var sb = new stringBuffer();
        sb.clear();
        for (var i = 1; i <= size; i++) {
            sb.append("<span class=\"slideNum\"></span>");
        }
        thumb.html(sb.toString());
        slideNum = thumb.find(".slideNum");
        num = (slideNum.width() + parseInt(slideNum.css("margin-right")) + 2) * size + 1;
        slideNum.eq(0).addClass("active");
    }

    //幻灯基本大小设置
    function slideLi(){
        w = $('#slide').width();
        slide_li.width(w);
    }

    function titleBar() {
        thumb.width(num + 2);
        jq("#titleBar .slideNum:first").addClass("active");
    }

    //自动播放
	
	
	//手标放上去停止滚动;
	
	$("#slide").mouseover(function(){
		
		clearInterval(flag);
	
	})
	
	//手标离开的时候继续滚动;
	
	$("#slide").mouseout(function(){
	
	
		
			   flag = setInterval
            (
                function () {
                    num = jq("#slideThumb").find(".active").index("#slideThumb .slideNum");
                    if (num == (size - 1)) {
                        num = 0;
                        next = 1;
                        prev = 2;
                    }
                    else {
                        num++;
                        next = (num + 1)%3;
                        prev = (next + 1)%3;
                    }
                    //slide_li.eq(num).fadeIn(_this.duration).siblings().hide();
                    //picList.stop().animate({"margin-left":0 - num * w},{duration:_this.duration, easing:_this.easing});
                    slide_li.eq(prev).siblings().css({'left':0 + w});
                    slide_li.eq(prev).stop().animate({'left':0 - w},_this.duration,function(){
                        $(this).removeClass('.sActive').css({'left':0 + w});
                    });
                    slide_li.eq(num).stop().animate({'left':0},_this.duration);
                    slideNum.removeClass("active").eq(num).addClass("active");
                }, _this.playTime
            );
	
	})
	
	
   function autoPlay() {
   
   jq("#picList").css({margin:"0px"});
        flag = setInterval
            (
                function () {
                    num = jq("#slideThumb").find(".active").index("#slideThumb .slideNum");
                    if (num == (size - 1)) {
                        num = 0;
                        next = 1;
                        prev = 2;
                    }
                    else {
                        num++;
                        next = (num + 1)%3;
                        prev = (next + 1)%3;
                    }
                    //slide_li.eq(num).fadeIn(_this.duration).siblings().hide();
                    //picList.stop().animate({"margin-left":0 - num * w},{duration:_this.duration, easing:_this.easing});
                    slide_li.eq(prev).siblings().css({'left':0 + w});
                    slide_li.eq(prev).stop().animate({'left':0 - w},_this.duration,function(){
                        $(this).removeClass('.sActive').css({'left':0 + w});
                    });
                    slide_li.eq(num).stop().animate({'left':0},_this.duration);
                    slideNum.removeClass("active").eq(num).addClass("active");
                }, _this.playTime
            );
    }

    //点击事件
    function slideEvent() {
        slideNum.click
            (
                function () {
                    var thisNum = jq(this).index("#slideThumb .slideNum");
                    //slide_li.eq(thisNum).fadeIn(_this.duration).siblings().hide();
                    //picList.stop().animate({"margin-left":0 - jq(this).index("#slideThumb .slideNum") * w},{duration:_this.duration, easing:_this.clickEasing});
                    if(thisNum != num){
                        slide_li.stop();
                        slideNum.removeClass("active").eq(thisNum).addClass("active");
                        slide_li.eq(prev).css({'left':0 + w});
                        slide_li.eq(num).animate({'left':0 - w},_this.duration,function(){
                            if(thisNum == 2){
                                slide_li.eq(0).css({'left':0 + w})
                            }else{
                                $(this).next().css({'left':0 + w})
                            }
                        });
                        slide_li.eq(thisNum).css({'left':0 + w,'z-index':5}).animate({'left':0},_this.duration,function(){
                            slide_li.eq(thisNum).css({'z-index':1}).siblings().css({'left':0 + w});
                        });
                        num = thisNum;
                        next = (num + 1)%3;
                        prev = (next + 1)%3;
                    }else{return false}
                }
            );     
    }

    function btnEvent() {
        $(".left-btn").click(function () {
            var thisNum = jq(this).index("#slideThumb .slideNum");
            //slide_li.eq(thisNum).fadeIn(_this.duration).siblings().hide();
            //picList.stop().animate({"margin-left":0 - jq(this).index("#slideThumb .slideNum") * w},{duration:_this.duration, easing:_this.clickEasing});
            if(thisNum != num){
                slide_li.stop();
                slideNum.removeClass("active").eq(thisNum).addClass("active");
                slide_li.eq(prev).css({'left':0 + w});
                slide_li.eq(num).animate({'left':0 - w},_this.duration,function(){
                    if(thisNum == 2){
                        slide_li.eq(0).css({'left':0 + w})
                    }else{
                        $(this).next().css({'left':0 + w})
                    }
                });
                slide_li.eq(thisNum).css({'left':0 + w,'z-index':5}).animate({'left':0},_this.duration,function(){
                    slide_li.eq(thisNum).css({'z-index':1}).siblings().css({'left':0 + w});
                });
                num = thisNum;
                next = (num + 1)%3;
                prev = (next + 1)%3;
            }else{return false}
        })
    }

    this.play = function () {
        setThumb();
        titleBar();
		autoPlay();
        slideLi();
		slideEvent();
        btnEvent();
		if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
			$('.airBottom').attr('src', 'style/images/blank.gif').get(0).runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='style/images/airBottom.png',sizingMethod='scale')";
		}//修复ie6图片透明
        slide_li.eq(0).removeClass('first').siblings().css({'left':0 + w});
        num = 0;
    }

    //窗口大小变化
    $(window).resize(slideLi);
}

//StringBuffer功能，用于拼接字符串
function stringBuffer() {
    this._strings = new Array();
}
stringBuffer.prototype.append = function (str) {
    this._strings.push(str);
}
stringBuffer.prototype.toString = function () {
    return this._strings.join("");
}
stringBuffer.prototype.clear = function () {
    this._strings = [];
}