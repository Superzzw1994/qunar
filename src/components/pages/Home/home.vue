<template>
<div :class="$style.home">
  <Hheader></Hheader>
  <hswiper></hswiper>
  <icons></icons>
  <recommend></recommend>
  <weekend></weekend>
</div>
</template>
<script>
import { mapState } from 'vuex'
import header from './header'
import Hswiper from './Hswiper'
import icons from './icons'
import recommend from './recommend'
import weekend from './weekend'
export default {
  components: {
    Hheader: header,
    Hswiper: Hswiper,
    icons: icons,
    recommend: recommend,
    weekend: weekend
  },
  computed: {
    ...mapState({
      city: 'city'
    })
  }
}
</script>
<style lang="scss" module>
.home{
  background-color: #f5f5f5;
}
</style>
