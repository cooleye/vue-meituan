<template>
  <div class="mfooter">
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
</template>

<script>
export default {
  name: 'mfooter',
  data(){
    return {}
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang="stylus" scoped>

.mfooter 
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
