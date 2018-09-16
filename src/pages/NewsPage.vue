<template>
    <div>
        <top-bar text='新闻动态' center='false'></top-bar>
        <div>
            <news-list></news-list>
        </div>
    </div>
</template>
<script>

import topBar from '../components/Topbar'
import newsList from '../components/NewsList'
import { Flexbox, FlexboxItem } from 'vux'

export default {
    components: {
        topBar,
        newsList,
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


