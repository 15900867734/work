function PFooter() {
    this.ele = $("#footer");
    this.init();
}
$.extend(PFooter.prototype,{
   init:function () {
        this.footer = new Footer(this.ele);
   }
});
new PFooter();