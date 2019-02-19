<style lang="less" scoped>
</style>
<template>
<div>
    <h1>About us</h1>
    <el-button>haha</el-button>
</div>
</template>

<script>
export default {
    head() {
        return {
            title: "About Us",
            meta: [{
					hid: "keywords",
                    name: "keywords",
                    content: "about,us"
                },
                {
					hid: "description",
					name: "description",
                    content: "about us"
                }
            ]
        };
    }
};
</script>
