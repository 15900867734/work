function Footer(container) {
    this.container = container;
    this.init();

}
Footer.Template = `<div class="footer">
            <ul class="w1224 footer-list clearfix">
                <li>
                    <dl>
                        <dt>关于我们</dt>
                        <dd>关于我们</dd>
                        <dd>会议室解决方案</dd>
                        <dd>商业生态战略</dd>
                        <dd>注册协议</dd>
                        <dd>联系我们</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>购物指南</dt>
                        <dd>咖啡机租赁</dd>
                        <dd>设备租赁</dd>
                        <dd>上门服务</dd>
                        <dd>常见问题</dd>
                        <dd>会员介绍</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>支付方式</dt>
                        <dd>分期付款</dd>
                        <dd>公司转账</dd>
                        <dd>在线支付</dd>
                        <dd>货到付款</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>配送方式</dt>
                        <dd>签收提醒</dd>
                        <dd>直达配送</dd>
                        <dd>第三方配送</dd>
                        <dd>上门自提</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>售后服务</dt>
                        <dd>发票问题</dd>
                        <dd>联系客服</dd>
                        <dd>退款说明</dd>
                        <dd>售后政策</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>积分商城</dt>
                        <dd>积分客户</dd>
                        <dd>获取积分</dd>
                        <dd>可兑商品</dd>
                        <dd>积分规则</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>使用帮助</dt>
                        <dd>app使用帮助手册</dd>
                    </dl>
                </li>

            </ul>
        </div>`;

$.extend(Footer.prototype,{
   init:function () {
       this.createDom();
   },
    createDom:function () {
        this.ele = $("<div></div>").append(Footer.Template);
        this.container.append(this.ele);
    }
});