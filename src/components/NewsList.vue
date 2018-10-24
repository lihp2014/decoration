<template>
    <flexbox class="news-wrap"  orient="vertical">
        <flexbox class="news-item" v-for="(item, key) in list" :key="key" @click.native="gotoNews(item.id)">
            <flexbox-item :span="1/3">
                <img :src="item.backgroundImage"/>
            </flexbox-item>
            <flexbox-item>
                <div class="news-content">
                    <span class="news-title">{{item.title}}</span>
                    <span class="news-sub-title">{{item.created_at.split(" ")[0]}}</span>
                    <p class="news-article">{{item.article}}</p>
                </div>
            </flexbox-item>
        </flexbox>
    </flexbox>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'

export default {
    components: {
        Flexbox,
        FlexboxItem,
    },
    props: ['list'],
    data() {
        return {
            // id: 0
        }
    },
    methods: {
        gotoNews(id) {
            location.href="#/newsDetail/"+id;
        }
    }
}
</script>
<style lang="less" scoped>
  .news-wrap {
    margin-top: 20px;
  }
  .news-item {
    font-size: 26px;
    width: 95%;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .news-item img {
    width: 240px;
    height: 200px;
    border-radius: 10px;
  }
  .news-title {
    font-size: 30px;
  }
  .news-sub-title {
    font-size: 22px;
    color: #ADADAD;
    margin-left: 25px;
  }
  .news-article {
    font-size: 26px;
    margin-top: 25px;
    color: #808080;
    position: relative;
    line-height: 36px;
    height: 108px;
    overflow: hidden;
  }
</style>

