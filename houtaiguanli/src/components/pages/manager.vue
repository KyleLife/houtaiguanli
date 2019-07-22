<template>
  <div class="wrapper">
      <router-view></router-view>
    manager
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
  mounted () {},
    beforeRouteEnter(to,from,next){
        var isAdmin=localStorage.getItem("isAdmin");
        if(isAdmin=='0'){
            next()
        }else{
            next("/index")
        }
  }
};
</script>
<style lang="stylus" scoped>
.wrapper{}
</style>
