<template>
    <div>
        <top-bar text='提现记录' center='true'></top-bar>
        <div v-for="(item, index) in list" :key="index">
            <div class='moneytitle' v-if="item.point_month">
                <span>{{item.point_month}}月</span>
            </div>
            <ul>
                <li class='list'>
                    <flexbox align='flex-between' justify='center'>
                        <flexbox-item>
                            <div class='green'>{{item.withdrawal_address}}</div>
                            <div class='date'>{{item.created_at}}</div>
                        </flexbox-item>
                        <flexbox-item style='text-align:right'>
                            <span class='green'>{{item.money}}</span>
                        </flexbox-item>
                    </flexbox>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import topBar from '../components/Topbar'
import { Flexbox, FlexboxItem } from 'vux'
import { moneyDetail, getPersonInfo } from '../service/home'

export default {
    components: {
        topBar,
        Flexbox,
        FlexboxItem,
    },
    data() {
        return {
            list: [
                {
                    created_at: "2018-10-12 10:23:47",
                    money: 100,
                    withdrawal_address: "微信",
                    month: '10月',
                },
                {
                    created_at: "2018-10-12 16:40:01",
                    money: 100,
                    withdrawal_address: "微信",
                    month: '10月',
                },
                {
                    created_at: "2018-9-12 16:40:01",
                    money: 100,
                    withdrawal_address: "微信",
                    month: '9月',
                },
            ],
            userId: null,
            month: 10,
        }
    },
    created: function () {
        getPersonInfo().then(res => {
            if (res.data.code == 0) {
                this.userId = res.data.data.personinfo.list[0].user_id      
                 moneyDetail(this.userId).then(r => {
                    console.log(r)
                    if (r.data.code == 0) {
                        this.list = r.data.data.pointfor.list
                        for (let i = 0; i < this.list.length; i++) {
                            this.month = this.list[0].point_month
                            if (this.month == this.list[i].point_month) {
                                if (i != 0) {
                                    delete (this.list[i]).point_month;  
                                }
                            } else {
                                this.month = this.list[i].point_month
                            }
                            console.log(this.month, this.list)
                        }
                        console.log(this.list)
                    }
                })          
            }
        })
    }
}
</script>
<style lang="less" scoped>
.moneytitle {
    height: 72px;
    line-height: 72px;
    color: #707070;
    font-size: 28px;
    background: rgba(240,240,240,1);
    text-align: left;
    padding-left: 10px;
}
.list {
    padding: 20px 10px;
    border-bottom: 1px solid #E9E9E9;
    .green {
        color: #26CC8C;
        font-size: 28px;
    }
    .date {
        color: #bbb;
        font-size: 24px;
    }
}
</style>


