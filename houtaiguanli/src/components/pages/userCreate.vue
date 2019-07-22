<template>
  <div class="wrapper">
    <el-form label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="user.name" :disabled="isupdate"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.pass" :disable="isupdate"></el-input>
      </el-form-item>
      <el-form-item lable="电话">
        <el-input v-model="user.tel"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="user.email"></el-input>
      </el-form-item>

      <el-item-form label="性别">
        <el-radio v-model="user.sex" label="男" :disabled="isupdate"></el-radio>
        <el-radio v-model="user.sex" label="女" :disabled="isupdate"></el-radio>
      </el-item-form>
      <el-form-item label="身份证">
        <el-input v-model="user.idx" :disabled="isupdate"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="user.des"></el-input>
      </el-form-item>
      <el-form-item label="时间">
        <el-date-picker v-model="user.time" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
    </el-form>
    <el-input @click="add()" v-if="!isupdate">添加</el-input>
    <el-input @click="update()" v-if="isupdate">修改</el-input>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/api";
export default {
  components: {},
  props: {},
  data() {
    return {
      id: "",
      isupdate: false,
      user: {
        name: "",
        pass: "",
        tel: "",
        time: "",
        sex: "",
        email: "",
        idx: "",
        des: ""
      },
      comfirm: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    add() {
      this.$http({
        url: API.addUser,
        method: "get",
        params: d.data.user
      }).then(d => {
        if (d.data.code == -1) {
          this.$message({
            message: d.data.info,
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
            this.$router.replace("/index/user");
            return;
        }
        this.$message({
            message:d.date.info,
            type:"warning"
        })
      });
    },
    update(){
        delete this.user._id;
        this.$http({
            url:API.updateUser,
            method:"get",
            params:this.user
        }).then(d=>{
            if(d.date.code==-1){
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
                this.$router.replace('/index/user');
                return;
            }
            this.$message({
                message:d.data.info,
                type:"warning"
            }
                
            )
        })
    }
  },
  mounted() {
      this.id=this.$router.query.id;
      if(this.id=="new-built"){
          this.isupdate=false;
      }else{
          this.isupdate=true;
          this.$http({
              url:findUser,
              method:"get",
              params:{
                  id:this.id
              }
          }).then(d=>{
              this.user=d.data.data[0]
          })
      }
  }
};
</script>
<style lang="stylus" scoped>
.wrapper {
}
</style>
