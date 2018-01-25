<template>
  <div class="container">
    <div class="banner">
      <div class="banner-content">
        <h1>你花了多少时间在寻找学习资源而不是学习本身？</h1>
        <el-button type="primary">
          <nuxt-link to="/map">开始学习</nuxt-link>
        </el-button>
      </div>
    </div>
    <MapList></MapList>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import MapList from '~/components/MapList'

export default {
  components: {
    AppLogo,
    MapList
  }
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.el-button {
  a {
    color: #333;
    text-decoration: none;
  }
}

.banner {
  background: linear-gradient(to bottom, #35495e, white);
  height: 350px;
  margin-bottom: 30px;
}

.banner-content {
  width: 1200px;
  margin: 0 auto;
  padding-left: 30px;

  h1 {
    color: white;
    margin-bottom: 30px;
    line-height: 100px;
    align-items: center;
  }
}
</style>
