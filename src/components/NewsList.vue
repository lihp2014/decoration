<template>
    <flexbox class="news-wrap"  orient="vertical">
        <flexbox class="news-item">
        <flexbox-item :span="1/3">
            <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg"/>
        </flexbox-item>
        <flexbox-item>
            <div class="news-content">
            <span>标题标题标题标题标题</span>
            <span class="news-sub-title">2018-09-04</span>
            <p class="news-article">近日，中外科研人员在一块琥珀中有了惊人发现，这块琥珀像一个“时间胶囊”，定格了远古的一个瞬间：一只甲虫正在取食</p>
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
            <p class="news-article">近日，中外科研人员在一块琥珀中有了惊人发现，这块琥珀像一个“时间胶囊”，定格了远古的一个瞬间：一只甲虫正在取食</p>
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
    font-size: 22px;
    height: 150px;
    color: #808080;
  }
</style>

