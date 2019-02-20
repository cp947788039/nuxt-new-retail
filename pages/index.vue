<style lang="less" scoped>

</style>
<template>
<div class="section">
    <slideshow :slideH="slideH" :imgArr="imgArr"></slideshow>
    <div class="main">
       
    </div>
</div>
</template>

<script>
import api from '@/plugins/api'
import slideshow from '@/components/slideshow'
export default {
    head() {
        return {
            title: "Index",
            meta: [{
                    name: "keywords",
                    content: "index"
                },
                {
                    name: "description",
                    content: "index"
                }
            ]
        };
    },
    components: {
        slideshow,
    },
    data() {
        return {
            slideH: '6.5rem',
            imgArr: [
                {src:'/images/slideshow/slideshow-01.jpg',alt:'01'},
                {src:'/images/slideshow/slideshow-02.jpg',href:'/',alt:'02'},
                {src:'/images/slideshow/slideshow-03.jpg',href:'/',alt:'03'},
                {src:'/images/slideshow/slideshow-04.jpg',href:'/',alt:'04'}
            ],
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
