<template>
    <div>
        <top-bar text='vip推广' left='true'></top-bar>
        <div class='banner'></div>
        <tab>
            <tab-item selected @on-item-click="onItemClick">第一市场</tab-item>
            <tab-item @on-item-click="onItemClick">第二市场</tab-item>
        </tab>
        <div v-if="index == 0">111 Container</div>
        <div v-if="index == 1">222 Container</div>
    </div>
</template>
<script>
import topBar from '../components/Topbar'
import { Flexbox, FlexboxItem, Tab, TabItem } from 'vux'

export default {
    components: {
        topBar,
        Flexbox,
        FlexboxItem,
        Tab, 
        TabItem,
    },
    data() {
        return {
            index: 0
        }
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
.banner {
    height: 300px;
    border: 1px solid;
}
</style>


