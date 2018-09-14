<template>
  <div>
    <x-header :left-options="{backText: ''}">留言板</x-header>
    <div class="content">
        <div class="image-box">
            <img src="../assets/msgPic.jpg">
        </div>
        <flexbox class="wrap">
            <popup-picker :title="选择地区" :data="list1" :columns="3" v-model="value1"></popup-picker>
        </flexbox>
        <flexbox class="wrap">
            <x-input placeholder="请输入您的房屋面积" v-model="area"></x-input>
        </flexbox>
        <flexbox class="wrap">
            <popup-picker :title="选择地区" :data="list2" v-model="value2"></popup-picker>
        </flexbox>
        <flexbox class="wrap">
            <x-input placeholder="输入号码，方便和您联系" v-model="phone"></x-input>
        </flexbox>
        <flexbox class="btn-wrap">
            <x-button type='primary' class="btn">提交</x-button>
        </flexbox>
    </div>
    <bottom-Bar  v-bind={index}></bottom-Bar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, XHeader, Flexbox, PopupPicker, XInput, XButton } from 'vux'
import bottomBar from '../components/BottomBar'
export default {
  name: 'MsgPage',
  components: {
    Tabbar,
    TabbarItem,
    XHeader,
    bottomBar,
    Flexbox,
    PopupPicker,
    XInput,
    XButton
  },
  data () {
    return {
        index: 1,
        list1: [{
            name: '湖南',
            value: 'hunan',
            parent: 0
        }, {
            name: '湖北',
            value: 'hubei',
            parent: 0
        }, {
            name: '长沙',
            value: 'changsha',
            parent: 'hunan'
        }, {
            name: '常德',
            value: 'changde',
            parent: 'hunan'
        }, {
            name: '武汉',
            value: 'wuhan',
            parent: 'hubei'
        }, {
            name: '黄冈',
            value: 'huanggang',
            parent: 'hubei'
        }, {
            name: '芙蓉区',
            value: 'furongqu',
            parent: 'changsha'
        }, {
            name: '天心区',
            value: 'tianxinqu',
            parent: 'changsha'
        }, {
            name: '洪山区',
            value: 'hongshan',
            parent: 'wuhan'
        }],
        value1: ['湖北', '武汉', '洪山'],
        list2: [
        ['1室', '2室', '3室'],
        ['1厅', '2厅', '3厅'],
        ['1厨', '0厨'],
        ['1卫', '2卫', '3卫'],
        ['1阳台', '2阳台', '3阳台']],
        value2: ['1室', '1厅', '1厨', '1卫', '1阳台']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.content {
    width: '100%';
    height: '100%';
    border: 1px solid #ccc;
    border-radius: 30px;
    box-shadow: 2px 2px 3px #aaaaaa;
    padding: 30px 40px;
    margin-top: 30px;
}
.image-box img {
    width: 640px;
    height: 272px;
}
.wrap {
    margin-top: 30px;
    background-color: #e0e0e0;
    height: 100px;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    text-indent: 20px;
}
.btn-wrap {
    margin-top: 57px;
}
.btn {
    background-color: #26CC8C;
    border-radius: 20px;
    padding: 25px 0; 
}
</style>
