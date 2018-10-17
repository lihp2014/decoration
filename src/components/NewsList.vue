<template>
    <flexbox class="news-wrap"  orient="vertical">
        <flexbox class="news-item" v-for="(item, key) in list" :key="key" @click.native="gotoNews(item.id)">
            <flexbox-item :span="1/3">
                <img :src="item.backgroundImage"/>
            </flexbox-item>
            <flexbox-item>
                <div class="news-content">
                <span>{{item.title}}</span>
                <span class="news-sub-title">{{item.created_at}}</span>
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
    margin-bottom: 20px;
  }
  .news-item img {
    width: 240px;
    height: 200px;
    border-radius: 10px;
  }
  .news-sub-title {
    font-size: 20px;
    color: #ADADAD;
    margin-left: 30px;
  }
  .news-article {
    // font-size: 22px;
    // color: #808080;
    // overflow: hidden;
    // display: -webkit-box;
    // -webkit-line-clamp: 3;
    // -webkit-box-orient: vertical;
    position: relative;
    line-height: 36px;
    height: 108px;
    overflow: hidden;
  }
</style>

