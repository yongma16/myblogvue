<template>
  <div id="app">
    <el-container>
      <el-aside v-if="navigate_flag? false : true">
        <router-link to='/'>
        <svg
          class="icon"
          aria-hidden="true"
          style="width: auto; height: auto; padding-top: 5%"
        >
          <use xlink:href="#iconshejitouxiangai"></use>
        </svg>
        </router-link>
        <el-menu
          default-active=""
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span slot="title">开发人员</span>
            </template>
            <el-menu-item-group>
              <el-submenu index="1-1-1">
                <template slot="title">yma16</template>
                <el-menu-item index="1-1-1-2">stay hungry</el-menu-item>
              </el-submenu>
              <el-submenu index="1-1-2">
                <template slot="title">location</template>
                <el-menu-item index="1-1-2-1">guiyang</el-menu-item>
              </el-submenu>
            </el-menu-item-group>

          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-setting"></i>管理后台</template
            >
            <el-menu-item index="2-1" ><router-link to='/login' style="text-decoration:none">登录</router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link to='/register' style="text-decoration:none">注册</router-link></el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <a v-on:click="changeNavigate"><i class="el-icon-s-promotion"></i></a>
          <i style="font-weight: bold;font-style:normal;">DjangoVue博客</i>
          <i style="float: right;font-style:normal;">欢迎！</i>
          <!-- <a v-on:click="changeNavigate"><i class="el-icon-menu"></i></a> -->
        </el-header>

        <el-main style="padding: 0%">
          <!-- 路由 -->
          <router-view />
        </el-main>

        <el-footer>底部</el-footer>
      </el-container>
    </el-container>
    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
let navigate_flag = true;
export default {
  name: "App",
  data() {
    return {
      msg: "yma16",
      navigate_flag: true,

      value: new Date(),
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      url: "/image/logo/logo.jpg",
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
      ],
      headerData: ["从现在开始，种一棵树", "从现在开始，种一棵树"],
    };
  },
  methods: {
    changeNavigate: function () {
      this.navigate_flag = !this.navigate_flag; //取反
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
html,
body,
#app,
.el-container {
  margin: 0px;
  padding: 0%;
  border: 0px;
  height: 100%;
  /* background: url(../static/utils/fx_background/image/gg.jpg) center top no-repeat; */
  /* background: url(/image/snow/gg.jpg) center top no-repeat; */
}

body {
  background-color: #2f214b;
  /* background: url(/image/snow/gg.jpg) center top no-repeat; */
}

.el-header {
  background-color: #d4beb4;
  /* color: rgb(48, 76, 77); */
  text-align: left;
  line-height: 60px;
  /* background: url(/image/snow/gg.jpg) center top no-repeat; */
}

.el-footer {
  background-color: #bba8a4;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #be9a90;
  color: #333;
  text-align: center;
  line-height: 80px;
  width: 80px;
  min-height: 60px;
}

.activeleft {
  transform: translateX(-100vw);
  /* 左移100 */
}

.activeright {
  transform: translateX(100vw);
  /* 右移100 */
}

.el-main {
  /* background-color: #E9EEF3; */
  /* color: #333; */
  background: url(../static/utils/fx_background/image/gg.jpg) center top
    no-repeat;
  text-align: left;
  opacity: 0.7;
  line-height: 160px;
  /* background: url(../static/utils/fx_background/image/gg.jpg) center top no-repeat; */
}

body > .el-container {
  color: #475669;
  opacity: 0.5;
  padding: 0%;
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.5;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  /* background-image: url("/image/navigation/previewFix.jpg"); */
  transition-duration: 2s;
}

.el-carousel__item:nth-child(2n + 1) {
  /* background-image: url("/image/navigation/original.jpg"); */
  transition-duration: 2s;
}
</style>
