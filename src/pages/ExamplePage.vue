<template>
    <div>
        <div>
            <example-list :list="examples"></example-list>
        </div>
    </div>
</template>
<script>

import topBar from '../components/Topbar'
import exampleList from '../components/ExampleList'
import { Flexbox, FlexboxItem } from 'vux'
import { getExamples } from '../service/home'

export default {
    components: {
        topBar,
        exampleList,
        Flexbox,
        FlexboxItem,
    },
    data() {
        return {
            examples: []
        }
    },
    created () {
        document.title = '合作案例'
    },
    methods: {
        async getExampleData () {
            const res = await getExamples();
            if (res.data.code === 0) {
                this.examples = res.data.data.examples.list;
            }
        }
    },
    mounted() {
        this.getExampleData();
    }
}
</script>
<style lang="less" scoped>
    .pic img {
        width: 750px;
        height: 240px;
    }
</style>


