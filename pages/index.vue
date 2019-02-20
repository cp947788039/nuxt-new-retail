<style lang="less" scoped>
</style>
<template>
<div class="section">
    <banners></banners>
    <div class="row main">
        <h1>Home</h1>
        <el-button type="primary" @click="clickMe">请点击我</el-button>
    </div>
</div>
</template>

<script>
import api from '@/plugins/api'
import banners from '@/components/banners'
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
        banners,
    },
    data() {
        return {
            name:'jack',
        }
    },
    methods: {
        clickMe() {
            this.$tip.alert({
                message:'元宵节快乐，开心嘛!'
            })
        },
    }
};
</script>
