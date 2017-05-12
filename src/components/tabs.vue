<template>
    <div class="tabs">
        <ul>
            <li v-for="(tab,index) in tabs" :class="tab.isCurrent ? 'cur' : ''" @click="changeTab(index)">{{tab.name}}</li>
        </ul>
        <div class="container" v-for="(item,index) in info" v-if="tabs[index].isCurrent" v-html="item"></div>
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
            },
            info:{
                type:Array,
                default:function () {
                    return ['<p>hello vue</p>','<strong>hello vue</strong>','<em>hello vue</em>']
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
        font-size:16px;
        ul{
            display: table;
            width: 100%;
            table-layout: fixed;
            border:1px solid #aaa;
        }
        li{
            display: table-cell;
            margin: 0 10px;
            line-height:40px;
            border-right:1px solid #aaa;
            &:last-of-type{
                border-right:0 none;
             }
            &.cur{
                background-color:#20a0ff;
                color: #fff;
             }
        }
    }
</style>