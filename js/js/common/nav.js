function Nav(container) {
    this.container = container;
}

Nav.Template = ``;

$.extend(Nav.prototype,{
   init:function () {
        this.createDom();
   },
    createDom:function () {
        this.ele = $("<div></div>").append(Nav.Template);
        this.container.append(this.ele);
    }
});