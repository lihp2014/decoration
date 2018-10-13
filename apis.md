## 接口
### 首页（由上到下）
#### banner图
- banner 
```
[
    {
        img: String,  //图片url
    }, {
        img: String,
    }, {
        img: String,
    }
]
```

#### 合作案例等模块
- 合作案例标题，已有```${count}```位商家选择我们

#### 装修案例
- examples
```
[
    {
        id: Number, //案例id
        backgroundImage: String,  //背景图片url
        description: String,  //标题
        view: Number,  //浏览数
        area: Number,   //面积
    },
    {
        id: Number, //案例id
        backgroundImage: String,  //背景图片url
        description: String,  //标题
        view: Number,  //浏览数
        area: Number   //面积
    }
]
```

- 具体案例
传入： id
返回：
```
{
    view: Number,  //浏览数量
    imgList: [
        url: String
    ],
    imgCount: Number  // 图片数量
}
```

#### 新闻动态
- news
```
[
    {
        id: Number,  //新闻id
        backgroundImage: String,  //背景图片url
        title: String,  //标题
        time: 2018-09-14,  //时间
        article: String   //文章内容
    },
    {
        id: Number,  //新闻id
        backgroundImage: String,  //背景图片url
        description: String,  //标题
        time: 2018-09-14,  //时间
        article: String   //文章内容
    }
]
```
- 具体新闻
传入：id
返回：
```
{
    title: String,  // 新闻标题
    article: String,   // 新闻内容
}
```

### 留言板
- 地址列表
    省、市、县/区三级
    addressList: 
    ```
    [
        {
            name: '湖南',
            value: '湖南',
            parent: 0   // 省级的parent为0
        }, {
            name: '湖北',
            value: '湖北',
            parent: 0
        }, {
            name: '长沙',
            value: '长沙',
            parent: '湖南'  // 市级的parent为省
        }, {
            name: '常德',
            value: '常德',
            parent: '湖南'
        }, {
            name: '武汉',
            value: '武汉',
            parent: '湖北'
        }, {
            name: '黄冈',
            value: '黄冈',
            parent: '湖北'
        }, {
            name: '芙蓉区',
            value: '芙蓉区',
            parent: '长沙'  // 县或区的parent为市
        }, {
            name: '天心区',
            value: '天心区',
            parent: '长沙'
        }, {
            name: '洪山区',
            value: '洪山区',
            parent: '武汉'
        }
    ]
    ```
- 房型列表
    roomList:
    ```
    [
        ['1室', '2室', '3室'],
        ['1厅', '2厅', '3厅'],
        ['1厨', '0厨'],
        ['1卫', '2卫', '3卫'],
        ['1阳台', '2阳台', '3阳台']
    ]
    ```
- POST提交房型数据
```
    {
        address: ['湖北', '武汉', '洪山'],
        room: ['1室', '1厅', '1厨', '1卫', '1阳台'],
        area: Number,
        phone: Number
    }
```
### 金融板块
- 贷款申请，POST提交表单
```
    {
        name: String,
        phone: Number,
        money: Number,
        weixin: String,
        isHaveHouse: Boolean
    }
```


### 个人中心
- 个人中心
```
[
    personInfo: {
        nickname: String, //昵称
        id: String,
        avatar: String, // 头像
        totalPoints: Number,  // 总积分
        presentPoints: Number, // 现有积分
        partner: Number  // 合伙人等级
    }
]
```

- 合伙人市场
```
{
    partners:  [
        {
            avatar: String, //头像
            nickname: String, // 昵称
            inviteCount: Number, // 邀请人数目
            inviter: String  // 邀请人昵称
        },
        {
            avatar: String, //头像
            nickname: String, // 昵称
            inviteCount: Number, // 邀请人数目
            inviter: String  // 邀请人昵称
        }
    ],
    marketCount: Number
}
    
```

- 积分兑换
    - 可提现积分
    ```
        {
            points: Number
        }
    ```
    - 提现
    ```
        {
            money: Number
        }
    ```
    - 明细

- 二维码
    ```
    {
        qrcode: String  // 二维码地址
    }
    ```

- vip推广
与合伙人数据结构类似


## 后端提供


//轮播图接口
地址:http://fitment.guoxiaoge.cn/api/banner
传值方式:get;

//贷款申请提交接口
地址:http://fitment.guoxiaoge.cn/api/loanapply
传值方式:post;
字段
'name' => $data['name'],                 姓名
'phone'=>$data['phone'],                联系方式
'money' => $data['money'],              贷款金额
'weixin' => $data['weixin'],            微信
'ishavehouse' => $data['ishavehouse'],  是否有房

//留言板提交接口
地址:http://fitment.guoxiaoge.cn/api/messageuser
传值方式:post;
字段:
'address' => $data['address'],   地址
'room'=>$data['room'],           房型
'area' => $data['area'],         面积
'phone' => $data['phone'],     联系方式

//新闻接口
地址:http://fitment.guoxiaoge.cn/api/news
传值方式:get;

//指定新闻接口
地址:http://fitment.guoxiaoge.cn/api/news/{id}
传值方式:get;

//装修案例接口
地址:http://fitment.guoxiaoge.cn/api/examples
传值方式:get;

//詳細案例接口
地址:http://fitment.guoxiaoge.cn/api/examples/{id}
传值方式:get;

//个人中心接口
地址:http://fitment.guoxiaoge.cn/api/personinfo
传值方式:get;

//合伙人綁定接口
地址:http://fitment.guoxiaoge.cn/api/partner
传值方式:get;

//vip推广接口
地址:http://fitment.guoxiaoge.cn/api/vipuser
传值方式:get;

//二维码接口
地址:http://fitment.guoxiaoge.cn/api/qrcode/{url}
传值方式:get;

//提现记录接口
地址:http://fitment.guoxiaoge.cn/api/pointfor
传值方式:get;

//提现申请提交接口
地址:http://fitment.guoxiaoge.cn/api/addpointfor
传值方式:post;
字段:
'points' => $data['points'],         当前可提现积分
'money'=>$data['money'],              提现金额
'user_id' => $data['user_id'],        提现用户id
'withdrawal_address' => $data['withdrawal_address'],   提现的地址 至银行卡还是微信