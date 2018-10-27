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
            var center = new qq.maps.LatLng(29.068050,111.693962);
            var map = new qq.maps.Map(document.getElementById("container"), {
                // 地图的中心地理坐标。29.0680500000,111.6939620000
                center: center,
                zoom: 25
            });
            //创建一个Marker
            var marker = new qq.maps.Marker({
                //设置Marker的位置坐标
                position: center,
                //设置显示Marker的地图
                map: map
            });
        
            //设置Marker的可见性，为true时可见,false时不可见，默认属性为true
            marker.setVisible(true);
             var anchor = new qq.maps.Point(0, 39),
                size = new qq.maps.Size(42, 68),
                origin = new qq.maps.Point(0, 0),
                icon = new qq.maps.MarkerImage(
                    "https://blog.lijulun.com/uploads/images/20180928/location.png",
                    size,
                    origin,
                    anchor
                );
            marker.setIcon(icon);
        });
        let height = document.documentElement.offsetHeight;
        let container = document.querySelector('#container');
        container.style.height = height + 'px';
    }
}
</script>
<style lang="less">
    
</style>


