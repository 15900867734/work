function Header(container){
    this.container = container;
    this.init();
}

Header.Template = `<div class="top-banner">
            <a href="##" class="img-banner">
                <img src="../images/top-banner.png" alt="">
            </a>
            <a href="##" class="close-banner" id="closeBanner"></a>
        </div>
        <div class="header w1224 clearfix" id="topHeader">
            <div class="top-header clearfix">
                <div class="fl handle">
                    <div class="top-header-site fl">
                        <i class="site-logo"></i><span>深圳</span>
                    </div>
                    <div class="top-header-handle fr">
                        <a href="login.html" class="login">登录</a>
                        <a href="register.html" class="register">注册</a>
                    </div>
                </div>
                <ul class="fr clearfix">
                    <li><a href="##">旧系统入口</a></li>
                    <li class="app-hover">
                        <a href="##">
                            <i class="phone-icon"></i>
                            手机APP
                            <div class="app-hover-img">
                                <img src="../images/app.png" alt="" width="140">
                            </div>
                        </a>
                    </li>
                    <li><a href="##">我的壹办公</a></li>
                    <li class="nav-hover">
                        <div class="nav-hover-title"><i class="email-icon"></i>
                            我的消息<i class="more-icon"></i>
                        </div>

                        <ul>
                            <li><a href="##">系统消息</a></li>
                            <li><a href="##">咨询回复</a></li>
                            <li><a href="##">反馈回复</a></li>
                            <li><a href="##">售后消息</a></li>
                        </ul>
                    </li>
                    <li class="nav-hover">
                        <div class="nav-hover-title">
                            我的订单<i class="more-icon"></i>
                        </div>

                        <ul>
                            <li><a href="##">待付款</a></li>
                            <li><a href="##">待发货</a></li>
                            <li><a href="##">待收货</a></li>
                            <li><a href="##">待评价</a></li>
                        </ul>
                    </li>
                    <li class="nav-hover">
                        <div class="nav-hover-title">
                            客户服务<i class="more-icon"></i>
                        </div>

                        <ul>
                            <li><a href="##">在线客服</a></li>
                            <li><a href="##">我要反馈</a></li>
                            <li><a href="##">帮助中心</a></li>
                            <li><a href="##">企业400-0025-099</a></li>
                            <li><a href="##">政府400-1589-996</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="middle-header clearfix">
                <a href="##" class="fl"><img src="../images/logo.png" alt=""></a>
                <div class="search fl">
                    <div class="searching">
                        <input type="text" placeholder="请输入搜索关键字">
                        <button>搜索</button>
                    </div>
                    <div class="hot-items">
                        <a href="##">粽子</a>
                        <a href="##">复印机</a>
                        <a href="##">打印机</a>
                        <a href="##">格力</a>
                        <a href="##">美的</a>
                        <a href="##">海尔</a>
                    </div>
                </div>
                <div class="cart fr">
                    <a href="##">
                        <i class="cart-icon"></i>
                        <span>我的购物车</span>
                        <em class="shop-num">0</em>
                    </a>
                </div>
            </div>
            <div class="nav-header clearfix">
                <div class="category fl">
                    <div class="classify">
                        <a href="##"><i></i>全部商品分类</a>
                    </div>
                    <ul class="items">
                        <li class="item">
                            <div class="item-left">
                                <a href="##">
                                    <img src="../images/dayinji.png"/>办公设备
                                </a>
                            </div>
                            <!--<div class="item-right">-->
                            <!--<i class="icon1"></i>办公设备-->
                            <!--</div>-->
                        </li>
                        <li class="item">
                            <div class="item-left">
                                <a href="##">
                                    <img src="../images/dayinji.png"/>办公电脑
                                </a>
                            </div>
                        </li>
                        <li class="item">
                            <div class="item-left">
                                <a href="##">
                                    <img src="../images/dayinji.png"/>办公文具
                                </a>
                            </div>
                        </li>
                        <li class="item">
                            <div class="item-left">
                                <a href="##">
                                    <img src="../images/dayinji.png"/>办公用品
                                </a>
                            </div>
                        </li>
                        <li class="item">
                            <div class="item-left">
                                <a href="##">
                                    <img src="../images/dayinji.png"/>电脑/数码
                                </a>
                            </div>
                        </li>
                        <li class="item">
                            <div class="item-left">
                                <a href="##">
                                    <img src="../images/dayinji.png"/>办公用纸
                                </a>
                            </div>
                        </li>
                        <li class="item">
                            <div class="item-left">
                                <a href="##">
                                    <img src="../images/dayinji.png"/>办公耗材
                                </a>
                            </div>
                        </li>
                        <li class="item">
                            <div class="item-left">
                                <a href="##">
                                    <img src="../images/dayinji.png"/>劳保用品
                                </a>
                            </div>
                        </li>
                        <li class="item">
                            <div class="item-left">
                                <a href="##">
                                    <img src="../images/dayinji.png"/>茶水间
                                </a>
                            </div>
                        </li>
                        <li class="item">
                            <div class="item-left">
                                <a href="##">
                                    <img src="../images/dayinji.png"/>办公家具
                                </a>
                            </div>
                        </li>
                        <li class="item">
                            <div class="item-left">
                                <a href="##">
                                    <img src="../images/dayinji.png"/>商务礼品
                                </a>
                            </div>
                        </li>
                        <li class="item">
                            <div class="item-left">
                                <a href="##">
                                    <img src="../images/dayinji.png"/>商务服务
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <ul class="nav fl">
                    <li><a href="" class="active">首页</a></li>
                    <li><a href="">品牌分类</a></li>
                    <li><a href="">促销活动</a></li>
                    <li><a href="">新渠道</a></li>
                </ul>
            </div>
        </div>`;

$.extend(Header.prototype,{
    init:function(){
        this.createDom();
    },
    createDom:function(){
        //把字符串转换为一个jquery对象
        this.ele = $("<div></div>").append(Header.Template);
        this.container.append(this.ele);
    }
})