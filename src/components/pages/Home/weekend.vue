<template>
  <div :class="$style.weekend">
    <h2 :class="$style.title">
      周末去哪儿
    </h2>
    <ul>
      <li :class="$style.item" v-for="(item, index) in weekend" :key="index">
        <img :src="item.url" alt="">
        <div :class="$style.content">
          <p :class="$style.name">{{item.name}}</p>
          <p :class="$style.desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      weekend: []
    }
  },
  mounted () {
    const that = this
    this.$http.get('/api').then(
      function (res) {
        that.weekend = res.data.weekend
      }
    )
  }
}
</script>
<style lang="scss" module>
.title{
  height:80px;
  padding-left: 26px;
  line-height: 80px;
  color:#212121;
  font-size:28px;
  font-weight: 400;
}
.item{
  position: relative;
  margin-bottom: 10px;
  img{
    width:100%;
  }
  .content{
    position: relative;
    padding: 14px 20px 20px 20px;
    font-size:24px;
    background-color: #fff;
    .name{
      overflow: hidden;
      padding-right: 140px;
      color: #212121;
      font-size: 28px;
      line-height: 48px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .desc{
      overflow: hidden;
      padding-right: 140px;
      color: #616161;
      font-size: 24px;
      line-height: 42px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
