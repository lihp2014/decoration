<template>
    <div >
        <top-bar :text=title left='true'></top-bar>
        <div v-if="code == -1" class='result'>
            <!-- <icon type="cancel" is-msg class='icon'></icon> -->
            <p>
                <img src="../assets/fail.png" class="res" />
            </p>
            <p class="msg">提交失败</p>
            <p class='notice'>失败原因:网络错误或其他原因</p>
        </div>
        <div v-else class='result'>
            <!-- <icon type="success" is-msg class='icon'></icon> -->
            <p>
                <img src="../assets/success.png" class="res" />
            </p>
            <p class="msg">{{status ? status : '提交成功'}}</p>
            <p class='notice'>预计1至3个月回复</p>
        </div>        
    </div>
</template>
<script>
import { Box, Icon } from 'vux'
import topBar from '../components/Topbar'

export default {
   components: {
       Icon,
        topBar,
    },
    data() {
        return {
            title: '',
            code: 0,
            status: ''
        }
    },
    mounted () {
        let title = this.$route.query.title;
        let code = this.$route.query.code;
        let status = this.$route.query.status;
        this.title = title;
        this.code = code;
        this.status = status;
    }
}
</script>
<style lang="less">
    .result {
        margin: 150px;
    }
    .msg {
        margin-top: 40px;
    }
    .res {
        width: 146px;
        height: 146px;
    }
    .notice {
        color: #f00 !important;
        font-size: 28px;
    }
</style>


