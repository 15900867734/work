function Page(){
    this.ele = $("#header");
    this.init();
}

$.extend(Page.prototype,{
    init:function(){
        //创建了三个构造函数
        this.header = new Nav(this.ele);
        this.login = new Login(this.ele);
        this.register = new Register(this.ele);
    }
})

new Page();
