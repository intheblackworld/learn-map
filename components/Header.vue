<template>
    <div class="header">
        <p>原形页面完成标记绿色 未完成为灰色</p>
        <nuxt-link to="/" class="finish">首页</nuxt-link>
        <nuxt-link to="/maps" class="finish">找地图</nuxt-link>
        <nuxt-link to="/maps/1" class="finish">第一个地图</nuxt-link>
        <nuxt-link to="/createmap" class="finish">建立地图</nuxt-link>
        <nuxt-link to="/users/center" class="finish">个人中心</nuxt-link>
        <nuxt-link to="/users/1" class="finish">第一个学习大神</nuxt-link>
        <nuxt-link to="/users">学习大神榜</nuxt-link>
        <nuxt-link to="/admin">后台</nuxt-link>
        <el-button type="primary" @click="openLoginDialog">登入</el-button>
        <el-button type="danger" @click="openSignupDialog">注册</el-button>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <span v-html="dialogContent"></span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
    </div>
    
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      dialogVisible: false,
      dialogContent: ''
    }
  },

  methods: {
    openLoginDialog() {
      this.dialogVisible = true
      this.dialogContent = `
            <ul>
                <li>脸书登入</li>
                <li>Google登入</li>
                <li>Github登入</li>
                <li>一般登入</li>
            </ul>
        `
    },
    openSignupDialog() {
      this.dialogVisible = true
      this.dialogContent = `
            <ul>
                <li>脸书注册</li>
                <li>Google注册</li>
                <li>Github注册</li>
                <li>一般注册</li>
            </ul>
        `
    },
    handleClose(done) {
        done()
    }
  }
}
</script>


<style lang="scss" scoped>
.header {
  background: #b3c0d1;
  color: #333;
}

.el-button {
  color: #333;
  float: right;
  margin: 0 5px;
}

p {
  line-height: 20px;
  margin: 0;
}

a {
  color: #666;
  line-height: 20px;
  margin: 0 10px;
  text-decoration: none;
}

.finish {
  color: #41ead4;
  font-weight: bold;
}

.el-dialog {
    height: 500px;
}
</style>
