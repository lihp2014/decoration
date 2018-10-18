<template>
  <div class="home">
    <swiper :list="list" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    <flexbox class="top-box">
      <flexbox>
        <flexbox-item>
          <div class="info-left" @click="gotoExample">
            <!-- <cell-box is-link link="/example"> -->
              <h3 class="title">合作案例</h3>
            <!-- </cell-box> -->
            <h4 class="sub-title">已有24562位商家选择我们</h4>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox orient="vertical">
        <flexbox-item>
          <div class="info-right" @click="gotoNews">
            <!-- <cell-box is-link link="/news"> -->
              <h3 class="title">新闻动态</h3>
            <!-- </cell-box> -->
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="info-right" @click="gotoAbout">
            <!-- <cell-box is-link link="/about"> -->
              <h3 class="title">关于我们</h3>
            <!-- </cell-box> -->
          </div>
        </flexbox-item>
      </flexbox>
    </flexbox>
    <flexbox class="example-box" orient="vertical">
      <flexbox :gutter="80">
        <flexbox-item :span="6">
          <h2 class="colum-title">装修案例</h2>
        </flexbox-item>
        <flexbox-item :span="3">
            <cell-box is-link link="/example">
              <a class="title-more">更多&gt;&gt;</a>
            </cell-box>
        </flexbox-item>
      </flexbox>
      <example-list :list="examples"></example-list>
    </flexbox>
    <flexbox class="news-box" orient="vertical">
      <flexbox :gutter="80">
        <flexbox-item :span="6">
          <h2 class="colum-title">新闻动态</h2>
        </flexbox-item>
        <flexbox-item :span="3">
            <cell-box is-link link="/news">
              <a class="title-more">更多&gt;&gt;</a>
            </cell-box>
        </flexbox-item>
      </flexbox>
      <news-list :list="news"></news-list>
    </flexbox>
    <flexbox class="map-box" orient="vertical">
      <flexbox :gutter="80">
        <flexbox-item :span="6">
          <h2 class="colum-title">在线地图</h2>
        </flexbox-item>
        <flexbox-item :span="3">
          <a class="title-more">到那里去</a>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          <div class="map-pic" @click="gotoMap"></div>
        </flexbox-item>
      </flexbox>
    </flexbox>
    <bottom-Bar  v-bind={index}></bottom-Bar>
  </div>
</template>

<script>
import { Swiper, Flexbox, FlexboxItem, CellBox } from 'vux'
import bottomBar from '../components/BottomBar'
import exampleList from '../components/ExampleList'
import newsList from '../components/NewsList'
import { TMap } from '../utils/TMap'
import { getBanner, getNews, getExamples } from '../service/home'

const baseList = [{
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
}, {
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
}, {
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg',
}]

export default {
  name: 'HomePage',
  components: {
    Swiper,
    Flexbox,
    FlexboxItem,
    CellBox,
    bottomBar,
    exampleList,
    newsList
  },
  data () {
    return {
      index: 0,
      list: [],
      news: [],
      examples: []
    }
  },
  methods: {
    async getBannerData () {
      const res = await getBanner();
      if (res.data.code === 0) {
        this.list = res.data.data.banner.list;
      }
    },
    async getNewsData () {
      const res = await getNews();
      if (res.data.code === 0) {
        this.news = res.data.data.news.list.slice(0,3);
      }
    },
    async getExampleData () {
      const res = await getExamples();
      if (res.data.code === 0) {
        this.examples = res.data.data.examples.list.slice(0,4);
      }
    },
    gotoExample() {
      location.href="#/example"
    },
    gotoNews() {
      location.href="#/news"
    },
    gotoAbout() {
      location.href="#/about"
    },
    gotoMap() {
      location.href="#/map"
    }
  },
  mounted() {
    this.getBannerData();
    this.getNewsData();
    this.getExampleData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    padding-bottom: 100px;
    background-color: #F0F0F0;
  }
  .top-box {
    width: 100%;
    background-color: #fff;
    /* padding: 40px 0 20px 20px; */
    margin-bottom: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .title {
    padding-left: 20px;
    font-size: 30px;
  }
  .sub-title {
    font-size: 20px;
    padding-left: 20px;
  }
  .info, .info-left, .info-right {
    color: #fff;
    background-color: #20b907;
    border-radius: 16px;
    width: 330px;
  }
  .info-left {
    /* margin-right: 20px; */
    height: 240px;
    margin: 0 auto;
  }
  .info-right {
    height: 110px;
    /* margin-right: 0; */
    margin: 0 auto;
  }
  .example-box, .news-box, .map-box {
    width: 95%;
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
  }
  .colum-title {
    font-size: 30px;
  }
  .title-more {
    font-size: 24px;
    color: #9A9A9A;
  }
  .map-pic {
    width: 100%;
    height: 300px;
    background: url(../assets/map.png) no-repeat;
    background-size: contain;
  }
</style>
