<style lang="less" scoped>

</style>
<template>
<div class="section">
    <slideshow :slideH="'6.5rem'" :effect="'fade'" :imgArr="imgArr"></slideshow>
    <div class="main">
        {{age | uppercase}}
    </div>
</div>
</template>
<script>
import api from '@/plugins/api'
import slideshow from '@/components/slideshow'
export default {
    head() {
        return {
            title: "首页",
            meta: [{
                    name: "keywords",
                    content: "首页"
                },
                {
                    name: "description",
                    content: "首页"
                }
            ]
        };
    },
    components: {
        slideshow,
    },
    data() {
        return {
            imgArr: [ 
                {src:'/images/slideshow/slideshow-01.jpg',alt:'01'},
                {src:'/images/slideshow/slideshow-02.jpg',href:'/',alt:'02'},
                {src:'/images/slideshow/slideshow-03.jpg',href:'/',alt:'03'},
                {src:'/images/slideshow/slideshow-04.jpg',href:'/',alt:'04'}
            ],
            age:'ss'
        }
    }, 
    methods: {
        clickMe() {
            this.$tip.alert({
                message:'元宵节快乐，开心嘛!'
            })
            console.log($('body').html())
        },
    }
};
</script>
