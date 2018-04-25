<template>
  <div :class="$style.wrapper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="imgUrl.length">
    <swiper-slide v-for = "item in imgUrl" :key = "item.id"><img :class="$style.img" :src="item.url" alt="1"></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>
<script>
export default {
  mounted () {
    const that = this
    this.$http.get('/api').then(function (res) {
      that.imgUrl = res.data.imgUrl
    })
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: 'my-bullet-active'
        },
        loop: true,
        autoplay: true
      },
      imgUrl: []
    }
  }
}
</script>
<style lang="scss" module>
.wrapper{
  width:100%;
  height:0;
  overflow: hidden;
  padding-bottom: 31.25%;
}
.img{
  width:100%;
}
</style>
<style lang="scss">
.my-bullet-active{
  background-color:#fff;
  opacity: 1;
}
</style>
