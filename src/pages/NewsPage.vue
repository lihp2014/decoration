<template>
    <div>
        <top-bar text='新闻动态' center='false'></top-bar>
        <div>
            <news-list :list="news"></news-list>
        </div>
    </div>
</template>
<script>

import topBar from '../components/Topbar'
import newsList from '../components/NewsList'
import { Flexbox, FlexboxItem } from 'vux'
import { getNews } from '../service/home'

export default {
    components: {
        topBar,
        newsList,
        Flexbox,
        FlexboxItem,
    },
    data() {
        return {
            news: []
        }
    },
    methods: {
        async getNewsData () {
            const res = await getNews();
            if (res.data.code === 0) {
                this.news = res.data.data.news.list;
            }
        },
    },
    mounted() {
        this.getNewsData();
    }
}
</script>
<style lang="less" scoped>
    .pic img {
        width: 750px;
        height: 240px;
    }
</style>


