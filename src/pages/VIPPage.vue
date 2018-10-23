<template>
    <div class='box'>
        <top-bar text='vip推广' top='true'></top-bar>
        <div class='banner'>
            <img class='banner' src='../assets/vip.jpg'/>
        </div>
        <tab class='tabs' v-model="index">
            <tab-item selected @on-item-click="onItemClick(0)">第一市场</tab-item>
            <tab-item @on-item-click="onItemClick(1)">第二市场</tab-item>
        </tab>
        <swiper v-model="index" :show-dots="false" :aspect-ratio="800/800">
            <swiper-item>
                <div>
                    <ul>
                        <li v-for="(item, index) in one" :key="index" class='partnerList'>
                            <flexbox align='center' justify='flex-around'>
                                <img :src="$url + item.avatar" class='pic'/>
                                <flexbox-item>
                                    <div>
                                        <div class='nickname'>{{item.name}}</div>
                                        <div class='level'>{{item.user_level}}</div>
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
                </div>
            </swiper-item>
            <swiper-item>
                <div>
                    <ul>
                        <li v-for="(item, index) in two" :key="index" class='partnerList'>
                            <flexbox align='center' justify='flex-around'>
                                <img :src="$url + item.avatar" class='pic'/>
                                <flexbox-item>
                                    <div>
                                        <div class='nickname'>{{item.name}}</div>
                                        <div class='level'>{{item.user_level}}</div>
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
                </div>
            </swiper-item>
        </swiper>       
    </div>
</template>
<script>
import topBar from '../components/Topbar'
import { Flexbox, FlexboxItem, Tab, TabItem, Swiper, SwiperItem } from 'vux'
import { vipSpread, vipSecond } from '../service/home'

export default {
    components: {
        topBar,
        Flexbox,
        FlexboxItem,
        Tab, 
        TabItem,
        Swiper,
        SwiperItem,
    },
    data() {
        return {
            index: 0,
            one: [],
            two: [],
        }
    },
    created: function() {
        vipSpread().then(res => {
            if (res.data.code == 0) {
                this.one = res.data.data.vipuser.list
            }
        })
        vipSecond().then(res => {
            if (res.data.code == 0) {
                console.log(res)
                this.two = res.data.data.vipusermarket.list
            }
        })
    },
    methods: {
        onItemClick (index) {
            console.log('on item click:', index)
            this.index = index
        },
    }
}
</script>
<style lang="less" scoped>
.box {
    width: 100%;
    height: 100%;
     
}
.banner {
    height: 300px;
    width: 100%;
}
.tabs {
    margin-top: 20px;
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
    // height: 100px;
    // margin-bottom: 10px;
    border-bottom: 1px solid #DFDFDF;
}
.vux-slider > .vux-swiper {
    overflow: unset !important;
}
</style>


