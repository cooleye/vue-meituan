<template>
  <div class='gess-like'>
      <h3>猜你喜欢</h3>
      <div class="food-item" v-for="f in GessLikeData" :key="f.id">
        <router-link to="/tg">
            <div class="food-cover">
              <img :src="f.imgUrl" alt="">
            </div>
            <div class="food-content">
                <p>{{f.name}}</p>
                <p>{{f.desc}}</p>
                <p><span class="price">{{f.price}}元</span> 门市价：{{f["shop-price"]}}  已售：{{f.selled}}</p>
            </div>
        </router-link>
      </div>

      
      
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'gess-like',
  data(){
    return {
      GessLikeData:[]
    }
  },
  components: {},
  created(){},
  mounted(){
    axios.get("/mock-data/gess-like.json")
    .then(res =>{
      // console.log(res)
      this.GessLikeData = res.data.data
    })
  },
  methods: {}
}
</script>
<style lang="stylus" scoped>
.gess-like
    background: #fff;
    margin-top: .2rem;
    padding-left .2rem;
    border-top :1px solid #DDD8CE;
    h3
        font-size: .34rem;
        text-align left;
        margin-top:.2rem;
        margin-bottom :.2rem;
        font-weight:400;
    .food-item
        height: 2.05rem;
        border-top :1px solid #DDD8CE;
        a
          display flex;
          .food-cover
              width :1.8rem;
              height:1.8rem;
              img
                width:100%;
                height :100%
          .food-content
              flex:1;
              padding-left:.2rem;
              p:nth-of-type(1)
                padding-top: .1rem;
                margin-bottom: .12rem;
                font-size: .3rem;
                font-weight: 400;
                color: #333;
              p:nth-of-type(2)
                font-size: .24rem;
                height: .6rem;
                margin-bottom: .16rem;
                color: #666;
                text-overflow: ellipsis;
              p:nth-of-type(3)
                font-size: .22rem;
                color: #666;
                .price
                    font-size:.32rem;
                    color:#F60;
                    font-weight:600;


</style>
