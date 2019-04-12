<template>
    <div>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card class="user-card" shadow="hover">
              <div class="user-info">
                <img src="../assets/images/photo.jpg"  alt="">
                <div class="user-info-cont">
                    <p class="user-name">楚子航</p>
                    <p>超级管理员</p>
                </div>
              </div>
              <div class="user-info-list">上次登录时间：<span>2019-02-02</span></div>
              <div class="user-info-list">上次登录地点：<span>卡塞尔学院</span></div>
          </el-card>
          <el-card class="lang-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>语言详情</span>
            </div>
            <span>Vue</span>
            <el-progress :percentage="71.3" color="#42b983"></el-progress>
            <span>JavaScript</span>
            <el-progress :percentage="24.1" color="#f1e05a"></el-progress>
            <span>CSS</span>
            <el-progress :percentage="3.7"></el-progress>
            <span>HTML</span>
            <el-progress :percentage="0.9" color="#f56c6c"></el-progress>
          </el-card>
        </el-col>
        <el-col :span="16">
          <el-row :gutter="20" style="margin-bottom: 20px">
            <el-col :span="8">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <div class="grid grid1">
                    <i class="el-icon-view"></i>
                    <div class="grid-right">
                      <p class="grid-num">9631</p>
                      <p>用户访问量</p>
                    </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <div class="grid grid2">
                    <i class="el-icon-bell"></i>
                    <div class="grid-right">
                      <p class="grid-num">631</p>
                      <p>系统消息</p>
                    </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8" >
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <div class="grid grid3">
                    <i class="el-icon-goods"></i>
                    <div class="grid-right">
                      <p class="grid-num">6888</p>
                      <p>数量</p>
                    </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-card class="things-card" shadow="hover">


          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "Dashboard"
    }
</script>

<style scoped lang="scss">
.user-card{
  height: 252px;
  margin-bottom: 20px;
  .user-info{
    border-bottom:2px solid #ccc;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    img{
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    .user-info-cont{
      margin-left: 50px;
      p{
        color: #999;
        text-align: center;
        white-space: nowrap;
      }
      .user-name{
        font-size: 30px;
        color: #222;
        font-weight: bold;
        margin: 12px;
      }
    }
  }
  .user-info-list{
    line-height: 26px;
    color: #999;
    white-space: nowrap;
    font-size: 14px;
    span{
      margin-left: 40px;
    }
  }
}
.lang-card{
  height: 252px;
  span{font-weight: bold}
  .el-progress{margin-bottom: 4px}
}
.grid{
  height: 100px;
  display: flex;
  align-items: center;
  i{
    line-height: 100px;
    width: 100px;
    text-align: center;
    color: #fff;
    font-size: 50px;
  }
  .grid-right{
    flex: 1;
    p{
      text-align: center;
      color: #999;
      font-size: 14px;
    }
    .grid-num{
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 4px;
    }

  }
}
.grid1 i{background: #2d8cf0;}
.grid2 i{background: #64d572;}
.grid3 i{background: #f25e43;}
.grid1 .grid-right .grid-num{color: #2d8cf0;}
.grid2 .grid-right .grid-num{color: #64d572;}
.grid3 .grid-right .grid-num{color: #f25e43;}

.things-card{
  height: 403px;
}





</style>
