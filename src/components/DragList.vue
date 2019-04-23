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
             <draggable v-model="todo" v-bind="dragOptions">
               <transition-group tag="div" id="todo" class="item-ul">
                 <div v-for="item in todo" class="drag-list" :key="item.id">
                   {{item.content}}
                 </div>
               </transition-group>
             </draggable>
           </div>

          <div class="drag-box-item">
            <div class="item-title">doing</div>
            <draggable v-model="doing" v-bind="dragOptions">
              <transition-group tag="div" id="doing" class="item-ul">
                <div v-for="item in doing" class="drag-list" :key="item.id">
                  {{item.content}}
                </div>
              </transition-group>
            </draggable>
          </div>

          <div class="drag-box-item">
            <div class="item-title">done</div>
            <draggable v-model="done" v-bind="dragOptions">
              <transition-group tag="div" id="done" class="item-ul">
                <div v-for="item in done" class="drag-list" :key="item.id">
                  {{item.content}}
                </div>
              </transition-group>
            </draggable>
          </div>
        </div>

      </div>
    </div>
</template>
<script>

    import draggable from 'vuedraggable'
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
                content: '火影忍者'
              },
              {
                id: 2,
                content: '东京食尸鬼'
              },
              {
                id: 3,
                content: '进击的巨人'
              }
            ],
            doing: [
              {
                id: 4,
                content: '斩赤红之瞳'
              },
              {
                id: 5,
                content: '黑子的篮球'
              },
              {
                id: 6,
                content: '网球王子'
              },
              {
                id: 7,
                content: '通灵王'
              }
            ],
            done:[
              {
                id: 8,
                content: '灌篮高手'
              },
              {
                id: 9,
                content: '七龙珠'
              }
            ]
          }
        },
        components:{
        draggable
        }

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
  .drag-box{
    display: flex;
    .drag-box-item{
      flex: 1;
      max-width: 330px;
      min-width: 300px;
      background: #eff1f5;
      margin-right: 16px;
      border-radius: 6px;
      border: 1px solid #e1e4e8;
      .item-title{
        padding: 8px 8px 8px 12px;
        color: #24292e;
        font-weight: 600;
      }
      .item-ul{
        padding: 0px 8px 8px;
        height: 500px;
        overflow-y: auto;
        .drag-list{
          border: 1px solid #e1e4e8;
          padding: 10px;
          margin: 5px 0 10px;
          background: #fff;
          border-radius: 6px;
          cursor: pointer;
          -webkit-transition: border .3s ease-in;
          transition: border .3s ease-in;
        }
      }

    }
  }
}
.item-ul::-webkit-scrollbar{
  width: 0;
}
.ghost-style{
  display: block;
  color: transparent;
  border-style: dashed;
}

</style>
