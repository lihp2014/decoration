<template>
    <div>
        <top-bar text='关于我们' center='false'></top-bar>
        <div>
            <div class='pic'>
                <img :src="data.backgroundImage">
            </div>
            <div>
                <h3 class="title">{{data.title}}</h3>
                <p class="article">{{data.content}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import topBar from '../components/Topbar'
import { Flexbox, FlexboxItem } from 'vux'
import { linkus } from '../service/home'

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
    created() {
        linkus().then(res => {
            console.log(111, res);
            if (res.data.code == 0) {
                this.data = res.data.data.linkus.list[0];
            }
        })
    },
}
</script>
<style lang="less" scoped>
    .pic img {
        width: 750px;
        height: 240px;
    }
    .article {
        padding: 20px;
        text-align: left;
        text-indent: 30px;
    }
</style>


