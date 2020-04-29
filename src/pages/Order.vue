<template>
  <div class='order'>
      <header>
          <div @click="goback()">
            <img src="/static/left.png" alt="">
          </div>
          <div>
            <h1>提交订单</h1>
          </div>
          
      </header>
      <div class="content-wrap">
          <div class="content-title">
             <h3>吉野家鱼香肉丝饭+冰红茶</h3>
          </div>

          <div class="block">
              ddd
          </div>
          <div class="block">
              ddd
          </div>
          <div class="block">
              ddd
          </div>


          <div class="block" style="margin-top:.2rem;">
              还需支付
          </div>
          <div class="content-title">
             <h3>美团券将发送到您绑定的手机号码</h3>
          </div>
          <div class="block">
              173****3362
          </div>

          <div class="submit" @click="submit()">
              提交订单
          </div>
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'order',
  data(){
    return {}
  },
  components: {},
  created(){},
  mounted(){},
  methods: {
    goback(){
      this.$router.back()
    },
    submit(){
      this.$router.push("/pay")
    }
  }
}
</script>
<style  lang="stylus" scoped>

header
    height :1rem;
    line-height 1rem;
    background :#06c1ae;
    font-size:.36rem;
    display :flex;
    text-align center;
    color:#fff;
    div
      img 
        width:.45rem;
        vertical-align middle;
    div:nth-of-type(1)
      width:1.05rem;
      img 
        width :.45rem;
        margin-top 0;
    div:nth-of-type(2)
     flex:1;
     h1
        font-size:.4rem;


.content-wrap
    .content-title
        border-bottom :solid 1px #ccc;
        h3
            font-size:.36rem;
            font-weight:400;
            margin-top .4rem;
            margin-left:.4rem;
            margin-bottom :.2rem;
    
    .block
        height: 1rem;
        background #fff;
        border-bottom :solid 1px #ccc;
        line-height 1rem;
        font-size:.3rem;
        box-sizing :border-box;
        padding-left .2rem;

    .submit
        width 6rem;
        height 0.9rem;
        text-align center;
        background #f90;
        line-height .9rem;
        font-size:.4rem;
        color:#fff;
        margin:.3rem auto;
        border-radius:5px;
</style>
