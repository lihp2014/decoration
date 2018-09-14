<template>
    <div>
        <top-bar left='true' text='合伙人绑定'></top-bar>
        <div class='banner'>123</div>
        <line-itme></line-itme>
        <ul>
            <li v-for="(item, index) in list" :key="index" class='partnerList'>
                <flexbox align='center' justify='flex-around'>
                    <img src='../assets/logo.png' class='pic'/>
                    <flexbox-item>
                        <div>
                            <div class='nickname'>{{item.name}}</div>
                            <div class='level'>{{item.level}}</div>
                        </div>      
                    </flexbox-item>
                    <flexbox-item>
                        <div>
                            <div class='nickname'>邀请{{item.num}}人</div>
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
    }
}
</script>
<style scoped>
.banner {
    height: 300px;
    border: 1px solid;
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
}
</style>


