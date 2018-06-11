function Page(){
    this.ele = $("#header");
    this.init();
}

$.extend(Page.prototype,{
    init:function(){
        //创建了三个构造函数
        this.header = new Header(this.ele);
        this.banner = new Banner(this.ele);
        this.tab = new Tab("#bannerNews","#bannerTabBody",this.ele);
        this.clicktop = new ClickTop(this.ele);

        // this.login = new Login(this.ele);
        // this.register = new Register(this.ele);
    }
});

new Page();