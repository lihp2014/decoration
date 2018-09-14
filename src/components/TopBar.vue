<template>
    <div class='box'>
        <flexbox class="topbar">
            <flexbox-item  @click.native="goBack" span='1'><span> &lt;</span></flexbox-item>
            <flexbox-item><p>{{text}}</p></flexbox-item>
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
    props: ['text'],
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
</style>


