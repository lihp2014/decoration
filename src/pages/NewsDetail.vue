<template>
    <div>
        <top-bar text='新闻动态' center='false'></top-bar>
        <div class="content">
            <h3 class="mb">{{data.title}}</h3>
            <p v-html="data.article"></p>
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
.content {
    padding-left: 26px;
    padding-right: 26px;
}
.mb {
    margin-bottom: 20px;
}
</style>

