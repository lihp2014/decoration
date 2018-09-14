<template>
  <div class="hello">
    <div class="information">myPage</div>
    <flexbox>
      <flexbox-item>
        <div class='number'>123456</div>
        <div class='grey'>总积分</div>
      </flexbox-item>
      <flexbox-item>
        <div class='number'>123456</div>
        <div class='grey'>现有积分</div>
      </flexbox-item>
      <flexbox-item>
        <div class='number'>123456</div>
        <div class='grey'>等级</div>
      </flexbox-item>
    </flexbox>
    <div class='line'></div>
    <group>
      <cell-box class='list' is-link>合伙人绑定</cell-box>
      <cell-box class='list' is-link>积分兑换</cell-box>
      <cell-box class='list' is-link>推广码</cell-box>
      <cell-box class='list last' is-link>vip推广</cell-box>
    </group>  
    <bottom-Bar v-bind={index}></bottom-Bar>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, CellBox, Group } from 'vux'
import bottomBar from '../components/BottomBar'

export default {
  name: 'MyPage',
  components: {
    Flexbox,
    FlexboxItem,
    bottomBar,
    CellBox,
    Group
  },
  data () {
    return {
      index: 3
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.information {
  height: 370px;
  border: 1px solid #000;
}
div {
  text-align: center;
  font-size: 30px;
}
.grey {
  color: #787878;
  font-size: 22px;
}
.number {
  color: #3F3F3F;
  font-size: 30px;
}
.line {
  height:20px;
  background:rgb(246,246,246);
}
.list {
  padding: 20px 15px;
}
.last {
  border-bottom: 1px solid #eee;
}
</style>
