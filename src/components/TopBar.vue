<template>
    <!-- <div :class="{ 'money': money === true, 'box': money === false }">
        <flexbox class="topbar">
            <flexbox-item class='arrow' @click.native="goBack" span='1'><span> &lt;</span></flexbox-item>
            <flexbox-item @click.native="goBack" v-if="left"><p class='topfont' >{{text}}</p></flexbox-item>
            <flexbox-item v-if="center"><p class='topfont' style='textAlign:center'>{{text}}</p></flexbox-item>
            <flexbox-item  span='48' v-if="right" @click.native="goDetail">明细</flexbox-item>
        </flexbox>
    </div>   -->
    <div :class="top ? 'topAbsolute' : 'topbar'"></div>
</template>
<script>
import { Flexbox, FlexboxItem } from 'vux'
export default {
    components: {
        Flexbox,
        FlexboxItem,
    },
    props: ['text','left','center', 'money', 'right', 'top'],
    created() {
         console.log('newVal', this.text);
         document.title = this.text
    },
    methods: {
        goBack: function (event) {
            this.$router.go(-1)
        },
        goDetail: function() {
            this.$router.push({name: '提现明细'})
        }
    }
}
</script>
<style scoped>
    .topbar {
        /* position: fixed; */
        /* top: 60px; */
        height: 60px;
        width: 100%;
        background: transparent;
    }
    .topAbsolute {
        position: fixed;
        top: 0;
    }
    .arrow {
        padding-left: 25px;
    }
    .box {
        height: 40px;
    }
    .money {
        height: 40px;
        background: #B3DEE0;
    }
    .topfont {
        font-size: 36px;
        color: #626262;
    }
</style>


