<template>
  <div :class="$style.header">
    <router-link to="/" :class="$style.back">
      <i class="iconfont">&#xe624;</i>
    </router-link>
    <h2>{{this.currentCity}}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  }
}
</script>

<style lang="scss" module>
.header{
  width:100%;
  line-height: 68px;
  background-color: #00bcd4;
  position: relative;
  h2{
    overflow: hidden;
    margin: 0 100px;
    line-height: 90px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 32px;
    text-align: center;
    color: #fff;
    font-weight: 400;
  }
}
.back{
  text-decoration: none;
  color:#fff;
  display: inline-block;
  position: absolute;
  left:0;
  top:0;
  width:80px;
  line-height:90px;
  i{
    display: block;
    text-align: center;
    font-size: 40px;
  }
}
</style>
