<template>
    <div :class="$style.hot">
      <h1>热门城市</h1>
      <ul v-if="hotcity.length">
        <li v-for="item in hotcity" :key ="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
      </ul>
    </div>
</template>
<script>
export default {
  props: {
    hotcity: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
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
    content: ''!important;
    position: absolute!important;
    left: 33.33333%!important;
    height: 100%!important;
    border-left: .02rem solid #ddd!important;
    border-right: .02rem solid #ddd!important;
    }
    &:after {
    content: ''!important;
    position: absolute!important;
    left: 66.66666%!important;
    height: 100%!important;
    border-left: .02rem solid #ddd!important;
    border-right: .02rem solid #ddd!important;
    }
    li{
      float:left;
      width:33.33333%;
      text-align: center;
      line-height: 90px;
      font-size: 28px;
      border-bottom: .02rem solid #ddd;
      color: #212121;
    }
  }
}
</style>
