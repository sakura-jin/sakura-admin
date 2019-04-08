<template>
  <header>
    <div class="collapse-btn" @click="collapseChange">
        <i class="el-icon-menu"></i>
    </div>
    <div class="logo">
      悼亡者的归来
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
          collapseChange:function(){
            this.isCollapse=!this.isCollapse;
            bus.$emit('collapse',this.isCollapse);
          }
        },
       mounted(){
          if(document.body.clientWidth<1000){
            this.collapseChange();
            alert('fdsfs');
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
}
</style>
