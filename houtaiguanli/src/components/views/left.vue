<template>
  <div class="left">
    <router-link to='/index/manager' active-class="" v-if="isAdmin='0'">管理员管理</router-link>
    <router-link to='/index/user' active-class="" v-if="isAdmin='2'">用户管理</router-link>
    <router-link to='/index/publish' active-class="">通知管理</router-link>
  </div>
</template>
<script type="text/ecmascript-6">
import API from '../../common/api'
export default {
  components: {},
  props: {},
  data () {
    return {
        isAdmin:''
    };
  },
  watch: {},
  computed: {},
  methods: {},
  mounted () {
       this.isAdmin=localStorage.getItem("isAdmin")
  }
};
</script>
<style lang="stylus" scoped>
.left
    width 150px   
    height 100vh
    background #F6EBEB

    a  
        color #8A0B15
        display block
        line-height 40px

        padding 0px 20px 0px 20px 
        &:hover
            background #FC0456
            color #6AB1F8
    

</style>
