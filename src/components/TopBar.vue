<template>
    <div class='box'>
        <flexbox class="topbar">
            <flexbox-item  @click.native="goBack" span='1'><span> &lt;</span></flexbox-item>
            <flexbox-item @click.native="goBack" v-if="left"><p class='topfont' >{{text}}</p></flexbox-item>
            <flexbox-item v-if="center"><p class='topfont' style='textAlign:center'>{{text}}</p></flexbox-item>
        </flexbox>
    </div>  
</template>
<script>
import { Flexbox, FlexboxItem } from 'vux'
export default {
    components: {
        Flexbox,
        FlexboxItem,
    },
    props: ['text','left','center'],
    methods: {
        goBack: function (event) {
            this.$router.go(-1)
        },
    }
}
</script>
<style scoped>
    .topbar {
        /* position: fixed; */
        top: 0;
        height: 100px;
    }
    .box {
        height: 40px,
    }
    .topfont {
        font-size: 36px;
        color: #626262;
    }
</style>


