<template>
    <div>
        <div>
            <div class="img-wrap">
                <swiper height="458px" loop :list="list" :show-dots="false" :show-desc-mask="false" v-model="swiperItemIndex"></swiper>
                <p class="info">
                    <span class="view-text">{{data.view}}浏览</span>
                    <span class="view-num">{{swiperItemIndex+1}}/{{list.length}}</span>
                </p>
            </div>
            <div class="start-btn" @click="gotoMsg">
                <p class="start">开启我的装修</p>
            </div>
        </div>
    </div>
</template>

<script>

import topBar from '../components/Topbar'
import { Flexbox, FlexboxItem, Swiper } from 'vux'
import { getExampleDetail } from '../service/home'
const baseList = [{
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
}, {
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
}, {
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg',
}]

export default {
    components: {
        topBar,
        Flexbox,
        FlexboxItem,
        Swiper
    },
    data() {
        return {
            data: {},
            list: baseList,
            swiperItemIndex: 1
        }
    },
    created() {
        document.title = '田园风格设计'
    },
    mounted () {
        let id = this.$route.params.id;
        getExampleDetail(id).then(res => {
            if (res.data.code === 0) {
                this.data = res.data.data.list[0];
            }
        });
    },
    methods: {
        goBack () {
            window.history.go(-1);
        },
        gotoMsg () {
            location.href="#/msg";
        }
    }
}
</script>
<style lang="less" scoped>
  .img-wrap {
      position: relative;
      width: 750px;
      height: 914px;
  }
  .img {
      width: 100%;
      height: 914px;
  }
  .info {
      position: absolute;
      bottom: 0;
      background: rgba(0,0,0,0.58);
      color: #fff;
      width: 100%;
      height: 60px;
      line-height: 60px;
      text-align: left;
  }
  .view-text {
      margin-left: 20px;
  }
  .view-num {
      position: absolute;
      right: 20px;
  }
  .start-btn {
      background: #26CC8C;
      width: 100%;
      height: 120px;
      line-height: 120px;
      color: #fff;
      position: fixed;
      bottom: 0;
  }
</style>

