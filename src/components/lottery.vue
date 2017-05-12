<template>
    <div class="lottery">
        <ul>
            <li v-for="n in 8" :class="n == 1 ? 'cur' : ''"></li>
        </ul>
        <button>开始</button>
    </div>
</template>
<script>
    export default {
        props:{

        }
    }
</script>
<style lang="sass">

</style>