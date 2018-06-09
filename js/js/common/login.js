function Login(container) {
    this.container = container;
}

Login.Template = ``;

$.extend(Login.prototype,{
    init:function () {
        this.createDom();
    },
    createDom:function () {
        this.ele = $("<div></div>").append(Login.Template);
        this.container.append(this.ele);
    }
});