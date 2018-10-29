<template>
  <div class="hello">
    <top-bar text='个人中心'></top-bar>
    <div class="shadow"> </div>
    <div class="information">
      <flexbox class='userbox'>
        <flexbox-item :span="6" id='picbox'>
          <img id="pic" :src="userinfo.avatar" />
        </flexbox-item>
        <flexbox-item :span="5" class="info">
          <div class='nickname'>{{userinfo.nickname}}</div>
          <div class='id-num'>ID: {{userinfo.user_id}}</div>
        </flexbox-item>
      </flexbox>
    </div> 
    <flexbox class='jifen'>
      <flexbox-item @click.native="toDetail" class="jifen-item">
        <div class='number'>{{userinfo.totalPoints}}</div>
        <div class='grey'>总积分</div>
      </flexbox-item>
      <flexbox-item @click.native="toIntergral" class="jifen-item">
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
    <x-dialog v-model="showcode"  hide-on-blur :dialog-style="{'max-width': '100%', width: '80%', height: '50%', 'background-color': 'transparent', margin: 'auto', overflow: 'unset'}" >
      <div class="dialog">
        <span class="cancel" @click="spread"></span>
        <p class='codetitle'>推广二维码</p>
        <img :src='qrcodeImg' class="qrcode"/>
      </div>
      <box gap="20px 50px">
        <a :href='qrcodeImg' download="qrcode" class="dn-button">长按识别保存</a>
      </box>
    </x-dialog>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, CellBox, Group, XDialog, XButton, Box, Qrcode } from 'vux'
import bottomBar from '../components/BottomBar'
import { getPersonInfo, qrcode } from '../service/home'
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
      qrcodeImg: ''
    }
  },
  created: function() {
    getPersonInfo().then(res => {
      console.log(res)
        if (res.data.code == 0) {
          this.userinfo = res.data.data.personinfo.list[0]
        }
    })
    qrcode().then(res => {
      if (res.data.code == 0) {
        this.qrcodeImg = res.data.data.personinfo
      }
    })
  },
  methods: {
    spread: function(type) {
      this.showcode = !this.showcode
    },
    toDetail() {
      location.href='#/moneyDetail';
    },
    toIntergral() {
      location.href="#/integral";
    }
  }
}
</script>

<style lang="less">
.jifen {
  margin-top: -15px;
  padding-bottom: 30px;
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
  .jifen-item {
    border-right: 1px solid #ccc;
  }
}
.dialog {
  background: #fff;
  padding-bottom: 30px;
  position: relative;
  .codetitle {
    color: #464646;
    font-size: 36px;
    padding: 60px 0 30px 0;
  }
  .qrcode {
    width: 528px;
    height: 528px;
  }
}
.btn {
  padding: 25px 10px;
  border-radius: 20px;
  background: #fff;
  font-size: 40px;
}

  .cancel {
    position: absolute;
    right: -20px;
    top: -20px;
    z-index: 10000;
    width: 45px;
    height: 45px;
    background: url(../assets/close.png) center center no-repeat;
    background-color: #45CC84;
    border-radius: 50%;
    background-size: 45px 45px;
  }
.shadow {
  height: 370px;
  width: 100%;
  // border: 1px solid #ccc;
  background: url(../assets/bg.png) center center no-repeat;
  background-size: 750px 242px;
  position: absolute;
  top: -62px;
  left: 0;
  z-index: -1;
}
.information {
  height: 240px;
  margin-top: -15px;
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
    .info {
      margin-left: -15px !important;
    }
    .nickname {
      color: #fff;
      // font-size: 34px;
      font-weight: 700;
    }
    .id-num {
      font-size: 30px;
      color: #fff;
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
.dn-button {
  display: block;
  background: #fff;
  text-decoration: none;
  width: 350px;
  margin: 0 auto;
  border-radius: 30px;
  height: 90px;
  line-height: 90px;
  color: #464646;
  font-size: 36px;
  margin-top: 90px;
}
</style>
