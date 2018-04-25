<template>
<div :class="$style.tab">
  <ul>
    <li :class="{active:firstChoose}" @click="handleTab">境内</li>
    <li :class="{active:secondChoose}" @click="handleTab">境外.港澳台</li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      firstChoose: true,
      secondChoose: false
    }
  },
  methods: {
    handleTab () {
      this.firstChoose = !this.firstChoose
      this.secondChoose = !this.secondChoose
    }
  }
}
</script>

<style lang="scss" module>
.tab{
  font-size:0;
  background-color: #00bcd4;
  width:100%;
  line-height:90px;
  padding:20px 100px;
  color:#fff;
  box-sizing: border-box;
  border-top: 2px solid gray;
  ul{
    width:100%;
    border:2px solid #fff;
    border-radius: 3px;
    overflow: hidden;
    z-index: 100;
    li{
      float: left;
      width:50%;
      font-size: 28px;
      line-height: 40px;
      text-align: center;
      color: #fff;
    }
  }
}
</style>
<style lang="scss">
.active{
  background-color: #fff!important;
  color: #00bcd4!important;
}
</style>
