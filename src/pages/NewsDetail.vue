<template>
    <div>
        <top-bar text='新闻动态' center='false'></top-bar>
        <div>
            <h3>{{data.title}}</h3>
            <p>{{data.article}}</p>
        </div>
    </div>
</template>

<script>

import topBar from '../components/Topbar'
import { Flexbox, FlexboxItem } from 'vux'
import { getNewsDetail } from '../service/home'

export default {
    components: {
        topBar,
        Flexbox,
        FlexboxItem,
    },
    data() {
        return {
            data: {}
        }
    },
    mounted () {
        let id = this.$route.params.id;
        getNewsDetail(id).then(res => {
            if (res.data.code === 0) {
                this.data = res.data.data.list[0];
            }
        });
    }
}
</script>
<style lang="less" scoped>
</style>

