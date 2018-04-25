<template>
  <div :class="$style.hot">
      <h1>字母排序</h1>
      <ul>
        <li v-for="(item, key) of cities" :key ="key" @click="letterSelect">{{key}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  props: {
    cities: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    letterSelect (e) {
      const target = e.target.innerText
      this.$emit('change', target)
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
    li{
      float:left;
      width:16.66666%;
      text-align: center;
      line-height: 90px;
      font-size: 28px;
      color: #212121;
    }
  }
}
</style>
