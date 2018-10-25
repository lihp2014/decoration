<template>
  <div class="home">
    <swiper :list="list" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    <flexbox class="top-box">
      <flexbox>
        <flexbox-item>
          <div class="info-left top-example" @click="gotoExample">
              <h3 class="title top-example-title">合作案例</h3>
            <h4 class="sub-title">已有24562位商家选择我们</h4>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox orient="vertical">
        <flexbox-item>
          <div class="info-right top-news" @click="gotoNews">
              <h3 class="title top-news-title">新闻动态</h3>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="info-right top-us" @click="gotoAbout">
              <h3 class="title top-us-title">关于我们</h3>
          </div>
        </flexbox-item>
      </flexbox>
    </flexbox>
    <flexbox class="example-box" orient="vertical">
      <flexbox class="header-column">
          <h2 class="colum-title">装修案例</h2>
          <a class="title-more" @click="gotoExample">更多&gt;</a>
      </flexbox>
      <example-list :list="examples"></example-list>
    </flexbox>
    <flexbox class="news-box" orient="vertical">
      <flexbox class="header-column">
          <h2 class="colum-title">新闻动态</h2>
          <a class="title-more" @click="gotoNews">更多&gt;</a>
      </flexbox>
      <news-list :list="news"></news-list>
    </flexbox>
    <flexbox class="map-box" orient="vertical">
      <flexbox class="header-column">
          <h2 class="colum-title">在线地图</h2>
          <a class="title-more">到那里去</a>
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
  created() {
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
    document.title = '装修'
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
    padding-top: 10px;
    font-size: 30px;
  }
  .sub-title {
    font-size: 20px;
    padding-left: 20px;
  }
  .top-news-title {
    background: url(../assets/icon/t-fade.png) 15px 15px no-repeat;
    background-size: 32px 32px;
    padding-left: 55px;
  }
  .top-us-title {
    background: url(../assets/icon/t-c.png) 15px 15px no-repeat;
    background-size: 32px 32px;
    padding-left: 55px;
  }
  .top-example-title{
    background: url(../assets/icon/t-exam.png) 15px 15px no-repeat;
    background-size: 32px 32px;
    padding-left: 55px;
  }
  .info, .info-left, .info-right {
    color: #fff;
    /* background-color: #20b907; */
    border-radius: 16px;
    width: 330px;
  }
  .info-left {
    height: 240px;
    margin: 0 auto;
  }
  .info-right {
    height: 110px;
    margin: 0 auto;
  }
  .top-example {
    background: url(../assets/example-bg.png) center center no-repeat;
    background-size: 340px 240px;
  }
  .top-news {
    background: url(../assets/news-bg.png) center center no-repeat;
    background-size: 340px 110px;
  }
  .top-us {
    background: url(../assets/about-bg.png) center center no-repeat;
    background-size: 340px 110px;
    margin-top: 10px;
  }
  .example-box, .news-box, .map-box {
    background-color: #fff;
    margin-bottom: 20px;
    padding-bottom: 15px;
    box-sizing: content-box;
  }
  .header-column {
    position: relative;
  }
  .colum-title {
    font-size: 30px;
    margin-left: 20px;
    margin-top: 20px;
  }
  .title-more {
    font-size: 24px;
    color: #9A9A9A;
    /* padding-left: 60px; */
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .map-pic {
    width: 100%;
    height: 300px;
    background: url(../assets/map.png) no-repeat;
    background-size: cover;
    margin-top: 20px;
  }
</style>
