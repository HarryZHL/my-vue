<template>
    <div class="lottery">
        <ul>
            <li v-for="n in 8" :class="n == currentIndex + 1 ? 'cur' : ''"></li>
        </ul>
        <button @click="roll()">开始</button>
    </div>
</template>
<script>
    let rollTimer;
    export default {
        data(){
            return {
                currentIndex: 0,
                times:0,
                rollSpeed: this.speed
            }
        },
        props:{
            //初始转动速度（数值越小越快）
            speed:{
                type:Number,
                default(){
                    return 220
                }
            },
            //最大速度
            maxSpeed:{
                type:Number,
                default(){
                    return 40
                }
            },
            //加速度
            acceleration:{
                type:Number,
                default(){
                    return 10
                }
            },
            //切换基本次数：即至少需要切换多少格子再进入抽奖环节
            cycle:{
                type:Number,
                default(){
                    return 40
                }
            },
            //默认初始位子
            index:{
                type:Number,
                default(){
                    return 0
                }
            },
            //自动进行抽奖
            autoRoll:{
                type:Boolean,
                default(){
                    return false
                }
            },
            //中奖位子
            prize:{
                type:Number,
                default(){
                    return 0
                }
            },
            complete:{
                type:Function,
                default(){

                }
            }
        },
        methods:{
            roll(){
                this.currentIndex < 7 ? this.currentIndex++ : this.currentIndex = 0;
                this.times++;
                let self = this;
                if (this.times > this.cycle + 13 && this.prize === this.currentIndex) {
                    clearTimeout(rollTimer);
                    this.times= 0;
                    this.rollSpeed = this.speed;
                    setTimeout(function(){
                        self.complete();
                    },100);
                }else{
                    if (this.times < this.cycle) {
                        this.rollSpeed -= this.acceleration;
                    }else{
                        if (this.times > this.cycle + 10 && ((this.prize == 0 && this.currentIndex == 7) || this.prize == this.currentIndex + 1)) {
                            this.rollSpeed += (100 + this.acceleration);
                        }else{
                            this.rollSpeed += this.acceleration;
                        }
                    }
                    if (this.rollSpeed < this.maxSpeed) {
                        this.rollSpeed = this.maxSpeed;
                    }
                    rollTimer = setTimeout(function(){
                        self.roll();
                    },self.rollSpeed);
                }
            }
        }
    }
</script>
<style lang="sass">

</style>