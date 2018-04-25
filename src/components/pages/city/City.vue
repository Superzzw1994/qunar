<template>
  <div :class="$style.city">
    <cheader></cheader>
    <search :cities="cities"></search>
    <citylist></citylist>
  </div>
</template>

<script>
import Cheader from './Cheader'
import tab from './tab'
import citylist from './citylist'
import search from './search'
export default {
  components: {
    cheader: Cheader,
    tab: tab,
    search: search,
    citylist: citylist
  },
  data () {
    return {
      cities: {}
    }
  },
  mounted () {
    const that = this
    this.$http.get('/static/city.json').then(
      function (res) {
        that.cities = res.data.data.cities
      }
    )
  }
}
</script>

<style lang="scss" module>

</style>
