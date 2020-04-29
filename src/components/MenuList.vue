<template>
  <div class='list'>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
            <ul class="menu-list">
                <li v-for="m in menuData" :key="m.id">
                <router-link to="#">
                    <img :src="m.imgUrl">
                    <p>{{m.title}}</p>
                </router-link>
                </li>
            </ul>
        </swiper-slide>
        <swiper-slide>
            <ul class="menu-list">
                <li v-for="m in menuData" :key="m.id">
                <router-link to="#">
                    <img :src="m.imgUrl">
                    <p>{{m.title}}</p>
                </router-link>
                </li>
            </ul>
        </swiper-slide>
       
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import {MenuData} from './MenuData.js'
export default {
  name: 'list',
  data(){
    return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
        },
        menuData:MenuData
    }
  },
  components: { Swiper, SwiperSlide},
  computed: {
    swiper() {
        return this.$refs.mySwiper.$swiper
        }
    },
    mounted() {
    //   console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
}
</script>
<style lang="stylus" scoped>
.list
    height: 3.6rem;
    background: #fff;
    border-bottom: 1px solid #DDD8CE;
    text-align center;

.menu-list
    li
        width: 128px;
        display :inline-block;
        font-size : .28rem;
        a
            display :block;
            height :auto;
            margin :0.13rem 0;
            img 
                width: .8rem;
            p
                margin 0;

.swiper-container
    overflow:visible;

.swiper-pagination
    bottom :-0.5rem;
    .swiper-pagination-bullet
        background :red;
    

</style>
