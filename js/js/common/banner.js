function Banner() {
    this.iNow = 0;
    this.timer = null;
    this.banner = $("#banner");
    this.oUl = $("#banner>ul");
    this.oLi = $("#banner>ul>li");
    this.aBtn = $("#btn>a");
    this.aDir = $("#direction>a");

    this.iW = this.oLi.eq(0).width();
    this.li = this.oLi.eq(0).clone(true);
    this.li.css("background","rgb(240, 31, 73)");
    this.oUl.append(this.li);
    this.len = this.oUl.children().length;
    this.oUl.css("width", this.iW * this.len);
    this.init();

}
$.extend(Banner.prototype,{
    init: function () {
        this.autoPlay();
        this.hoverIn();
        this.hoverOut();
        this.cDirLeft();
        this.cDirRight();
        this.cBtn();
    },
    cBtn: function () {
        this.aBtn.each($.proxy(this.handleBtn, this));
    },
    handleBtn: function (i) {
        this.aBtn.eq(i).on("click", i, $.proxy(this.handleBtnClick, this))
    },
    handleBtnClick: function (event) {
        this.index = event.data;
        this.aBtn.eq(this.index).addClass('active').siblings().removeClass('active');
        this.oUl.css("left", -this.iW * this.index);
        this.iNow = this.index;
    },
    cDirLeft: function () {
        this.aDir.eq(0).on("click", $.proxy(this.handleLeft, this));
    },
    cDirRight:function () {
        this.aDir.eq(1).on("click", $.proxy(this.handleRight, this))
    },
    handleLeft: function () {
        if (this.iNow == 0) {
            this.iNow = this.oUl.children().length - 2;
            this.oUl.css("left", -(this.oUl.children().length - 1) * this.iW);
        } else {
            this.iNow--;
        }
        this.imgTo();
    },
    handleRight: function () {
        if (this.iNow == this.oUl.children().length - 1) {
            this.iNow = 1;
            this.oUl.css('left', 0)
        } else {
            this.iNow++;
        }
        this.imgTo();
    },
    hoverIn: function () {
        this.banner.on("mouseover", $.proxy(this.handleMouseOver, this));
    },
    hoverOut:function () {
        this.banner.on("mouseout", $.proxy(this.handleMouseOut, this))
    },
    handleMouseOver: function () {
        clearInterval(this.timer);
    },
    handleMouseOut: function () {
        this.autoPlay();
    },
    autoPlay: function () {
        this.timer = setInterval($.proxy(this.handleSetInterval, this), 3000);
    },
    handleSetInterval: function () {
        if (this.iNow == this.len - 1) {
            this.iNow = 1;
            this.oUl.css('left', 0)
        } else {
            this.iNow++;
        }
        this.imgTo();
    },
    imgTo: function () {
        this.lenght = this.len - 2;
        this.oUl.stop(true).animate({left: -this.iNow * this.iW});
        this.aBtn.eq(this.iNow > this.lenght ? 0 : this.iNow).addClass('active').siblings().removeClass('active');
    }
});
new Banner();