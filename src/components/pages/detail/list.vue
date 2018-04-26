<template>
  <div :class="$style.list">
    <div v-for="(item, index) in list" :key="index" :class="$style.item">
      <div :class="$style.title">
        <span class="iconfont">&#xe609;</span>
        {{item.title}}
      </div>
      <div v-if="item.children" :class="$style.child">
        <detailList :list="item.children"></detailList>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailList',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" module>
.title{
  line-height: 80px;
  font-size:32px;
  padding: 0 20px;
  border-bottom: 2px solid #f5f5f5;
  span{
    display: inline-block;
    width:36px;
    height:36px;
    font-size: 36px;
    margin-right:10px;
    color:#00bcd4;
    text-align: center;
    vertical-align: top;
  }
}
.child{
  padding:0 20px;
}
</style>
