<template>
    <div>
        <div id="container" style="width: 100%; height: 520px"></div>
    </div>
</template>
<script>
import { Box, Icon } from 'vux'
import topBar from '../components/Topbar'
import { TMap } from '../utils/TMap'

export default {
   components: {
       Icon,
        topBar,
    },
    data() {
        return {
            title: '',
            success: true
        }
    },
    created() {
        document.title = '在线地图';
    },
    mounted () {
        TMap('RYEBZ-NH7LD-YQ64O-P7Q4F-6VRCQ-IIFTY').then(qq => {
        var map = new qq.maps.Map(document.getElementById("container"), {
            // 地图的中心地理坐标。
            center: new qq.maps.LatLng(39.916527, 116.397128),
            zoom: 10
        });
        });
        let height = document.documentElement.offsetHeight;
        let container = document.querySelector('#container');
        container.style.height = height + 'px';
    }
}
</script>
<style lang="less">
    
</style>


