<template>
    <el-row  class="container">
        <el-col :span="24" class="header">
            <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
                {{collapsed?'':sysName}}
            </el-col>
            <el-col :span="4" class="userinfo">
                <el-dropdown trigger="hover">
                    <span class="el-dropdown-link userinfo-inner">
                        <img :src="this.sysUserAvatar" alt="">{{sysUserName}}
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>我的消息</el-dropdown-item>
                        <el-drondown-item>设置</el-drondown-item>
                        <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-col>
        <div class="main">
      <v-left></v-left>
      <v-right></v-right>
    </div>
    </el-row>

    
 
</template>

<script type="text/ecmascript-6">
import vLeft from "../views/left";
import vRight from "../views/right";

export default {
  components: {
    vLeft,
    vRight
  },
  props: {},
  data() {
    return {
        username:localStorage.getItem("username"),
        sysName:'后台管理系统',
        collapsed:false,
        sysUserName:'',
        sysUserAvatar:'',
        form:{
            name:'',
            region:'',
            date1: '',
			date2: '',
			delivery: false,
			type: [],
			resource: '',
			desc: ''
        }
    };
  },
  watch: {},
  computed: {},
  methods: {
     
      logout:function(){
          var _this=this;
          this.$comfirm('确认退出吗','提示',{

          }).then(()=>{
              localStorage.removeItem('user');
              _this.$router.replace("/login");
          }).catch(()=>{

          });
      }
  },
  mounted() {
      var user=localStorage.getItem('user');
      if(user){
          user=JSON.parse(user);
          this.sysUserName=user.name || '';
          this.sysUserAvatar=user.avatar || '';
      }
  }
};
</script>
<style lang="stylus" scoped>
    .container
        position absolute
        top 0px
        bottom 0px
        width 100%
        .header
            height 80px
            line-height 80px
            background #59AFF8
            color #fff
        .userinfo
            text-align right
            padding-right 35px
            float right
            .userinfo-inner
                cursor pointer
                color #ffffff
                img 
                width 40px
                height 40px
                border-radius 20px
                margin 10px 0 10px 10px 
                float right
        .logo
            height 60px
            font-size 30px  
            padding 0px 20px 0px 20px

            
   


</style>
