function Header() {
    this.ele = $("#header");
    this.init();
}

$.extend(Header.prototype,{
    init:function () {
        this.nav = new Nav(this.ele);
        this.login = new Login(this.ele);
        this.register = new Register(this.ele);
    }
});