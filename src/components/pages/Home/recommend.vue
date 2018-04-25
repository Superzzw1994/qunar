<template>
  <div :class="$style.recommend">
    <div :class="$style.title">
      <i :class="$style.logo"></i>
      <span>猜你喜欢</span>
    </div>
    <ul>
      <li :class="$style.item" v-for="(item, index) in recommend" :key="index">
        <div :class="$style.imgwrapper">
          <img :src="item.url" alt="" />
        </div>
        <div :class="$style.info">
          <p :class="$style.target">{{item.title}}</p>
          <div :class="$style.starwrapper">
            <span>{{item.comment}}评论</span>
          </div>
          <div :class="$style.price">
            <span :class="$style.num">￥<em>{{item.num}}</em></span>起
            <span :class="$style.address">{{item.address}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      recommend: []
    }
  },
  mounted () {
    const that = this
    this.$http.get('/api').then(
      function (res) {
        that.recommend = res.data.recommend
      }
    )
  }
}
</script>
<style lang="scss" module>
.recommend{
  background-color: #fff;
}
.title{
  margin-top:20px;
  padding:24px 0 26px 0;
  .logo{
     display: inline-block;
     width:30px;
     height:30px;
     background: url('http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png') no-repeat;
     background-size: 30px 30px;
     margin-left:20px;
  }
  span{
    font-size:32px;
    line-height: 44px;
    color:#212121;
    margin-left:8px;
  }
}
.item{
  display: flex;
  height: 190px;
  overflow: hidden;
  padding: 20px 0;
  margin-left:24px;
}
.imgwrapper{
  img{
    width:200px;
    height:200px;
  }
}
.info{
  padding-left: 22px;
  flex: 1;
  .target{
    margin-top:26px;
    color:#212121;
    font-size:32px;
    line-height: 44px;
  }
}
.starwrapper{
  margin-top:14px;
  height: 34px;
  span{
    color:#616161;
    font-size: 24px;
    line-height: 34px;
    vertical-align: text-bottom;
  }
}
.price{
  position: relative;
  margin-top:22px;
  color:#616161;
  font-size:24px;
  line-height: 40px;
  .num{
    color:#ff8300;
    em{
      font-size: 40px;
      font-style: normal;
    }
  }
  .address{
    position: absolute;
    right:24px;
    bottom: 0;
  }
}
</style>
