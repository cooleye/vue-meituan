<template>
  <div class='home'>
      <THeader/>
      <MenuList/>
      <GessLike/>
  </div>
</template>

<script>
import THeader from '../components/Header'
import MenuList from '../components/MenuList'
import GessLike from '../components/GessLike'
export default {
  name: 'home',
  data(){
    return {}
  },
  components: {THeader,MenuList,GessLike},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
</style>
