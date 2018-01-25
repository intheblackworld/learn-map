<template>
  <div class="banner">
    <div class="banner-content">
      <h1>你花了多少时间在寻找学习资源而不是学习本身？</h1>
      <button>来个 action button</button>
    </div>
    <div class="searchbar">
      
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
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

.banner {
  background: linear-gradient(to bottom, #35495e, white);
  height: 300px;
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
