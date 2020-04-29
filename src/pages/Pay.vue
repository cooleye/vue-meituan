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
             <input type="radio" checked name="paytype" >
          </div>
          <div class="in-pay-type-wrapper">
             <img src="/static/wxpay.png" alt="">
             <span>微信支付</span>
             <input type="radio" name="paytype">
          </div>
          <div class="in-pay-type-wrapper">
             <img src="/static/alipay.png" alt="">
             <span>支付宝支付</span>
             <input type="radio" name="paytype">
          </div>
      </div>

      <div class="submit" @click="submit()">
            确认支付
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
  methods: {
    goback(){
      this.$router.back()
    }
  }
}
</script>
<style lang="stylus" scoped>
.pay  
    width:100%;
    height:100%;
    background #fff;
    padding-bottom 1em;
    

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
.in-pay-method
    padding:.2rem;
    .in-pay-type-wrapper
        font-size:.32rem;
        height 1rem;
        line-height 3em;
        border-bottom:solid 1px #ccc;
        img 
            width :.4rem;
            vertical-align middle;
        span 
            margin-left:.3rem;
        input
            float :right;
            margin-right :.5rem;
            margin-top:.5rem;

.submit
    width 6rem;
    height 0.9rem;
    text-align center;
    background linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);;
    line-height .9rem;
    font-size:.3rem;
    font-weight:600;
    color:#333;
    margin:1rem auto;
    border-radius:5px;
    margin-bottom :2rem;


input[type=radio]
      position: relative;
      background #ffffff;
input[type=radio]::before
    content: "";
    display: block;
    width:.5rem;
    height:.5rem;
    background #fff;
    border-radius: .4rem;
    border:solid 1px #888;
    position: absolute;
    left: -15px;
    top: -15px;

input[type=radio]:checked::after
    content: "✔️";
    font-size: 24px;
    width:.52rem;
    height:.52rem;
    position: absolute;
    background: #FFD000;
    border:none;
    border-radius: .4rem;
    left: -15px;
    top: -15px;
    color: #fff;
    text-align center;
    line-height .5rem;


</style>
