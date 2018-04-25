<template>
  <div :class="$style.header">
    <div :class="$style.h_left">
      <i class="iconfont back-icon">&#xe624;</i>
    </div>
    <div :class="$style.h_center"><i class="iconfont">&#xe632;</i> 输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div :class="$style.h_right">城市<i class="iconfont">&#xe64a;</i></div>
    </router-link>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" module>
.header{
  display: flex;
  width:100%;
  line-height: 90px;
  background-color: #00bcd4;
  color:#fff;
}
.h_left{
  width:80px;
  float:left;
  i{
    display:block;
    text-align:center;
    font-size:40px;
  }
}
.h_center{
  flex:1;
  line-height: 60px;
  margin:14px 0;
  padding-left:20px;
  border-radius: 6px;
  background: #fff;
  font-size:28px;
  color:#e4e7ea;
  i{
    font-size:28px;
  }
}
.h_right{
  width:132px;
  float:right;
  text-align: center;
  font-size:28px;
  i{
    font-size:24px;
    margin-left:4px;
  }
}
</style>
