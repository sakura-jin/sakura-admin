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
          <span slot="title">系统首页</span>
      </el-menu-item>
      <el-menu-item index="/BaseTable">
        <i class="el-icon-menu"></i>
        <span slot="title">基础表格</span>
      </el-menu-item>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span slot="title">表单相关</span>
        </template>
        <el-menu-item index="/BaseForm">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">基本表单</span>
        </el-menu-item>
        <el-menu-item index="/Upload">
          <i class="el-icon-upload2"></i>
          <span slot="title">文件上传</span>
        </el-menu-item>
      </el-submenu>


      <el-menu-item index="BaseChart">
        <i class="el-icon-star-off"></i>
        <span slot="title">Schart图表</span>
      </el-menu-item>
      <el-menu-item index="/DragList">
        <i class="el-icon-rank"></i>
        <span slot="title">拖拽组件</span>
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
