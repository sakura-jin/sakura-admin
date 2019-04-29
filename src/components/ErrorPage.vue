<template>
  <div class="error-page">
    <div class="error-code">4<span>0</span>4</div>
    <div class="error-desc">你所访问的页面不存在</div>
    <div class="error-handle">
      <router-link to="/">
        <el-button size="medium" type="primary">返回首页</el-button>
      </router-link>
      <el-button size="medium" type="primary">返回上一页</el-button>
    </div>
  </div>

</template>

<script>
    export default {
        name: "ErrorPage"
    }
</script>

<style scoped lang="scss">
  .error-page{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #fff;
    box-sizing: border-box;
    .error-code{
      font-size: 250px;
      font-weight: bolder;
      color: palevioletred;
    }
    .error-desc{
      font-size: 20px;
      color: #777;
    }
    .error-handle{
      margin-top: 30px;
      .error-btn{
        margin-left: 100px;
      }
    }

  }
</style>
