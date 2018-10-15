<template>
    <div >
        <top-bar text='贷款申请' left='true'></top-bar>
        <div class='result'>
            <icon type="success" is-msg class='icon'></icon>
            <p>提交成功</p>
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
  }
}
</script>
<style lang="less">
    .result {
        margin: 150px;
    }
    .icon {
        // position:absolute;
        // margin:auto;
        // top:0;
        // bottom:0;
        // left:0;
        // right:0;
    }
    .notice {
        color: #f00 !important;
        font-size: 14px;
    }
</style>


