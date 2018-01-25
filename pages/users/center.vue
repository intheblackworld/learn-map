<template>
  <div>
    <h1>我是个人中心</h1>
    <li>使用者名称</li>
    <li>给他个徽章之类的，随便</li>
    <li>使用者收藏地图数： 72</li>
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

</style>


