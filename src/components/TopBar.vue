<template>
    <div>
        <flexbox class="topbar">
            <!-- <flexbox-item @click="Path" span='1'><span> &lt;</span></flexbox-item> -->
            <router-link to="/"><flexbox-item span='1'><span> &lt;</span></flexbox-item></router-link>
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
        Path: () => {
            this.$router.push({path: '/'})
        }
    }
}
</script>
<style scoped>
    .topbar {
        position: fixed;
        top: 0;
        height: 100px;
    }

</style>


