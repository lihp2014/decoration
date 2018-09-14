<template>
    <div>
        <top-bar text='积分兑换' center='true'></top-bar>
        <div class='intBox'>
            <h1 class='integral'>23147.56</h1>
            <p class='canInt'>今日可提现积分</p>
        </div>     
        <div class='notices'>每次兑换金额不得低于100元, 余额低于100时不可提现</div>
        <x-input class='inputbox' placeholder='输入提现金额' title='积分提现' v-model="integral"></x-input>
        <box gap="50px 10px">
            <x-button type="primary" class='getmoney'>提现</x-button>
        </box>
    </div>
</template>
<script>
import topBar from '../components/Topbar'
import { XInput, XButton, Box } from 'vux'

export default {
    components: {
        topBar,
        XInput,
        XButton,
        Box,
    },
    data() {
        return {
            integral: '',
        }
    }
}
</script>
<style lang="less" scoped>
.intBox {
    margin: 70px 0;
    .integral {
        font-size: 88px;
        color: #5c5c5c;
    }
    .canInt {
        color: #5c5c5c;
        font-size: 24px;
    }
}
.notices {
    height: 80px;
    line-height: 80px;
    background:rgb(244,244,244);
    font-size: 24px;
    color: #9D9D9D;
}
.inputbox {
    padding: 20px 0;
    border-bottom: 1px solid #CACACA;
    margin-bottom: 45px;
}
.getmoney {
    padding: 25px 0;
}
</style>


