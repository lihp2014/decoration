<template>
    <flexbox wrap="wrap" :gutter="0">
        <flexbox-item :span="1/2" v-for="(item, key) in list" :key="key" @click.native="gotoExample(item.id)">
          <div class="example-item">
            <div class="inner-item">
              <img :src="item.backgroundImage"/>
              <p class="intro">{{item.description}}</p>
              <p>
                <span class="view">{{item.view}}浏览</span>
                <span class="area">{{item.area}}㎡</span>
              </p>
            </div>
          </div>
        </flexbox-item>
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
        }
    },
    methods: {
        gotoExample(id) {
            location.href="#/exampleDetail/"+id;
        }
    }
}
</script>
<style lang="less" scoped>
  .example-item {
    margin-top: 20px;
  }
  .inner-item {
    width: 93%;
    border: 1px solid #ADADAD;
    background-color: #fff;
    border-radius: 10px;
    font-size: 24px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 10px;
  }
  .inner-item img {
    width: 100%;
    height: 223px;
    border-radius: 10px 10px 0 0;
  }
  .intro {
    position: relative;
    line-height: 36px;
    height: 36px;
    overflow: hidden;
  }
  .view {
    color: #808080;
  }
  .area {
    position: absolute;
    right: 0;
    color: #808080;
  }
</style>

