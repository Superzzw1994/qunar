<template>
<div :class="$style.content" ref="content">
  <div>
  <div :class="$style.hot" v-for="(items, key) of cities" :key ="key" :ref="key">
      <h1>{{key}}</h1>
      <ul>
        <li v-for="item in items" :key ="item.id">{{item.name}}</li>
      </ul>
  </div>
  </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  props: {
    cities: {
      type: Object,
      default () {
        return {}
      }
    },
    letter: {
      type: String,
      default: 'A'
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.content, {
      click: true
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        console.log(this.letter)
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="scss" module>
.hot{
  h1{
    font-size: 24px;
    padding: 0 30px;
    height:72px;
    line-height: 72px;
    background-color: #f5f5f5;
    font-weight: 400;
  }
  ul{
    position: relative;
    overflow: hidden;
    &:before {
    content: '';
    position: absolute;
    left: 25%;
    height: 100%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
    }
    &:after{
      content: '';
      position: absolute;
      left: 75%;
      height: 100%;
      border-left: .02rem solid #ddd;
      border-right: 0;
    }
    li{
      float:left;
      width:25%;
      text-align: center;
      line-height: 90px;
      font-size: 28px;
      color: #212121;
      border-bottom: .02rem solid #ddd;
      &:before {
        content: '';
        position: absolute;
        left: 50%;
        height: 100%;
        border-left: .02rem solid #ddd;
        border-right: .02rem solid #ddd;
      }
    }
  }
}
</style>
