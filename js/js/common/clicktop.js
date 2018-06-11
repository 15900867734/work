function ClickTop() {
    this.closeBanner = $("#closeBanner");
    this.init();
}
$.extend(ClickTop.prototype,{
    init:function () {
        this.click();
    },
    click:function () {
        this.closeBanner.on("click",$.proxy(this.handleClick,this));
    },
    handleClick:function () {
        this.closeBanner.parent().stop(true).slideUp();
    }
});