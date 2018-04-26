<template>
  <div :class="$style.header">
    <div :class="$style.abs" @click="goBack" v-if="isShowAbs">
      <i class="iconfont">&#xe624;</i>
    </div>
    <div :class="$style.fixed" v-if="!isShowAbs" :style="opacityStyle">
      <div :class="$style.h_left">
      <i class="iconfont back-icon">&#xe624;</i>
      </div>
      <div :class="$style.h_center">
       输入城市/景点/游玩主题
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    handleScroll () {
      const height = document.documentElement.scrollTop
      console.log(height)
      if (height > 50) {
        let opacity = height / 138
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.isShowAbs = false
      } else {
        this.isShowAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" module>
.header{
  .abs{
    position: absolute;
    left: 20px;
    top: 20px;
    width: 80px;
    height: 80px;
    line-height: 80px;
    border-radius: 40px;
    background-color: rgba(0, 0, 0, .8);
    text-align: center;
    i{
      font-size:36px;
      color:#fff;
    }
  }
}
.fixed{
  width:100%;
  height: 88px;
  line-height: 88px;
  background-color: #00afc7;
  position: fixed;
  top:0;
  left:0;
  right:0;
  z-index:500;
}
.h_left{
  width:80px;
  height:88px;
  line-height: 88px;
  float:left;
  i{
    display:block;
    text-align:center;
    font-size:36px;
    color:#fff;
  }
}
.h_center{
  overflow: hidden;
  margin: 0 100px;
  line-height: 88px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 32px;
  text-align: center;
  color: #fff;
}
</style>
