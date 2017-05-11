<template>
    <div class="tabs">
        <ul>
            <li v-for="(tab,index) in tabs" :class="tab.isCurrent ? 'cur' : ''" @click="changeTab(index)">{{tab.name}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        props:{
            tabs:{
                type:Array,
                default:function () {
                    return [{
                        name: '标签1',
                        isCurrent: false
                    },{
                        name: '标签2',
                        isCurrent: true
                    },{
                        name: '标签3',
                        isCurrent: false
                    }]
                }
            }
        },
        methods:{
            changeTab(index){
                this.tabs.map((v, i) => {
                    i == index ? v.isCurrent = true : v.isCurrent = false
                });
            }
        }
    }
</script>

<style lang="scss">
    .tabs{
        text-align:center;
        ul{
            display: table;
            width: 100%;
            table-layout: fixed;
        }
        li{
            display: table-cell;
            margin: 0 10px;
            line-height:40px;
            &.cur{
                background-color:#20a0ff;
                color: #fff;
             }
        }
    }
</style>