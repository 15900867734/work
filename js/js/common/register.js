function Register(container) {
    this.container = container;
}

Register.Template = ``;

$.extend(Register.prototype,{
    init:function () {
        this.createDom();
    },
    createDom:function () {
        this.ele = $("<div></div>").append(Register.Template);
        this.container.append(this.ele);
    }
});