<template>
  <div class='tuangou'>
      <header>
          <div @click="goback()">
            <img src="/static/left.png" alt="">
          </div>
          <div>
            <h1>团购详情</h1>
          </div>
          <div>
            <img src="/static/收藏.png" alt="">
            <p>收藏</p>
          </div>
          <div>
            <img src="/static/导航.svg" alt="">
            <p>导航</p>
          </div>
      </header>
      <div class="cover">
        <img src="/static/f/t-jya.jpg" alt="" srcset="">
      </div>
      <div class="buy-price">
          <div> <span>13元</span> 门市价：21.5 </div>
          <div>
             <div class="buy-button" @click="buyNow()">立即抢购</div>
          </div>
      </div>
      <div class="agreement">
          <ul>
            <li>
                支持随时退款
            </li>
            <li>
                支持过期自动退款
            </li>
            <li>
                已售435656
            </li>
          </ul>
         
      </div>
      <div class="tags-container">
          <div class="tag-header">
              <span>234324评价</span>  》
          </div>
          <div class="tag-list">
             <div class="tag">上菜快111</div>
             <div class="tag">上菜快111</div>
             <div class="tag">上菜快111</div>
             <div class="tag">上菜快111</div>
             <div class="tag">上菜快111</div>
             <div class="tag">上菜快111</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'tuangou',
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
    buyNow(){
      this.$router.push('/order')
    }
  }
}
</script>
<style lang='stylus' scoped>

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
    div:nth-of-type(3)
      width:.9rem;
      font-size:.2rem;
      line-height .24rem;
     img 
        margin-top :.2rem;
    div:nth-of-type(4)
      width:.9rem;
      font-size:.2rem;
      line-height .24rem;
      img 
          margin-top :.2rem;


.buy-price
    height :1.23rem;
    line-height 1.23rem;
    background #fff;
    border-bottom :solid 1px #ccc;
    color:#999;
    span
        font-size: .6rem;
        font-weight:600;
        color:#06c1ae;
    div:nth-of-type(1)
        float left;
        font-size: .3rem;
        line-height:1.23rem;
        padding-left .2rem;
    div:nth-of-type(2)
        float right;
        .buy-button
            width 2.6rem;
            height: .8rem;
            background #f90;
            text-align center;
            line-height .8rem;
            color:#fff;
            font-size:.4rem;
            border-radius:5px;
            margin-top:.2rem;
            margin-right:.2rem;

.agreement
    height: 1.2rem;
    background #fff;
    border-bottom :solid 1px #ccc;
    font-size: .3rem;
    color:#6bbd00;
    padding:.2rem;
    li
      float:left;
      width:50%;
      height .56rem;


.tags-container
    background #fff;
    border-bottom :solid 1px #ccc;
    border-top:solid 1px #ccc;
    margin-top:.2rem;
    .tag-header
        font-size: .3rem;
        color:#999;
        height: 1rem;
        line-height 1rem;
        padding-left .2rem;
        text-align right ;
    .tag-list
        display flex;
        padding:.2rem;
        flex-wrap:wrap;
        .tag
            font-size:.3rem;
            border:solid 1px orange;
            border-radius:5px;
            color:orange;
            padding:5px 10px;
            margin: 10px;

.cover
  img 
    width:100%;
</style>
