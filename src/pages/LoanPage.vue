<template>
    <div>
        <top-bar text='贷款申请' left='true'></top-bar>
        <x-input class='inputbox' title='姓名' v-model="name"></x-input>
        <x-input class='inputbox' title='联系方式' v-model="phone"></x-input>
        <x-input class='inputbox' title='贷款金额' v-model="money"></x-input>
        <x-input class='inputbox' title='微信号码' v-model="weixin"></x-input>
        <div class='havehouse'>名下是否有房</div>
        <div>
            <div v-if="haveHouse == 0">
                <x-button mini  type='primary'>否</x-button>
                <x-button mini @click.native='changeState(1)'>是</x-button>
            </div>
            <div v-if="haveHouse == 1">
                <x-button mini @click.native='changeState(0)'>否</x-button>
                <x-button mini type='primary'>是</x-button>
            </div>
        </div>
        <box gap="50px 10px">
            <x-button type='primary' class='submit' @click.native='submit'>提交</x-button>
        </box>     
    </div>  
</template>
<script>
import topBar from '../components/Topbar'
import { XInput, XButton, Box } from 'vux'
import { loanApply } from '../service/home'

export default {
    name: 'LoanPage',
    components: {
        topBar,
        XInput,
        XButton,
        Box,
    },
    data() {
        return {
            name: '',
            phone: '',
            money: '',
            weixin: '',
            haveHouse: 0,
        }
    },
    methods: {
        changeState(num) {
            this.haveHouse = num
        },
        submit () {
            console.log(this.name, this.phone)
            let params = new FormData();
            params.append('name', this.name);
            params.append('phone', this.phone);
            params.append('money', this.money);
            params.append('weixin', this.weixin);
            params.append('ishavehouse', this.haveHouse);
            loanApply(params).then(res => {
                console.log(res)
                if (res.data.code == 0) {
                    setTimeout(() => {
                        this.$router.push({path: '/result'});
                    });
                }
            })
        }
    }
}
</script>
<style scoped>
    .havehouse {
        text-align: center;
        color: #373737;
    }
    .submit {
        margin-top: 60px;
        padding: 20px 0; 
        border-radius: 20px;
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


