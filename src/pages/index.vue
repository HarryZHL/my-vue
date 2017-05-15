<template>
    <div>
        <h2 style="text-align: center">demo</h2>
        <div :style="{marginBottom:'10px'}">
            <img :src="logo" alt="" class="vue-logo" />
            <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
            <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
        </div>
        <el-radio-group v-model="radio3" :size="'large'" :style="{marginBottom:'10px'}">
            <el-radio-button v-for="city in cities" :label="city" :key="city"></el-radio-button>
        </el-radio-group>
        <Tabs :tabs="tabsArray" :info="infoArray" :style="{width:'600px',margin:'0 auto 20px'}"></Tabs>
        <Lottery :prize="3"></Lottery>
    </div>
</template>

<script lang="babel">
    import logo from '../assets/logo.png';
    import '../assets/scss/lottery.scss'
    import Tabs from '../components/tabs.vue';
    import Lottery from '../components/lottery.vue';

    const cityOptions = ['Shanghai','Beijing','Guangzhou','Shenzhen'];
    let info = [];
    cityOptions.map((v) => {
        info.push('this is ' + v)
    });
    export default {
        components:{
            'Tabs':Tabs,
            'Lottery':Lottery
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
                }],
                infoArray: info
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