<template>
  <div>
    <bannar :id="$route.params.id" :bannar="bannar" :title="title"></bannar>
    <dheader></dheader>
    <list :list="list"></list>
  </div>
</template>

<script>
import bannar from './bannar'
import Dheader from './Dheader'
import list from './list'
export default {
  components: {
    bannar: bannar,
    dheader: Dheader,
    list: list
  },
  data () {
    return {
      list: [],
      title: '',
      bannar: ''
    }
  },
  mounted () {
    const that = this
    this.$http.get('/static/detail.json').then(
      function (res) {
        that.list = res.data.data.categoryList
        that.title = res.data.data.sightName
        that.bannar = res.data.data.bannerImg
      }
    )
  }
}
</script>

<style lang="scss" module>
.content{
  width:100%;
  height:2000px;
}
</style>
