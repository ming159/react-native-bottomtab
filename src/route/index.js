import Home from "../pages/home";
import Card from "../pages/card";
import Order from "../pages/order";
import Mine from "../pages/mine";
import HomeDetail from "../pages/home/home-detail";
import HomeList from "../pages/home/home-list";
import CardDetail from "../pages/card/card-detail";
import CardList from "../pages/card/card-list";
import OrderDetail from "../pages/order/order-detail";
import ProfileCenter from "../pages/mine/profile";
import MyInformation from "../pages/mine/my-info";

const routes = {
    bottomTabs: [
        {
            path: 'Home',
            component: Home,
            name: '主页',
            icon: '',
            children: []
        },{
            path: 'Card',
            component: Card,
            name: '购物车',
            icon: '',
            children: []
        },{
            path: 'Order',
            component: Order,
            name: '订单',
            icon: '',
            children: []
        },{
            path: 'Mine',
            component: Mine,
            name: '我的',
            icon: '',
            children: []
        },
    ],
    pageRoutes: [
        {
            path: 'HomeDetail',
            component: HomeDetail,
            name: '主页详情',
            icon: '',
            children: []
        },{
            path: 'HomeList',
            component: HomeList,
            name: '列表',
            icon: '',
            children: []
        },{
            path: 'CardDetail',
            component: CardDetail,
            name: '购物详情',
            icon: '',
            children: []
        },{
            path: 'CardList',
            component: CardList,
            name: '购物清单',
            icon: '',
            children: []
        },{
            path: 'OrderDetail',
            component: OrderDetail,
            name: '订单详情',
            icon: '',
            children: []
        },{
            path: 'ProfileCenter',
            component: ProfileCenter,
            name: '个人中心',
            icon: '',
            children: []
        },{
            path: 'MyInformation',
            component: MyInformation,
            name: '修改信息',
            icon: '',
            children: []
        },
    ]
}

export default routes