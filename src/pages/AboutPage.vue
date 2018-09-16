<template>
    <div>
        <top-bar text='关于我们' center='false'></top-bar>
        <div>
            <div class='pic'>
                <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg">
            </div>
            <div>
                <h3 class="title">公司介绍</h3>
                <p>赵刚说，自己与于海明相识20多年</p>
            </div>
        </div>
    </div>
</template>
<script>
import topBar from '../components/Topbar'
import { Flexbox, FlexboxItem } from 'vux'

export default {
    components: {
        topBar,
        Flexbox,
        FlexboxItem,
    },
    data() {
        return {
        }
    }
}
</script>
<style lang="less" scoped>
    .pic img {
        width: 750px;
        height: 240px;
    }
</style>


