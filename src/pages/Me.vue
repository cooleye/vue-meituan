<template>
  <div class="me">
    <header>
      <div @click="goback()">
        <img src="/static/icon-left.png" alt="">
      </div>
      <div>
        <h1>我的美团</h1>
      </div>
      <div>
        <img src="/static/Home-b.png" alt="">
      </div>
      <div>
        <img src="/static/search-b.png" alt="">
      </div>
    </header>

    <!-- banner -->
    <div class="banner">

      <div class="avatar">
          <img src="/static/avatar.png" alt="" srcset="">
      </div>
      <div class="banner-content">
          <p>32432fd564563</p>
          <p>账户余额：0</p>
      </div>
      <div class="more">
          <img src="/static/right.png" alt="">
      </div>

    </div>

    <!-- 全部订单 -->
    <div class="all-order">
        <div class="all-order-title">
          <div>
            <img src="/static/order.png" alt="">  
          </div>  
          <div><h3>全部订单</h3></div>
          <div>
            <img src="/static/right.png" style="width:.3rem;"  alt="">
          </div>
        </div>
        <div class="all-order-content">
            <div>
              <img src="/static/fk.png" alt="">
              <p>代付款</p>
            </div>
            <div>
              <img src="/static/dsy.png" alt="">
              <p>代使用</p>
            </div>
            <div>
              <img src="/static/pj.png" alt="">
              <p>代评价</p>
            </div>
            <div>
              <img src="/static/sh.png" alt="">
              <p>退款/售后</p>
            </div>
          
        </div>
    </div>

    <div class="blocks">
      <div class="block">
        <div>
          <img src="/static/msc.png" alt="">
        </div>
        <div>
          <p>我的收藏</p>
        </div>
        <div>
          <img src="/static/right.png" alt="">
        </div>
      </div>
      <div class="block">
        <div>
          <img src="/static/quan.png" alt="">
        </div>
        <div>
          <p>我的抵用券</p>
        </div>
        <div>
          <img src="/static/right.png" alt="">
        </div>
      </div>
      <div class="block">
        <div>
          <img src="/static/cj.png" alt="">
        </div>
        <div>
          <p>我的抽奖单</p>
        </div>
        <div>
          <img src="/static/right.png" alt="">
        </div>
      </div>
      <div class="block">
        <div>
          <img src="/static/jifen.png" alt="">
        </div>
        <div>
          <p>积分换礼品</p>
        </div>
        <div>
          <img src="/static/right.png" alt="">
        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer';
export default {
  name: "me",
  data() {
    return {};
  },
  components: {Footer},
  created() {},
  mounted() {},
  methods: {
    goback() {
      this.$router.back();
    }
  }
};
</script>
<style  lang="stylus" scoped>

.me
  background #f0efed;

header {
  height: 1rem;
  line-height: 1rem;
  background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
  font-size: 0.36rem;
  display: flex;
  text-align: center;
  color: #000;

  div {
    img {
      width: 0.45rem;
      vertical-align: middle;
    }
  }

  div:nth-of-type(1) {
    width: 1.05rem;

    img {
      width: 0.45rem;
      margin-top: 0;
    }
  }

  div:nth-of-type(2) {
    flex: 1;

    h1 {
      font-size: 0.4rem;
    }
  }

  div:nth-of-type(3) {
    width: 0.9rem;
    font-size: 0.2rem;
  }

  div:nth-of-type(4) {
    width: 0.9rem;
    font-size: 0.2rem;
  }
}


.banner
    width:100%;
    height :2rem;
    background : url('/static/banner.png') no-repeat;
    border-bottom : solid 1px #aaa;
    border-top:solid 1px #ccc;
    margin-top:-2px;
    .avatar
        width 1.1rem;
        height 1.1rem;
        text-align center;
        line-height 1.1rem;
        background #fff;
        border solid 1px #ccc;
        border-radius: 1rem; 
        margin-left:.4rem;
        margin-top:.4rem;
        float left;
        img 
          width 100%;
    .banner-content
        margin-top .4rem;
        font-size:.3rem;
        width :3rem;
        text-align left ;
        margin-left .2rem;
        float left
        p:nth-of-type(1)
            height .5rem;
        p:nth-of-type(2)
            font-size: .24rem;
            height .5rem;
    .more 
        float right
        magin-right .2rem;
        margin-top:.4rem;
        margin-right: .2rem;
        img
          width:.36rem;
          vertical-align middle;
          display block;
        p
          margin-top:-0.1rem;

.all-order
  background #fff;
  margin-top: .2rem;
  border-top: solid 1px #ccc;
  .all-order-title
    height .94rem;
    line-height .94rem;
    box-sizing border-box;
    padding 0 .2rem;
    div
      float left;
      font-size: .3rem;
      h3
        font-weight 400;
      img 
        width:.5rem;
        vertical-align middle;
    :nth-of-type(2)
      h3
        margin-left: .2rem;
        font-size:.3rem;
    :nth-of-type(3)
      float right;
  .all-order-content
    height 1.6rem;
    border-top:solid 1px #ccc;
    border-bottom: solid 1px #ccc;
    display flex;
    div
      flex:1;
      text-align center;  
      line-height .8rem;
      img 
        width: .5rem;
      p
        font-size: .3rem;

      
.blocks
  margin-top:.2rem;
  background #fff;
  border-top:solid 1px #ccc;
  .block
    height: .94rem;
    display flex;
    line-height .94rem;
    border-bottom:solid 1px #ccc;
    div
      img
        width:.5rem;
      p
        font-size: .3rem;
        font-weight: 400;
    div:nth-of-type(1)
      width : 1rem;
      text-align center;
      img   
        vertical-align middle;
    div:nth-of-type(2)
      flex:1;
    div:nth-of-type(3)
      width : 1rem;
      text-align center;
      img 
        width .3rem;
        vertical-align middle;

</style>
