<template>
  <div class="sakura">
    <Header></Header>
    <Slidebar></Slidebar>
  </div>
</template>

<script>
import Header from './Header'
import Slidebar from './Slidebar'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Header,
    Slidebar,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
