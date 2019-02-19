<style lang="less" scoped>
</style>
<template>
<div>
    <h1>Home</h1>
    <el-button type="danger" @click="home">默认按钮</el-button>
    <el-button type="success" @click="open">点击打开 Message Box {{name}}</el-button>
</div>
</template>

<script>
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
    data() {
        return {
            name:'jack',
        }
    },
    methods: {
        home() {
            console.log('home')
        },
        open() {
            console.log('444444444444')
        }
    }
};
</script>
