<template>
  <div class="hello">
    <tabbar v-model="index">
      <tabbar-item link="/home">
        <img slot="icon" src="../assets/icon/home.svg">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="msg">
        <img slot="icon" src="../assets/icon/msg.svg">
        <span slot="label">留言板</span>
      </tabbar-item>
      <tabbar-item link="money">
        <img slot="icon" src="../assets/icon/money.svg">
        <span slot="label">金融板块</span>
      </tabbar-item>
      <tabbar-item link="my">
        <img slot="icon" src="../assets/icon/person.svg">
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
}
</style>
