<template>
  <div :class="$style.icons">
    <swiper :options="swiperOption" ref="mySwiper" :class="$style.zzw">
      <swiper-slide v-for="(page, index) in pages" :key="index">
          <div :class="$style.icon" v-for="item in page" :key="item.id">
            <div :class="$style.img">
              <img :src="item.url" alt="">
            </div>
            <div :class="$style.context">{{item.desc}}</div>
          </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  mounted () {
    const that = this
    this.$http.get('/api').then(
      function (res) {
        that.iconsList = res.data.iconUrl
      }
    )
  },
  computed: {
    pages () {
      // 0或1
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: 'icon-bullet-active'
        }
      },
      iconsList: []
    }
  }
}
</script>
<style lang="scss" module>
.icons {
  width:100%;
  height:0;
  padding-top:10px;
  padding-bottom: 50%;
  background-color: #fff;
}
.icon{
  width:25%;
  height:0;
  padding-bottom: 25%;
  float: left;
  position: relative;
  .context{
    position: absolute;
    left:0;
    right:0;
    bottom:44px;
    font-size:28px;
    text-align: center;
    margin-top:20px;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.img{
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:44px;
  box-sizing: border-box;
  padding: 32px 10px 10px 10px;
  img{
    display: block;
    margin:0 auto;
    width:66px;
    height:66px;
  }
}
</style>
<style lang="scss">
.icon-bullet-active{
  background:rgba(0,175,190,.8);
  opacity: 1;
}
</style>
