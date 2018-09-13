<template>
    <div>
        <top-bar text='贷款申请' class='top'></top-bar>
        <x-input class='inputbox' title='姓名' v-model="name"></x-input>
        <x-input class='inputbox' title='联系方式' v-model="phone"></x-input>
        <x-input class='inputbox' title='贷款金额' v-model="money"></x-input>
        <x-input class='inputbox' title='微信号码' v-model="weixin"></x-input>
        <div class='havehouse'>名下是否有房</div>
        <div>
            <x-button mini>否</x-button>
            <x-button mini>是</x-button>
        </div>
        <x-button type='primary' class='submit'>提交</x-button>
    </div>  
</template>
<script>
import topBar from '../components/Topbar'
import { XInput, XButton } from 'vux'

export default {
    name: 'LoanPage',
    components: {
        topBar,
        XInput,
        XButton,
    },
    data() {
        return {
            name: '',
            phone: '',
            money: '',
            weixin: '',
        }
    }
}
</script>
<style scoped>
    .top {
        height: 40px;
    }
    .havehouse {
        text-align: center;
        color: #373737;
    }
    .submit {
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 30px;
        padding: 20px 0; 
    }
    .inputbox {
        padding: 20px 0;
        border: 1px solid #CACACA;
        margin-bottom: 45px;
        border-radius: 20px;
    }
    .weui-label {
        background: #373737 !important;
    }
</style>


