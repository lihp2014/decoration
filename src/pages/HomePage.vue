<template>
  <div class="home">
    <swiper :list="list" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    <flexbox class="top-box">
      <flexbox>
        <flexbox-item>
          <div class="info-left">
            <h3 class="title">合作案例</h3>
            <h4 class="sub-title">已有24562位商家选择我们</h4>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox orient="vertical">
        <flexbox-item>
          <div class="info-right">
            <h3 class="title">新闻动态</h3>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="info-right">
            <h3 class="title">关于我们</h3></div>
        </flexbox-item>
      </flexbox>
    </flexbox>
    <flexbox class="example-box" orient="vertical">
      <flexbox :gutter="100">
        <flexbox-item :span="6">
          <h2 class="colum-title">装修案例</h2>
        </flexbox-item>
        <flexbox-item :span="2">
          <a class="title-more">更多&gt;&gt;</a>
        </flexbox-item>
      </flexbox>
      <flexbox wrap="wrap" :gutter="0">
        <flexbox-item :span="1/2">
          <div class="example-item">
            <div class="inner-item">
              <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg"/>
              <p class="intro">现代简约风格三室两厅装修效果</p>
              <p>
                <span class="view">5000浏览</span>
                <span class="area">120㎡</span>
              </p>
            </div>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/2">
          <div class="example-item">
            <div class="inner-item">
              <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg"/>
              <p class="intro">现代简约风格三室两厅装修效果</p>
              <p>
                <span class="view">5000浏览</span>
                <span class="area">120㎡</span>
              </p>
            </div>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/2">
          <div class="example-item">
            <div class="inner-item">
              <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg"/>
              <p class="intro">现代简约风格三室两厅装修效果</p>
              <p>
                <span class="view">5000浏览</span>
                <span class="area">120㎡</span>
              </p>
            </div>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/2">
          <div class="example-item">
            <div class="inner-item">
              <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg"/>
              <div class="">
                <p class="intro">现代简约风格三室两厅装修效果</p>
                <p>
                  <span class="view">5000浏览</span>
                  <span class="area">120㎡</span>
                </p>
              </div>
            </div>
          </div>
        </flexbox-item>
      </flexbox>
    </flexbox>
    <flexbox class="news-box" orient="vertical">
      <flexbox :gutter="100">
        <flexbox-item :span="6">
          <h2 class="colum-title">新闻动态</h2>
        </flexbox-item>
        <flexbox-item :span="2">
          <a class="title-more">更多&gt;&gt;</a>
        </flexbox-item>
      </flexbox>
      <flexbox class="news-wrap"  orient="vertical">
        <flexbox class="news-item">
          <flexbox-item :span="1/3">
            <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg"/>
          </flexbox-item>
          <flexbox-item>
            <div class="news-content">
              <span>标题标题标题标题标题</span>
              <span class="news-sub-title">2018-09-04</span>
              <p class="news-article">近日，中外科研人员在一块琥珀中有了惊人发现，这块琥珀像一个“时间胶囊”，定格了远古的一个瞬间：一只甲虫正在取食聚集成簇的铁树花粉。并且，它们关系的建立远早于人们知道的蜜蜂、蝴蝶等传粉者</p>
            </div>
          </flexbox-item>
        </flexbox>
        <flexbox class="news-item">
          <flexbox-item :span="1/3">
            <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg"/>
          </flexbox-item>
          <flexbox-item>
            <div class="news-content">
              <span>标题标题标题标题标题</span>
              <span class="news-sub-title">2018-09-04</span>
              <p class="news-article">近日，中外科研人员在一块琥珀中有了惊人发现，这块琥珀像一个“时间胶囊”，定格了远古的一个瞬间：一只甲虫正在取食聚集成簇的铁树花粉。并且，它们关系的建立远早于人们知道的蜜蜂、蝴蝶等传粉者</p>
            </div>
          </flexbox-item>
        </flexbox>
      </flexbox>
    </flexbox>
    <flexbox class="map-box" orient="vertical">
      <flexbox :gutter="100">
        <flexbox-item :span="6">
          <h2 class="colum-title">在线地图</h2>
        </flexbox-item>
        <flexbox-item :span="2">
          <a class="title-more">到那里去</a>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          <div id="container" style="width: 350px; height: 120px;"></div>
        </flexbox-item>
      </flexbox>
    </flexbox>
    <bottom-Bar  v-bind={index}></bottom-Bar>
  </div>
</template>

<script>
import { Swiper, Flexbox, FlexboxItem } from 'vux'
import bottomBar from '../components/BottomBar'
import { TMap } from '../utils/TMap'

const baseList = [{
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
}, {
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
}, {
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg',
}]

export default {
  name: 'HomePage',
  components: {
    Swiper,
    Flexbox,
    FlexboxItem,
    bottomBar,
  },
  data () {
    return {
      index: 0,
      list: baseList
    }
  },
  mounted() {
      TMap('RYEBZ-NH7LD-YQ64O-P7Q4F-6VRCQ-IIFTY').then(qq => {
        var map = new qq.maps.Map(document.getElementById("container"), {
            // 地图的中心地理坐标。
            center: new qq.maps.LatLng(39.916527, 116.397128),
            zoom: 10
        });
      });
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
    width: 95%;
    background-color: #fff;
    padding: 40px 20px;
    margin-bottom: 20px;
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
  }
  .info-left {
    margin-right: 20px;
    height: 240px;
  }
  .info-right {
    height: 110px;
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
  .example-item {
    /* background-color: #20b907; */

    margin-top: 20px;
  }
  .inner-item {
    width: 93%;
    border: 1px solid #ADADAD;
    background-color: #fff;
    border-radius: 10px;
    font-size: 24px;
    margin-left: 5px;
    position: relative;
  }
  .inner-item img {
    width: 330px;
    height: 223px;
    border-radius: 10px 10px 0 0;
  }
  .area {
    position: absolute;
    right: 0;
  }
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
    font-size: 22px;
    color: #808080;
  }
  /* #container {
    width: 700px;
    height: 240px;
  } */
</style>
