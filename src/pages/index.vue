<template>
    <div>
        <div :style="{marginBottom:'10px'}">
            <img :src="logo" alt="" />
            <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
            <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
        </div>
        <el-radio-group v-model="radio3" :size="'large'" :style="{marginBottom:'10px'}">
            <el-radio-button v-for="city in cities" :label="city" :key="city"></el-radio-button>
        </el-radio-group>
    </div>
</template>

<script lang="babel">
    import logo from '../assets/logo.png';
    const cityOptions = ['Shanghai','Beijing','Guangzhou','Shenzhen'];

    export default {
        data () {
            return {
                logo: logo,
                cities:cityOptions,
                radio: '1',
                radio3:'Shanghai'
            }
        }
    }
</script>

<style lang="scss">
    img{
        width: 100px;
        height: 100px;
        display: block;
        margin: 0 auto;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>