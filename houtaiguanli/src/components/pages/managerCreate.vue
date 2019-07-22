<template>
  <div class="wrapper">
      <el-from label-width="80px">
          <el-form-item label="账号">
              <el-input v-model="user.name" :disabled="isupdate"></el-input>
          </el-form-item>
          <el-from-item label="密码">
              <el-input v-model="user.pass" :disabled="isupdate"></el-input>
          </el-from-item>
          <el-form-item label="确认密码">
              <el-input v-model="confirm">    
              </el-input>
          </el-form-item>
          <el-item-form  label="属性">
              <el-input v-model="user.prop">
              </el-input>
          </el-item-form>
            <el-item-item label="时间">
                <el-date-picker v-model="user.time" type="date" placeholder="选择时间">
                </el-date-picker>
            </el-item-item>
        <el-button @click="add()" v-if="!isupdate">添加</el-button>
        <el-button @click="update()" v-if="isupdate">修改</el-button>
      </el-from>
  </div>
</template>

<script type="text/ecmascript-6">
import API from '../../common/api'
export default {
  components: {},
  props: {},
  data () {
    return {
        id:"",
        isupdate:false,
        user:{
          name:"",
          pass:"",
          time:"",
          prop:""
        },
        confirm:""   
    };
  },
  watch: {},
  computed: {},
  methods: {
      add(){
          if(this.confirm !=this.user.pass){
              this.$message({
                  message:"两次密码不一致",
                  type:"warning"
              });
              return;
          }
          this.$http({
              url:API.addManager,
              method:"get",
              params:this.user
          }).then(d=>{
              if(d.data.code==-1){
                  this.$message({
                      message:d.data.info,
                      type:"warning"
                  });
                  this.$router.replace("/login");
                  return;
              }
              if(d.data.isok){
                  this.$message({
                      message:d.data.info,
                      type:"success"
                  });
                  this.$router.replace("/index/manager");
                  return;
              }
              this.$message({
                  message:d.data.info,
                  type:"warning"
              })
          })
      },
      update(){
          delete this.user_id
          this.$http({
            url:API.updateManager,
            method:"get",
            params:this.user
          }).then(d=>{
              if(d.data.code==-1){
                  this.$message({
                      message:d.data.info,
                      type:"warning"
                  });
                  this.$router.replace("/login");
                  return;
              }
              if(d.data.isok){
                  this.$message({
                      message:d.data.info,
                      type:"success"
                  });
                  this.$router.replace("/index/manager")
                  return;
              }
              this.$message({
                message:d.data.info,
                type:"warning"
              });            
          })
      }
  },
  mounted () {
      this.id=this.$route.query.id;
      if(this.id=="new"){
          this.isupdata==false;
      }else{
          this.isupdate==true;
          this.$http({
              url:API.findManager,
              method:"get",
              params:{
                  id:this.id
              }
          }).then(d=>{
              this.user.data[0]
          })
      }
  }
};
</script>
<style lang="stylus" scoped>
.wrapper{}
</style>
