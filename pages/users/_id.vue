<template>
  <div class="container">
    <h1>他是大神</h1>
    <ul>
      <li>名称</li>
      <li>给他个徽章之类的，随便</li>
      <li>地图被收藏次数： 872</li>
      <li color="red">收藏次数最高的地图：<a href=""> 一周学会程式交易</a></li>
    </ul>
    <h1>他的地图</h1>
    <MapList></MapList>
  </div>
</template>
<script>
import MapList from '~/components/MapList'
export default {
  name: 'user',
  components: {
    MapList
  }
}
</script>

<style lang="scss" scoped>
  ul {
    text-align: left;

    li {
      text-align: left;
    }
  }
</style>


