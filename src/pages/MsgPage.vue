<template>
  <div>
    <div class="content">
        <div class="image-box">
            <img src="../assets/msgPic.jpg">
        </div>
        <flexbox class="wrap">
            <popup-picker :data="list1" :columns="3" v-model="address" value-text-align="left"></popup-picker>
        </flexbox>
        <flexbox class="wrap">
            <x-input placeholder="请输入您的房屋面积" v-model="area"></x-input>
        </flexbox>
        <flexbox class="wrap">
            <popup-picker :data="list2" v-model="room" value-text-align="left"></popup-picker>
        </flexbox>
        <flexbox class="wrap">
            <x-input placeholder="输入号码，方便和您联系" v-model="phone"></x-input>
        </flexbox>
        <flexbox class="btn-wrap">
            <x-button type='primary' class="btn" @click.native='submit'>提交</x-button>
        </flexbox>
    </div>
    <bottom-Bar  v-bind={index}></bottom-Bar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, XHeader, Flexbox, PopupPicker, XInput, XButton } from 'vux'
import bottomBar from '../components/BottomBar'
import { postMsg } from '../service/home'

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
            value: '湖南',
            parent: 0
        }, {
            name: '湖北',
            value: '湖北',
            parent: 0
        }, {
            name: '长沙',
            value: '长沙',
            parent: '湖南'
        }, {
            name: '常德',
            value: '常德',
            parent: '湖南'
        }, {
            name: '武汉',
            value: '武汉',
            parent: '湖北'
        }, {
            name: '黄冈',
            value: '黄冈',
            parent: '湖北'
        }, {
            name: '芙蓉区',
            value: '芙蓉区',
            parent: '长沙'
        }, {
            name: '天心区',
            value: '天心区',
            parent: '长沙'
        }, {
            name: '洪山区',
            value: '洪山区',
            parent: '武汉'
        }],
        address: ['湖北', '武汉', '洪山'],
        list2: [
        ['1室', '2室', '3室'],
        ['1厅', '2厅', '3厅'],
        ['1厨', '0厨'],
        ['1卫', '2卫', '3卫'],
        ['1阳台', '2阳台', '3阳台']],
        room: ['1室', '1厅', '1厨', '1卫', '1阳台'],
        area: '',
        phone: ''
    }
  },
  created() {
      document.title = '留言板'
  },
  methods: {
      submit () {
        //   console.log(this.address);
          let params = new FormData();
          params.append('address', this.address);
          params.append('area', this.area);
          params.append('room', this.room);
          params.append('phone', this.phone);
          postMsg(params).then(res => {
            this.$router.push({
                path: '/result',
                query: {
                    title: '留言板',
                    success: res.data.code === 0 ? true : false
                }
            });
          })
      },
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
    width: 80%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 30px;
    box-shadow: 2px 2px 3px #aaaaaa;
    padding: 40px;
    margin: 30px auto;
    margin-bottom: 40px;
}
.image-box img {
    width: 600px;
    height: 272px;
}
.wrap {
    margin-top: 30px;
    background-color: #e0e0e0;
    height: 98px;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    text-indent: 20px;
    text-align: left !important;
}
.btn-wrap {
    margin-top: 57px;
}
.btn {
    background-color: #26CC8C;
    border-radius: 20px;
    padding: 25px 0;
    width: 100%;
    font-size: 30px;
}
.vux-cell-box {
    width: 100%;
}
</style>
