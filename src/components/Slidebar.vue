<template>
  <div class="slide">
    <el-menu
      default-active="/"
      class="el-menu-slide"
      @open="handleOpen"
      @close="handleClose"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      :collapse="isCollapse"
      router>
      <el-menu-item index="/">
          <i class="el-icon-location"></i>
          <span>系统首页</span>
      </el-menu-item>
      <el-menu-item index="/BaseTable">
        <i class="el-icon-menu"></i>
        <span>基础表格</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-star-off"></i>
        <span>Schart</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-rank"></i>
        <span>拖拽组件</span>
      </el-menu-item>
    </el-menu>
  </div>

</template>

<script>
    import bus from '../assets/js/bus'
    export default {
        name: "Slidebar",
        data(){
          return {
            isCollapse:false
          }
        },
        methods:{
          handleOpen(key, keyPath) {
            // console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            // console.log(key, keyPath);
          }
        },
        created(){
            bus.$on('collapse',val=>{
              this.isCollapse=val;
            })
        },
    }
</script>

<style scoped lang="scss">
.slide{
  position: absolute;
  top: 70px;
  left: 0;
  bottom: 0;
  background: purple;
  &>ul{
    height: 100%;
  }
  .el-menu-slide:not(.el-menu--collapse){
    width: 250px;
  }
}
</style>
