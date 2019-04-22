<template>
    <div>
      <h5>拖拽组件</h5>
      <div class="container">
        <div class="plugins-tips">
          Vue.Draggable：基于 Sortable.js 的 Vue 拖拽组件。
          访问地址：<a href="https://github.com/SortableJS/Vue.Draggable" target="_blank">Vue.Draggable</a>
        </div>
        <div class="drag-box">

           <div class="drag-box-item">
             <div class="item-title">todo</div>

           </div>

        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "DragList",
        data(){
          return{
            dragOptions:{
              animation: 120,
              scroll: true,
              group: 'sortlist',
              ghostClass: 'ghost-style'
            },
            todo: [
              {
                id: 1,
                content: '开发图表组件'
              },
              {
                id: 2,
                content: '开发拖拽组件'
              },
              {
                id: 3,
                content: '开发权限测试组件'
              }
            ],
            doing: [
              {
                id: 1,
                content: '开发登录注册页面'
              },
              {
                id: 2,
                content: '开发头部组件'
              },
              {
                id: 3,
                content: '开发表格相关组件'
              },
              {
                id: 4,
                content: '开发表单相关组件'
              }
            ],
            done:[
              {
                id: 1,
                content: '初始化项目，生成工程目录，完成相关配置'
              },
              {
                id: 2,
                content: '开发项目整体框架'
              }
            ]
          }
        },

    }
</script>

<style scoped lang="scss">
h5{
  color: #606266;
  margin: 10px 0;
}
.container{
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;
  border-right: 5px;
  .plugins-tips{
    padding: 20px 10px;
    margin-bottom: 20px;
    background: #eef1f6;
    a{
      color: #20a0ff;
      text-decoration: none;
    }
  }
}

</style>
