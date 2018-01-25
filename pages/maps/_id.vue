<template>
  <el-container>
    <el-main>
      <p>这里是地图，滑鼠移到节点上会有动效tooltip </p>
      <img src="https://cdn-images-1.medium.com/max/2000/1*s6DocnGRV5y0QdZ_JHN6Xg.png" alt="" width="500px">
    </el-main>
    <el-aside>
      <h1></h1>这里是地图详情
      <p>作者：王大明</p>
      <p>被收藏数：722</p>
      <p>协作者：
        <span>老王</span>
        <span>小白</span>
        <span>小新</span>
      </p>
    </el-aside>
  </el-container>
</template>
<script>
export default {
  name: 'map'
}
</script>

<style lang="scss" scoped>
span {
  background: white;
  display: inline-block;
  margin: 0 5px;
}
</style>


