<template>
  <div>
    <h5>基本表单</h5>
    <div class="container">
      <div class="form-box">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="表单名称" size="small">
             <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="选择器" size="small">
            <el-select v-model="form.region" placeholder="请选择">
              <el-option label="黑子的篮球" value="黑子的篮球"></el-option>
              <el-option label="网球王子" value="网球王子"></el-option>
              <el-option label="进击的巨人" value="进击的巨人"></el-option>
              <el-option label="斩赤红之瞳" value="斩赤红之瞳"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="日期时间" size="small">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%"></el-date-picker>
            </el-col>
            <el-col :span="2" style="text-align: center">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="城市级联" size="small">
            <el-cascader :options="options" v-model="form.options"></el-cascader>
          </el-form-item>
          <el-form-item label="选择开关" size="small">
              <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="多选框" size="small">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="写轮眼" name="type"></el-checkbox>
              <el-checkbox label="轮回眼" name="type"></el-checkbox>
              <el-checkbox label="白眼" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="单选框" size="small">
            <el-radio-group v-model="form.resource">
              <el-radio label="君焰"></el-radio>
              <el-radio label="青铜御座"></el-radio>
              <el-radio label="镰鼬"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="文本框" size="small">
            <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="small" @click="submit">表单提交</el-button>
            <el-button size="small">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "BaseForm",
        data(){
          return {
            options:[
              {
                value: '广东',
                label: '广东省',
                children: [
                  {
                    value: '广州',
                    label: '广州市',
                    children: [
                      {
                        value: '天河',
                        label: '天河区'
                      },
                      {
                        value: '海珠',
                        label: '海珠区'
                      }
                    ]
                  },
                  {
                    value: '东莞',
                    label: '东莞市',
                    children: [
                      {
                        value: '长安',
                        label: '长安镇'
                      },
                      {
                        value: '虎门',
                        label: '虎门镇'
                      }
                    ]
                  }
                ]
              },
              {
                value: '湖南',
                label: '湖南省',
                children: [
                  {
                    value: '长沙',
                    label: '长沙市',
                    children: [
                      {
                        value: '岳麓',
                        label: '岳麓区'
                      }
                    ]
                  }
                ]
              }
            ],
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: true,
              type: ['步步高'],
              resource: '小天才',
              desc: '',
              options: []
            }
          }
        },
        methods:{
          submit(){
            this.$message.success('提交成功');
            console.log(this.form);
          },
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
  border-radius: 5px;
  .form-box{
    width: 600px;
  }
}


</style>
