<template>
  <div :class="$style.list" ref="wrapper">
    <div>
      <hotcity :hotcity="hotcity"></hotcity>
      <citypick :cities="cities" @change="handleLetterChange"></citypick>
      <div :class="$style.content" ref="content">
  <div :class="$style.hot" v-for="(items, key) of cities" :key ="key" :ref="key">
      <h1>{{key}}</h1>
      <ul>
        <li v-for="item in items" :key ="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
      </ul>
  </div>
</div>
    </div>
  </div>
</template>

<script>
import hotcity from './hotcity'
import citypick from './citypick'
// import citycontent from './citycontent'
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  components: {
    hotcity: hotcity,
    citypick: citypick
  },
  data () {
    return {
      hotcity: [],
      cities: {},
      letter: null
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
    const that = this
    this.$http.get('/static/city.json').then(
      function (res) {
        console.log(res)
        that.hotcity = res.data.data.hotCities
        that.cities = res.data.data.cities
      }
    )
  },
  methods: {
    handleLetterChange (res) {
      console.log(res)
      this.letter = res
    },
    ...mapMutations({
      changeCity: 'changeCity'
    }),
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    }
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
.list{
  position: absolute;
  top:174px;
  left:0;
  bottom: 0;
  right: 0;
  overflow: hidden;
}
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
    width: 25%;
    left: 25%;
    height: 100%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
    }
    &:after{
      content: '';
      position: absolute;
      width: 10%;
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
    }
  }
}
</style>
