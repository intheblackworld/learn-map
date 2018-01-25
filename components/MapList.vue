<template>
    <div>
        <el-input v-model="input" placeholder="搜寻你的学习地图" clearable>
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-row :gutter="20">
            <el-col :xl="6" :md="6" :sm="12" :xs="12" v-for="map in mapList" :key="map.id">
                <transition name="el-fade-in-linear">
                    <div class="grid-content bg-purple">
                        <div class="img">
                            <i class="el-icon-star-off collect-icon" @click="collect"></i>
                            <img src="" alt="">
                        </div>
                        <div class="content">
                            <p>地图名称：{{map.title}}</p>
                            <p>描述：这是关于React学习的地图</p>
                            <p>价格：现正免费中</p>
                            <p>标签：
                                <span>react</span>
                                <span>前端</span>
                                <span>front-end</span>
                            </p>
                            <p>
                                已收藏进度：52/100
                                <el-button type="primary" round @click="toDetail">查看详情</el-button>
                            </p>
                            <div class="collect-progress-container">
                                <div class="collect-progress"></div>
                            </div>
                        </div>

                    </div>
                </transition>
            </el-col>
        </el-row>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <span>{{dialogMsg}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">没有帐号先注册</el-button>
                <el-button type="primary" @click="dialogVisible = false">登入</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import mapList from '~/assets/fakeData/mapList.js'

export default {
  name: 'MapList',
  data() {
    return {
      input: '',
      rowCount: 100,
      pageIndex: 0,
      pageSize: 12,
      mapList,

      dialogVisible: false,
      dialogMsg: ''
    }
  },

  methods: {
    toDetail() {
      this.dialogMsg = '想要观看地图需要先登入喔'
      this.dialogVisible = true
      //   this.$router.push('/map/1')
    },
    collect() {
      this.dialogMsg = '想要收藏地图需要先登入喔'
      this.dialogVisible = true
    },
    handleClose(done) {
        done()
    }
  }
}
</script>

<style lang="scss" scoped>
.el-input {
  margin-bottom: 50px;
}
.img {
  width: 100%;
  height: 240px;
  background: white;
  position: relative;
}

.collect-icon {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}
.el-col {
  margin-bottom: 20px;
}
.bg-purple {
  background: #d3dce6;
}

.grid-content {
  border-radius: 4px;
  min-height: 100px;
  padding: 5px;
  text-align: left;
}

.content {
  p {
    margin: 5px 0;
  }

  span {
    background: white;
    margin: 0 2.5px;
    border-radius: 3px;
    display: inline-block;
  }
}
.collect-progress-container {
  width: 280px;
  height: 9px;
  margin: 20px 0;
  border-radius: 4.5px / 4.5px;
  background: white;
  position: relative;
}
.collect-progress {
  width: 150px;
  height: 5px;
  border-radius: 2.5px / 2.5px;
  background: rgba(232, 63, 111, 1);
  position: absolute;
  top: 2px;
  left: 2px;
}
</style>


