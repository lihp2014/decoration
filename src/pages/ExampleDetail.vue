<template>
    <div>
        <top-bar text='田园风格设计' center='false'></top-bar>
        <div>
            <div class="img-wrap">
                <img class="img" :src="data.backgroundImage"/>
                <p class="info">
                    <span>{{data.view}}浏览</span>
                </p>
            </div>
            <div class="close-btn">
                <p class="close">x</p>
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
    mounted () {
        let id = this.$route.params.id;
        getExampleDetail(id).then(res => {
            if (res.data.code === 0) {
                this.data = res.data.data.list[0];
            }
        });
    },
    methods: {
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
      text-align: left;
      padding-left: 20px;
  }
  .close-btn {
      background: #000;
      color: #fff;
      width: 100%;
      height: 130px;
      padding-top: 30px;
  }
  .close {
      width: 65px;
      height: 65px;
      line-height: 65px;
      border: 1px solid #fff;
      border-radius: 50%;
      margin: 0 auto;
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

