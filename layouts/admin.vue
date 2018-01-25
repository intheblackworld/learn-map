<template>
    <el-container>
        <el-header>哇系后台页首</el-header>
        <el-main>
            <nuxt/>
        </el-main>
        <el-footer>页尾</el-footer>
    </el-container>
</template>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>

