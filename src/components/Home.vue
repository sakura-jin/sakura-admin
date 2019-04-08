<template>
  <div class="sakura">
    <Header></Header>
    <Slidebar></Slidebar>
    <div class="content-box" :class="{'content-collapse':isCollapse}">
      <div class="content">
        <transition name="move" mode="out-in">
            <keep-alive>
               <router-view></router-view>
            </keep-alive>
        </transition>
      </div>

    </div>
  </div>
</template>

<script>
import Header from './Header'
import Slidebar from './Slidebar'
import bus from '../assets/js/bus'
export default {
  name: 'Home',
  data () {
    return {
      isCollapse:false
    }
  },
  components:{
    Header,
    Slidebar,
  },
  created(){
    bus.$on('collapse',msg=>this.isCollapse=msg);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .content-box{
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom: 0;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #e0e0e0;
    .content{
      padding: 10px;
      height: 100%;
      box-sizing: border-box;
      /*overflow-y: scroll;*/
    }
  }
  .move-enter-active,
  .move-leave-active {
    transition: opacity .5s;
  }
  .move-enter,
  .move-leave {
    opacity: 0;
  }
  .content-collapse {
    left: 65px;
  }

</style>
