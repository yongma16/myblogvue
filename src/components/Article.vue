<template>
  <div class="article">
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in data" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      msg: "博客内容",
      data:[
          '数据1',
          '数据2',
          '数据3',
      ]
    };
  },
};
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: auto;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    opacity: 0.6;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
    opacity: 0.6;
  }
</style>