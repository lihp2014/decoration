<template>
    <div>
        <top-bar text='贷款申请' left='true'></top-bar>
        <div class='box'>
            <span class='label'>姓&nbsp;&nbsp;名</span>
            <input class='inputbox' type="text" placeholder="请输入您的真实姓名" v-model="name" />
        </div>
        <div class='box'>
            <span class='label'>联系方式</span>
            <input class='inputbox' type="number" placeholder="请输入您的联系方式" v-model="phone" />
        </div>
        <div class='box'>
            <span class='label'>贷款金额</span>
            <input class='inputbox' type="text" placeholder="请输入您的贷款金额" v-model="money" />
        </div>
        <div class='box'>
            <span class='label'>微信号码</span>
            <input class='inputbox' type="text" placeholder="请输入您的微信号码" v-model="weixin" />
        </div>
        <div class='havehouse'>名下是否有房</div>
        <div>
            <div v-if="haveHouse == 0">
                <x-button mini class='btnstyle left' type='primary'>否</x-button>
                <x-button mini class='btnstyle' @click.native='changeState(1)'>是</x-button>
            </div>
            <div v-if="haveHouse == 1">
                <x-button mini class='btnstyle left' @click.native='changeState(0)'>否</x-button>
                <x-button mini class='btnstyle' type='primary'>是</x-button>
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
    .box {
        text-align: center;
        width: 100%;
    }
    .label {
            position: absolute;
            left: 18px;
            z-index: 22;
            width: 168px;
            height: 90px;
            background-color: #F2F2F2;
            border-radius: 20px 0 0 20px;
            line-height: 90px;
            border: 1px solid #CACACA;
            font-size: 26px;
            color: #373737;
        }
    .inputbox {
        position: relative;
        padding: 30px 0;
        border: 1px solid #CACACA;
        margin-bottom: 45px;
        border-radius: 20px;
        width: 90%;     
        outline: none;
        text-indent: 188px;
    }
    .btnstyle {
        padding: 5px 50px;
    }
    .left {
        margin-right: 150px;
    }
    .weui-label {
        background: #373737 !important;
    }
</style>


