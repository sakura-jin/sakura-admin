<template>
  <header>
    <div class="collapse-btn" @click="collapseChange">
        <i class="el-icon-menu"></i>
    </div>
    <div class="logo">
      悼亡者的归来
    </div>
    <div class="header-right">
      <div class="user-photo"><img src="../assets/images/photo.jpg" alt=""></div>
      <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            sakura
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <a href="https://github.com/sakura-jin/sakura-admin" target="_blank">
              <el-dropdown-item>项目仓库</el-dropdown-item>
            </a>
            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
    import bus from '../assets/js/bus'
    export default {
        name: "Header",
        data(){
          return{
            isCollapse:false
          }
        },
        methods:{
          handleCommand(command){
            if(command=='loginout'){
              this.$router.push('/login');
            }
          },
          collapseChange:function(){
            this.isCollapse=!this.isCollapse;
            bus.$emit('collapse',this.isCollapse);
          },
        },
       mounted(){
         if(document.body.clientWidth<1600){
            this.collapseChange();
          }
         window.onresize=()=>{
           if(document.body.clientWidth<1600){
             this.isCollapse=true;
           }else{
             this.isCollapse=false;
           }
           bus.$emit('collapse',this.isCollapse);
         }
       }
    }
</script>
<style scoped lang="scss">
header{
  width: 100%;
  height: 70px;
  background: #242f42;
  box-sizing: border-box;
  overflow: hidden;
  .collapse-btn{
    float: left;
    line-height: 70px;
    padding: 0 22px;
    cursor: pointer;
    font-size: 22px;
    color: #fff;
  }
  .logo{
    float: left;
    line-height: 70px;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
  }
  .header-right{
    float: right;
    display: flex;
    height: 70px;
    align-items: center;
    margin-right: 50px;
    .user-photo{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 20px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .el-dropdown-link{
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
