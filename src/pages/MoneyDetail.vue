<template>
    <div>
        <top-bar text='提现记录' center='true'></top-bar>
        <div>
            <div class='moneytitle'>04月</div>
            <ul>
                <li class='list'>
                    <flexbox align='flex-between' justify='center'>
                        <flexbox-item>
                            <div class='green'>转微信</div>
                            <div class='date'>2018年4月26日 12:00</div>
                        </flexbox-item>
                        <flexbox-item style='text-align:right'>
                            <span class='green'>999</span>
                        </flexbox-item>
                    </flexbox>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import topBar from '../components/Topbar'
import { Flexbox, FlexboxItem } from 'vux'

export default {
    components: {
        topBar,
        Flexbox,
        FlexboxItem,
    },
    data() {
        return {
            data: [
                {
                    month: '04月',
                    items: []
                }
            ],
        }
    }
}
</script>
<style lang="less" scoped>
.moneytitle {
    height: 72px;
    line-height: 72px;
    color: #707070;
    font-size: 28px;
    background: rgba(240,240,240,1);
    text-align: left;
    padding-left: 10px;
}
.list {
    padding: 20px 10px;
    border-bottom: 1px solid #E9E9E9;
    .green {
        color: #26CC8C;
        font-size: 28px;
    }
    .date {
        color: #bbb;
        font-size: 24px;
    }
}
</style>


