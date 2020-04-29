<template>
  <div class='home'>
      <THeader/>
      <MenuList/>
      <GessLike/>
      
      <div class="all-tuangou">
        <h3>查看全部团购</h3>
      </div>

      <div class="footer">
         <div style="text-align:left;">
           城市：<span>北京</span>
         </div>
         <div class="footer-menu">
           <ul>
             <li>
               首页
             </li>
             <li>
               我的
             </li>
             <li>
               美团下载
             </li>
             <li>
               电脑版
             </li>
             <li>
               帮助
             </li>

           </ul>
         </div>
         <div class="block">
           友情链接：猫眼电影 大众点评 美团旅行
         </div>
         <div class="block">
           榛果民宿 大众点评下载 美团收银官网
         </div>
         <div class="block">
           美团点评餐饮学院 快驴进货商家合作
         </div>
         <div class="copy-right">
           ©2020 美团网   京ICP证070791号
         </div>
      </div>
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

.footer 
  background #fff;
  font-size : .24rem;
  display flex;
  flex-direction:column;
  padding .4rem .4rem;
  text-align center;
  .block
      height :.5rem;
      margin-top : .1rem;
  .footer-menu
      ul
        width:100%;
        display flex;
        font-size:.24rem;
        margin-top:.3rem;
        color:orange;
        li
          flex:1;
          border-left:solid 1px orange;
          text-align center;

.copy-right
    font-size: .3rem;
    color:#999;
    margin-top : .3rem;
</style>
