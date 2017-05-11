<template>
    <div>
        <div :style="{marginBottom:'10px'}">
            <img :src="logo" alt="" class="vue-logo" />
            <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
            <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
        </div>
        <el-radio-group v-model="radio3" :size="'large'" :style="{marginBottom:'10px'}">
            <el-radio-button v-for="city in cities" :label="city" :key="city"></el-radio-button>
        </el-radio-group>
        <Tabs :tabs="tabsArray" :style="{width:'600px',margin:'0 auto'}"></Tabs>
    </div>
</template>

<script lang="babel">
    import logo from '../assets/logo.png';
    import Tabs from '../components/tabs.vue';

    const cityOptions = ['Shanghai','Beijing','Guangzhou','Shenzhen'];

    export default {
        components:{
            'Tabs':Tabs
        },
        data () {
            return {
                logo: logo,
                cities:cityOptions,
                radio: '1',
                radio3:'Shanghai',
                tabsArray:[{
                    name:'Shanghai',
                    isCurrent:true
                },{
                    name:'Beijing',
                    isCurrent:false
                },{
                    name:'Guangzhou',
                    isCurrent:false
                },{
                    name:'Shenzhen',
                    isCurrent:false
                }]
            }
        }
    }
</script>

<style lang="scss">
    .vue-logo{
        width: 100px;
        height: 100px;
        display: block;
        margin: 0 auto;
    }
</style>