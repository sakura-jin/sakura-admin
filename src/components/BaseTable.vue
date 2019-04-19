<template>
  <div class="table">
    <h5>基础表格</h5>
    <div class="container">
      <div class="handle-box">
        <el-button type="primary" class="handle-del" @click="delAll">批量删除</el-button>
        <el-select placeholder="筛选省份" v-model="selectVal" class="handle-select">
          <el-option key="1" label="广东省" value="广东省"></el-option>
          <el-option key="2" label="湖南省" value="湖南省"></el-option>
        </el-select>
        <el-input v-model="selectWord" placeholder="筛选关键词" class="handle-input"></el-input>
        <el-button type="primary">搜索</el-button>
      </div>

      <el-table :data="tableData" border @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column label="日期" sortable width="150" align="center" prop="date"></el-table-column>
        <el-table-column label="姓名" prop="name" width="120" align="center"></el-table-column>
        <el-table-column label="地址" prop="address" align="center"></el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button size="small" type="primary" @click="handleEdit(scope.$index,tableData)">编辑</el-button>
            <el-button size="small" type="danger" @click="del(scope.$index,tableData)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>

    <!--编辑提示框-->
    <el-dialog title="编辑" :visible.sync="editVisible" width="30%" center>
      <el-form ref="form" :model="form" label-width="50px">
          <el-form-item label="日期" size="small">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="姓名" size="small">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="地址" size="small">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
      </el-form>
      <span slot="footer" >
        <el-button size="small" @click="editVisible=false">取消</el-button>
        <el-button size="small" type="primary" @click="saveEdit">确定</el-button>
      </span>
    </el-dialog>

    <!--删除提示框-->
    <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
        <p class="del-dialog-cnt">删除不可恢复，是否确定删除？</p>
        <span slot="footer" class="dialog-footer">
            <el-button size="small" @click="delVisible=false">取消</el-button>
            <el-button size="small" type="primary" @click="ensureDel">确定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "BaseTable",
        data(){
          return {
            selectVal:'',
            selectWord:'',
            tableData:[],
            url:'',
            delVisible:false,
            editVisible:false,
            idx:0,
            form:{
              name:'',
              date:'',
              address:''
            },
            multipleSelection:[]
          }
        },
        created(){
          this.getData();
        },
        methods:{
          getData(){
              this.$axios.get('../../static/table.json')
                .then((res)=>{
                  this.tableData=res.data.list;
                })
          },
          handleSelectionChange(val){
            this.multipleSelection=val;
            console.log(val);
          },
          //批量删除
          delAll(){
            this.multipleSelection.forEach(item=>{
              this.tableData=this.tableData.filter(i=>i!=item);
            })
            this.multipleSelection=[];
          },
          //点击编辑
          handleEdit(index,rows){
            this.idx=index;
            this.editVisible=true;
            this.form.name=this.tableData[index].name;
            this.form.date=this.tableData[index].date;
            this.form.address=this.tableData[index].address;
          },
          // 确认编辑
          saveEdit(){
            this.$set(this.tableData, this.idx, this.form);
            this.editVisible=false;
          },
          //点击删除
          del(index, rows){
            this.idx=index;
            this.delVisible=true;
          },
          //确认删除
          ensureDel(){
            this.tableData.splice(this.idx,1);
            this.delVisible=false;
            this.$message('删除成功');
          }
        }
    }
</script>

<style scoped lang="scss">
.table{
  width: 100%;
  h5{
    color: #606266;
    margin: 10px 0;
    }
  .container{
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    .handle-box{
      margin-bottom: 20px;
      .handle-del{margin-right: 10px}
      .handle-select{width: 120px;margin-right: 10px}
      .handle-input{width: 300px;}
    }
  }
  .del-dialog-cnt{font-size: 16px;text-align: center}
}


</style>
