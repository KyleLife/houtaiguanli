<template>
  <div class="right">
      <h2>{{$route.name}}</h2>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import API from '../../common/api'
export default {

  components: {},
  props: {},
  data () {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  mounted () {}
};
</script>
<style lang="stylus" scoped>
.right{
    flex 1
}
</style>
