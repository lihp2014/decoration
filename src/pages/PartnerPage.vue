<template>
    <div>
        <top-bar top='true' text='合伙人绑定'></top-bar>
        <div class='banner'>
            <img class='banner' src='../assets/partner.jpg'/>
        </div>
        <line-itme></line-itme>
        <ul>
            <li v-for="(item, index) in list" :key="index" class='partnerList'>
                <flexbox align='center' justify='flex-around'>
                    <img :src="item.avatar" class='pic'/>
                    <flexbox-item>
                        <div>
                            <div class='nickname'>{{item.nickname}}</div>
                            <div class='level'>{{item.level || '普通会员' }}</div>
                        </div>      
                    </flexbox-item>
                    <flexbox-item>
                        <div>
                            <div class='nickname'>邀请{{item.inviteCount || 0 }}人</div>
                            <div class='level'>邀请人: {{item.inviter}}</div>
                        </div>
                    </flexbox-item>
                </flexbox>
            </li>
        </ul>
        <x-button type='primary' class="btnPartner">第一市场: 9421人</x-button>
    </div>   
</template>
<script>
import topBar from '../components/Topbar'
import lineItme from '../components/Line'
import { Flexbox, FlexboxItem, XButton } from 'vux'
import { partnerBind } from '../service/home'

export default {
    name: 'PartnerPage',
    components: {
        topBar,
        lineItme,
        Flexbox,
        FlexboxItem,
        XButton,
    },
    data() {
        return {
            list: [
                {
                    key: 1,
                    img: 'xxx',
                    name: '昵称昵称',
                    level: '普通会员',
                    inviter: '昵称昵称昵称昵称',
                    num: 0,
                },
                {
                    key: 2,
                    img: 'xxx',
                    name: '昵称昵称',
                    level: '普通会员',
                    inviter: '昵称昵称昵称昵称',
                    num: 0,
                },
                {
                    key: 3,
                    img: 'xxx',
                    name: '昵称昵称',
                    level: '普通会员',
                    inviter: '昵称昵称昵称昵称',
                    num: 0,
                },
                {
                    key: 4,
                    img: 'xxx',
                    name: '昵称昵称',
                    level: '普通会员',
                    inviter: '昵称昵称昵称昵称',
                    num: 0,
                },
            ]
        }
    },
    created: function() {
        partnerBind().then(res => {
            console.log(res)
            if (res.data.code == 0) {
                this.list = res.data.data.partner.list
            }
        })
    }
}
</script>
<style scoped>
.banner {
    height: 300px;
    line-height: 300px;
    width: 100%;
    /* border: 1px solid; */
    font-size: 36px;
    text-align: center;
}
.pic {
    width: 82px;
    height: 82px;
}
.level {
    color: #ababab;
    font-size: 22px;
}
.nickname {
    color: #363636;
    font-size: 24px;
    /* text-align: right */
}
.partnerList {
    padding: 20px;
    border-bottom: 1px solid #DFDFDF;
}
.btnPartner {
    border-radius:99px;
    padding: 20px 0;
    position: absolute;
    bottom: 20px;
    border-radius:99px;
    font-size: 40px;
}
</style>


