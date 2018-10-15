<template>
    <div>
        <top-bar text='提现记录' center='true'></top-bar>
        <div>
            <div class='moneytitle'>10月</div>
            <ul>
                <li v-for="(item, index) in list" :key="index" class='list'>
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
import { moneyDetail } from '../service/home'

export default {
    components: {
        topBar,
        Flexbox,
        FlexboxItem,
    },
    data() {
        return {
            month: '10月',
            list: [
                {
                    created_at: "2018-10-12 10:23:47",
                    money: 100,
                    withdrawal_address: "微信"
                },
                {
                    created_at: "2018-10-12 16:40:01",
                    money: 100,
                    withdrawal_address: "微信"
                },
            ]
        }
    },
    created: function() {
        moneyDetail().then(res => {
            console.log(res)
            if (res.data.code == 0) {
                this.list = res.data.data.pointfor.list
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


