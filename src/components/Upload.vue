<template>
    <div>
      <h5>图片上传</h5>
      <div class="container">
        <h1>支持拖拽</h1>
        <div class="plugins-tips">
          Element UI自带上传组件。访问地址：<a href="https://element.eleme.cn/#/zh-CN/component/upload" target="_blank">Element UI Upload</a>
        </div>
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <h1>支持裁剪</h1>
        <div class="plugins-tips">
          vue-cropperjs：一个封装了 cropperjs 的 Vue 组件。访问地址：<a href="https://github.com/Agontuk/vue-cropperjs" target="_blank">vue-cropperjs</a>
        </div>
        <div class="crop-demo">
          <img :src="cropImg" class="pre-img" alt="">
          <div class="crop-btn">
            选择图片
            <!--<input class="crop-input" type="file" name="image" accept="image/*" @click="setImage">-->
            <input class="crop-input" type="file" name="image" accept="image/*" @change="setImage"/>
          </div>
        </div>

        <el-dialog title="裁剪图片" :visible.sync="dialogVisible" width="30%">
          <vue-cropper ref='cropper' :src="imgSrc" :ready="cropImage" :zoom="cropImage" :cropmove="cropImage" style="width:100%;height:300px;"></vue-cropper>
          <span slot="footer" class="dialog-footer">
                    <el-button @click="cancelCrop">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
        </el-dialog>
      </div>
    </div>
</template>

<script>
    import VueCropper  from 'vue-cropperjs'
    export default {
        name: "Upload",
        data(){
          return{
            defaultSrc:require('../assets/images/photo.jpg'),
            cropImg: '',
            fileList: [],
            imgSrc: '',
            dialogVisible: false,
          }
        },
        created(){
          this.cropImg=this.defaultSrc;
        },
        components:{
          VueCropper
        },
      methods:{
        setImage(e){
          const file = e.target.files[0];
          if (!file.type.includes('image/')) {
            return;
          }
          const reader = new FileReader();
          reader.onload = (event) => {
            this.dialogVisible = true;
            this.imgSrc = event.target.result;
            this.$refs.cropper && this.$refs.cropper.replace(event.target.result);
          };
          reader.readAsDataURL(file);
        },
        cropImage () {
          this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
        },
        cancelCrop(){
          this.dialogVisible = false;
          this.cropImg = this.defaultSrc;
        }
      },
    }
</script>

<style scoped lang='scss'>
  h5{
    color: #606266;
    margin: 10px 0;
  }
  .container{
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-right: 5px;
    h1{
      font-size: 22px;
      margin: 10px 0;
      color: #1f2f3d;
      line-height: 50px;
    }
    .plugins-tips{
      padding: 20px 10px;
      margin-bottom: 20px;
      background: #eef1f6;
    }
    .crop-demo{
      display: flex;
      align-items: flex-end;
      .pre-img{
        width: 100px;
        height: 100px;
        background: #f8f8f8;
        border: 1px solid #eee;
        border-radius: 5px;
      }
      .crop-btn{
        position: relative;
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin-left: 30px;
        background: #409eff;
        color: #fff;
        border-radius: 4px;
        .crop-input{
          position: absolute;
          width: 100px;
          height: 40px;
          left: 0;
          top: 0;
          opacity: 0;
          cursor: pointer;
        }
      }

    }

  }

</style>
