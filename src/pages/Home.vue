<template>
  <div class='home'>
      <THeader/>
      <MenuList/>
      <GessLike/>
      
      <div class="all-tuangou">
        <h3>查看全部团购</h3>
      </div>

      <MFooter/>
  </div>
</template>

<script>
import THeader from '../components/Header'
import MenuList from '../components/MenuList'
import GessLike from '../components/GessLike'
import MFooter from '../components/Footer'
// import {getCurPosition} from '../utils/position.js'

export default {
  name: 'home',
  data(){
    return {}
  },
  components: {THeader,MenuList,GessLike,MFooter},
  created(){},
  mounted(){
  },
  methods: {}
}
</script>
<style lang='stylus' scoped>
.all-tuangou
   background #fff;
   border-top:1px solid #ddd8ce;
   border-bottom : 1px solid #ddd8ce;
   padding-left:.2rem;
   color:#FE8C00;
   h3
      font-size: .36rem;
      margin .2rem 0;

</style>
