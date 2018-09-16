<template>
    <div>
        <top-bar text='合作案例' center='false'></top-bar>
        <div>
            <example-list></example-list>
        </div>
    </div>
</template>
<script>

import topBar from '../components/Topbar'
import exampleList from '../components/ExampleList'
import { Flexbox, FlexboxItem } from 'vux'

export default {
    components: {
        topBar,
        exampleList,
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


