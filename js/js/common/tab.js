function Tab(tabId,contentId) {
    this.tabList = $(tabId).children();
    this.contentList = $(contentId).children();
    this.init();
}
$.extend(Tab.prototype, {
    init: function () {
        this.tab();
    },
    tab: function () {
        //each以每一个匹配的元素作为上下文来执行一个函数。
        //$.each(function(i,val){}
        this.tabList.each($.proxy(this.handelTab, this))
    },
    handelTab: function (i) {
        this.tabList.eq(i).on("click",i,$.proxy(this.handleClick,this))
    },
    handleClick:function (event) {
        this.index = event.data;  //可接受上面传过来的值
        this.tabList.eq(this.index).addClass('active').siblings().removeClass('active');
        this.contentList.eq(this.index).css("display","block").siblings().css("display","none");
    }
});