<template>
  <div class='header'>
      <div class="city">
            <router-link to="/#">
                {{cityName}} <img  style="height:0.1rem;" src="/static/down.png" alt="">
            </router-link>
      </div>
      <div class="search">
          <div class="input">
              <router-link to="/#">
                  <img src="/static/search.png" alt="">
                  <span>请输入商家名、品类或者商圈...</span>
              </router-link>
          </div>
      </div>
      <div class="me">
          <router-link to="/me">
           <img src="/static/me.png" alt="">
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'theader',
  props:["cityName"],
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

.header
    height: 1rem;
    line-height: 1rem;
    background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
    display: flex;
    font-size: .28rem;
    text-align center;
    .city
        width: 1.5rem;
        font-weight: 600;
    .me
        width: 1rem;
        img 
            width: .48rem;
            vertical-align :middle;
    .search
        flex: 1;
        display: flex;
        align-items: center;
        .input 
            width: 100%;
            height: .64rem;
            line-height .64rem;
            border-radius: 0.18rem;
            background: #fff;
            opacity: 0.8;
            text-align:left;
            a
                display: block;
                width:100%;
                height: 100%;
                font-size :.26rem;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                img 
                    vertical-align: middle;
                    margin-left : 0.2rem;


</style>
