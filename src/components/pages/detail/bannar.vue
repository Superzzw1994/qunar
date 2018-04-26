<template>
  <div :class="$style.bannar">
    <router-link :to="'/gallary/'+ id">
    <img :src="bannar" alt="">
    </router-link>
    <div :class="$style.bannarInfo">
      <div :class="$style.title">{{title}}</div>
      <div :class="$style.num"><i class="iconfont back-icon">&#xe791;</i><em>11</em></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '1'
    },
    bannar: {
      type: String,
      default: 'https://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_600x330_f68eb231.jpg'
    },
    title: {
      type: String,
      default: '北京野生动物园(AAAA景区)'
    }
  },
  data () {
    return {
      list: []
    }
  }
}
</script>

<style lang="scss" module>
.bannar{
  overflow: hidden;
  height:0;
  padding-bottom: 55%;
  position: relative;
  img{
    width:100%;
    vertical-align: top;
  }
}
.title{
  z-index: 1;
  line-height: 40px;
  color:#fff;
  font-size: 36px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.70);
  position: absolute;
  right:20px;
  bottom:36px;
  left:20px;
  min-height:40px;
}
.num{
  position: absolute;
  left: 20px;
  bottom: 86px;
  width: 120px;
  height: 40px;
  background: rgba(0,0,0,.5);
  border-radius: 20px;
  font-size: 24px;
  color: #fff;
  line-height: 40px;
  text-align: center;
  em{
    margin-left:10px;
    font-style: normal;
  }
}
</style>
