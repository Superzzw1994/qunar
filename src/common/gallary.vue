<template>
<div>
  <div :class="$style.gallary" v-if="!ShowModal">
    <div :class="$style.head">
      <i class="iconfont back-icon" @click="goBack">&#xe624;</i> 景区图片
    </div>
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="handleModal">
        <img :src="item.src" alt="">
      </li>
    </ul>
  </div>
  <div :class="$style.modal" v-if="ShowModal">
    <i class="iconfont" @click="handleModal">&#xe624;</i>
    <div :class="$style.wrapper">
      <swiper :options="swiperOption" v-if="list.length">
        <swiper-slide v-for = "item in list" :key = "item.id">
          <img :src="item.src" alt="1">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      isShowModal: false,
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          currentClass: 'my-bullet',
          type: 'fraction'
        },
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    handleModal () {
      this.isShowModal = !this.isShowModal
    }
  },
  mounted () {
    const that = this
    this.$http.get('/api').then(
      function (res) {
        that.list = res.data.list
        console.log(that.list)
      }
    )
  },
  computed: {
    ShowModal () {
      return this.isShowModal
    }
  }
}
</script>

<style lang="scss" module>
.gallary{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: #f5f5f5;
  .head{
    position: fixed;
    width:100%;
    height: 88px;
    background-color: #fff;
    border-bottom: 2px solid #e0e0e0;
    overflow: hidden;
    line-height: 88px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 32px;
    text-align: center;
    color: #333;
    font-weight: normal;
    i{
      width: 88px;
      font-size: 48px;
      color: #333;
      text-align: center;
      position: absolute;
      left:0;
      top:0;
    }
  }
  ul{
    padding: 108px 20px 40px 20px;
    zoom: 1;
    overflow: hidden;
  }
  li{
    float:left;
    width:50%;
    box-sizing: border-box;
    padding-right: 5px;
    margin-bottom: 10px;
    img{
      width:100%;
      display: block;
    }
  }
}
.modal{
  position: absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  background-color: #000;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  i{
    position: absolute;
    font-size:48px;
    color:#fff;
    top:20px;
    left:20px;
  }
  .wrapper{
    z-index: 100;
    img{
      width:100%;
      vertical-align: top;
    }
  }
}
</style>
<style lang="scss">
.swiper-pagination{
  color:#fff!important;
  bottom: 40px;
}
.swiper-container {
  position: static;
}
</style>
