<template>
  <div class="hello">
    <router-link to='/loan'><span>moneyPage</span></router-link>
    <bottom-Bar  v-bind={index}></bottom-Bar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
import bottomBar from '../components/BottomBar'
export default {
  name: 'MoneyPage',
  components: {
    Tabbar,
    TabbarItem,
    bottomBar,
  },
  data () {
    return {
      index: 2
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
</style>
