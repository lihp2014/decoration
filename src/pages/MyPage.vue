<template>
  <div class="hello">
    <div class="shadow"> </div>
    <div class="information">
      <top-bar text='' center='true' id='topbar'></top-bar>
      <flexbox class='userbox'>
        <flexbox-item :span="5" id='picbox'>
          <img id="pic" :src="userinfo.avatar" />
        </flexbox-item>
        <flexbox-item>
          <div class='nickname'>{{userinfo.nickname}}</div>
          <div class='nickname'>ID: {{userinfo.user_id}}</div>
        </flexbox-item>
      </flexbox>
    </div> 
    <flexbox class='jifen'>
      <flexbox-item>
        <div class='number'>{{userinfo.totalPoints}}</div>
        <div class='grey'>总积分</div>
      </flexbox-item>
      <flexbox-item>
        <div class='number'>{{userinfo.presentPoints || 0 }}</div>
        <div class='grey'>现有积分</div>
      </flexbox-item>
      <flexbox-item>
        <div class='number'>{{userinfo.user_level}}</div>
        <div class='grey'>等级</div>
      </flexbox-item>
    </flexbox>
    <div class='line'></div>
    <group>
      <cell-box class='list' is-link link='partner'><img src="../assets/part.png" class='icon'/>合伙人绑定</cell-box>
      <cell-box class='list' is-link link='integral'><img src="../assets/jifen.png" class='icon'/>积分兑换</cell-box>
      <cell-box class='list' is-link @click.native="spread"><img src="../assets/tuiguang.png" class='icon'/>推广码</cell-box>
      <cell-box class='last list' is-link link='vip'><img src="../assets/vipp.png" class='icon'/>vip推广</cell-box>
    </group>  
    <bottom-Bar v-bind={index}></bottom-Bar>
    <x-dialog v-model="showcode"  hide-on-blur :dialog-style="{'max-width': '100%', width: '80%', height: '50%', 'background-color': 'transparent', margin: 'auto'}" >
      <div class="dialog">
        <x-icon class="close" @click.native="spread" type="ios-close-outline" size="30"></x-icon>
        <p class='codetitle'>推广二维码</p>
        <qrcode id='qrcode' value="http://fitment.guoxiaoge.cn/api/qrcode/"></qrcode>
      </div>
      <box gap="20px 50px">
        <x-button class='btn' @click.native="spread('download')">下载二维码</x-button>
      </box>
    </x-dialog>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, CellBox, Group, XDialog, XButton, Box, Qrcode } from 'vux'
import bottomBar from '../components/BottomBar'
import { getPersonInfo } from '../service/home'
import topBar from '../components/Topbar'

export default {
  name: 'MyPage',
  components: {
    Flexbox,
    FlexboxItem,
    bottomBar,
    CellBox,
    Group,
    XDialog,
    XButton,
    Box,
    Qrcode,
    topBar,
  },
  data () {
    return {
      index: 3,
      showcode: false,
      userinfo: {
        avatar: "/upload/goods/5bbb25b9c858c.jpg",
        nickname: "guoxiaoge11",
        presentPoints: 500,
        totalPoints: 1555,
        user_id: 1,
        user_level: "普通會員",
      },
    }
  },
  created: function() {
    getPersonInfo().then(res => {
      console.log(res)
        if (res.data.code == 0) {
          this.userinfo = res.data.data.personinfo.list[0]
        }
    })
  },
  methods: {
    spread: function(type) {
      this.showcode = !this.showcode

      if (type == 'download') {
        //找到canvas标签
        let myCanvas = document.querySelector('#qrcode').getElementsByTagName('canvas');
        //创建一个a标签节点
        let a = document.createElement("a")
        //设置a标签的href属性（将canvas变成png图片）
        a.href = myCanvas[0].toDataURL('image/png').replace('image/png', 'image/octet-stream')
        //设置下载文件的名字
        a.download = "推广二维码"
        //点击
        a.click()
      }
    }
  }
}
</script>

<style lang="less">
.jifen {
  padding-bottom: 30px;
  padding-top: 15px;
  .grey {
  color: #787878;
  font-size: 22px;
  }
  .number {
    color: #3F3F3F;
    font-size: 30px;
  }
  div {
    text-align: center;
    font-size: 30px;
    color: #363636;
  }
}
.dialog {
  background: #fff;
  padding-bottom: 30px;
  position: relative;
  .close {
    background: #45CC84;
    position: absolute;
    right: 0;
  }
  .codetitle {
    color: #464646;
    font-size: 36px;
    padding: 15px 0;
  }
}
.btn {
  padding: 25px 0;
  border-radius: 20px;
  background: #fff;
}
.shadow {
  height: 370px;
  width: 100%;
  // border: 1px solid #ccc;
  background: url('https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg') center center;
  position: absolute;
  -webkit-filter:blur(3px);
  filter:blur(3px);
  top: 0;
  left: 0;
  z-index: -1;
}
.information {
  height: 370px;
  .topbar{
    color: #fff;
  }
  .userbox {
    // margin-left: 80px;
    div {
      font-size: 34px;
      text-align: left;
    }
    #picbox {
      text-align: center;
      #pic {
        width: 148px;
        height: 148px;
        border-radius: 50%;
        border: 1px solid #B78D8F;
        // margin-left: 120px;
      }
    }   
    .nickname {
      color: #fff;
      // font-size: 34px;
      font-weight: 500;
    }
  }
}
.line {
  height:20px;
  background:rgb(246,246,246);
}
.icon {
  width: 45px;
  height: 45px;
  margin: 0 10px;
}
.last {
  border-bottom: 1px solid #eee;
  font-size: 30px;
}
.list {
  font-size: 30px;
  padding: 30px 10px !important;
}
.weui-cells {
  margin-top: 0 !important;
}
.weui-cells:after {
  border-bottom: none !important;
}
</style>
