<template>
  <el-container>
    <el-main>
      <div class="board">
        这里是编辑中的地图
      </div>
    </el-main>
    <el-aside>
      <h1>工具选单</h1>
      <el-input placeholder="名称"></el-input>
      <el-input placeholder="叙述"></el-input>
      <el-button type="primary">新增节点</el-button>
      <el-button type="primary">新增分支</el-button>
    </el-aside>
  </el-container>
</template>
<script>
export default {
  name: 'createMap'
}
</script>

<style lang="scss" scoped>
  .board {
    background: white;
    min-height: 100vh;
    margin: -20px;
    text-align: center;
  }

  .el-input {
    margin-bottom: 20px;
  }
</style>