<template>
  <div class="hello">
    <top-bar text='' left='true' money='true'></top-bar>
    <img class='pic' src="../assets/loan.png">
    <x-button type='primary' class='application' link='/loan'>立即申请</x-button>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, XButton } from 'vux'
import topBar from '../components/Topbar'
import bottomBar from '../components/BottomBar'
export default {
  name: 'MoneyPage',
  components: {
    Tabbar,
    TabbarItem,
    bottomBar,
    topBar,
    XButton,
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
.hello {
    width: 100%;
    height: 100%;
    background: #B3DEE0 !important; 
}
.pic {
  width: 100%;
}
.application {
  padding: 20px;
  position: absolute;
  bottom: 0;
  font-size: 40px;
}
</style>
