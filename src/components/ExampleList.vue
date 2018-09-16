<template>
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
    margin-left: 5px;
    position: relative;
  }
  .inner-item img {
    width: 100%;
    height: 223px;
    border-radius: 10px 10px 0 0;
  }
  .area {
    position: absolute;
    right: 0;
  }
</style>

