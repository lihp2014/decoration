<template>
  <div>
    <tabbar v-model="index">
      <tabbar-item link="/home" icon-class="small">
        <img slot="icon" src="../assets/icon/home.png" style="width: 20px;height: 20px;">
        <img slot="icon-active" src="../assets/icon/home-a.png" style="width: 20px;height: 20px;">
        <span slot="label" style="text-decoration: none">首页</span>
      </tabbar-item>
      <tabbar-item link="msg">
        <img slot="icon" src="../assets/icon/msg.png" style="width: 20px;height: 20px;"> 
        <img slot="icon-active" src="../assets/icon/msg-a.png" style="width: 20px;height: 20px;">
        <span slot="label">留言板</span>
      </tabbar-item>
      <tabbar-item link="money">
        <img slot="icon" src="../assets/icon/money.png" style="width: 20px;height: 20px;">
        <img slot="icon-active" src="../assets/icon/money.png" style="width: 20px;height: 20px;">
        <span slot="label">金融板块</span>
      </tabbar-item>
      <tabbar-item link="my">
        <img slot="icon" src="../assets/icon/person.png" style="width: 20px;height: 20px;">
        <img slot="icon-active" src="../assets/icon/person-a.png" style="width: 20px;height: 20px;">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
//   name: 'bottomBar',
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      
    }
  },
  props: ['index'],
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
  text-decoration: none;
}
.weui-tabbar {
  position: fixed;
}
.weui-tabbar__label {
  font-size: 28px;
}
</style>
