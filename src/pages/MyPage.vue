<template>
  <div class="hello">
    <div class="information">
      <flexbox class='userbox'>
        <flexbox-item :span="4">
          <img id="pic" :src="'http://fitment.guoxiaoge.cn' + userinfo.avatar" />
        </flexbox-item>
        <flexbox-item>
          <div>{{userinfo.nickname}}</div>
          <div>ID: {{userinfo.user_id}}</div>
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
      <cell-box class='list' is-link link='partner'>合伙人绑定</cell-box>
      <cell-box class='list' is-link link='integral'>积分兑换</cell-box>
      <cell-box class='list' is-link @click.native="spread">推广码</cell-box>
      <cell-box class='last list' is-link link='vip'>vip推广</cell-box>
    </group>  
    <bottom-Bar v-bind={index}></bottom-Bar>
    <x-dialog v-model="showcode"  hide-on-blur :dialog-style="{'max-width': '100%', width: '80%', height: '50%', 'background-color': 'transparent', margin: 'auto'}" >
      <div class="dialog">
        <p class='codetitle'>推广二维码</p>
        <qrcode value="http://fitment.guoxiaoge.cn/api/qrcode/"></qrcode>
      </div>
      <box gap="20px 50px">
        <x-button class='btn' @click.native="spread">下载二维码</x-button>
      </box>
    </x-dialog>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, CellBox, Group, XDialog, XButton, Box, Qrcode } from 'vux'
import bottomBar from '../components/BottomBar'
import { getPersonInfo } from '../service/home'

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
  },
  data () {
    return {
      index: 3,
      showcode: false,
      userinfo: null,
    }
  },
  created: function() {
    getPersonInfo().then(res => {
        if (res.data.code == 0) {
          this.userinfo = res.data.data.personinfo.list[0]
        }
    })
  },
  methods: {
    spread: function() {
      this.showcode = !this.showcode
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
.information {
  height: 370px;
  border: 1px solid #000;
  .userbox {
    margin-top: 50px;
    margin-left: 80px;
    div {
      font-size: 34px;
      text-align: left;
    }
    #pic {
      width: 148px;
      height: 148px;
      border-radius: 50%;
      border: 1px solid #B78D8F;
      // position: absolute;
      // left: 80px;
    }
  }
}
.line {
  height:20px;
  background:rgb(246,246,246);
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
