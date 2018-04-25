<template>
  <div :class="$style.search">
    <input placeholder="请输入城市名或拼音" v-model="result">
    <div :class="$style.searchContent" ref="search" v-show="result">
      <ul>
        <li v-for="item of list" :key="item.id">
          {{item.name}}
        </li>
        <li v-show="isNoData">没有获取到数据</li>
      </ul>
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
    }
  },
  computed: {
    isNoData () {
      return !this.list.length
    }
  },
  data () {
    return {
      result: '',
      timer: null,
      list: []
    }
  },
  watch: {
    result () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.result) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const target = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.result) > -1 || value.name.indexOf(this.result) > -1) {
              target.push(value)
            }
          })
        }
        console.log(target)
        this.list = target
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="scss" module>
.search{
  height:72px;
  padding:10px;
  background-color: #00bcd4;
  input{
    box-sizing: border-box;
    width: 100%;
    height: 62px;
    padding: 10px;
    line-height: 62px;
    text-align: center;
    border-radius: 6px;
    color: #666;
    outline: none;
  }
}
.searchContent{
  position: absolute;
  top: 170px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: #f5f5f5;
  z-index: 5;
  li{
    line-height: 62px;
    padding-left: 20px;
    background: #fff;
    color: #666;
    border-bottom: 2px solid #f5f5f5;
  }
}
</style>
