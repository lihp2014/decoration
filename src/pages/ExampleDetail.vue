<template>
    <div>
        <div>
            <div class="img-wrap">
                <img class="img" :src="data.backgroundImage"/>
                <p class="info">
                    <span class="view-text">{{data.view}}浏览</span>
                </p>
            </div>
            <div class="close-btn" @click="goBack">
                <p class="close"></p>
            </div>
            <div class="start-btn" @click="gotoMsg">
                <p class="start">开启我的装修</p>
            </div>
        </div>
    </div>
</template>

<script>

import topBar from '../components/Topbar'
import { Flexbox, FlexboxItem } from 'vux'
import { getExampleDetail } from '../service/home'

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
  .close-btn {
      background: #000;
      color: #fff;
      width: 100%;
      padding-top: 30px;
      padding-bottom: 30px;
    //   height: 130px;
    //   line-height: 130px;
    //   padding-top: 30px;
  }
  .close {
      width: 65px;
      height: 65px;
      margin: 0 auto;
      background: url(../assets/close.png) center center no-repeat;
      background-size: 65px 65px;
  }
  .start-btn {
      background: #26CC8C;
      width: 100%;
      border-radius: 10px;
      height: 120px;
      line-height: 120px;
      color: #fff;
  }
</style>

