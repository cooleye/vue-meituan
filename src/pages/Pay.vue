<template>
  <div class='pay'>
      <header>
          <div @click="goback()">
            <img src="/static/back.png" alt="">
          </div>
          <div>
            <h1>支付订单</h1>
          </div>
      </header>
      
      <div class="in-order">
         <div class="in-countdown">剩余支付时间 23：50：00</div>
         <div class="in-order-fee">￥ <span>13</span></div>
         <div class="in-order-title">吉野家鱼香肉丝饭+冰红茶</div>
      </div>

      <div class="in-pay-method">
          <div class="in-pay-type-wrapper">
             <img src="/static/mtpay.png" alt="">
             <span>美团支付</span>
             <input type="radio">
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'pay',
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
.pay  
    width:100%;
    height:100%;
    background #fff;

.in-order
    padding:.5rem;
    text-align: center;
    .in-countdown
        font-size: .24rem;
        color:#999;
    .in-order-title
        font-size: .24rem;
        color:#999;
    .in-order-fee
        font-size:.8rem;
        
header
    height :1rem;
    line-height 1rem;
    background :#FAFAFA;
    font-size:.36rem;
    display :flex;
    text-align center;
    border-bottom:solid 1px #ccc;
    div
      img 
        width:.40rem;
        vertical-align middle;
    div:nth-of-type(1)
      width:1.05rem;
      img 
        width :.45rem;
        margin-top 0;
    div:nth-of-type(2)
      flex:1;
      h1
          font-size:.3rem;
          font-weight:400;
          color:#333;

</style>
