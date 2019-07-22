<template>
  <div class="wrapper">
   
    <div class="box animated flipInY">
        <el-form >
          <h3>后台管理系统</h3>
          <el-form-item>
            <el-select v-model="user.type" placeholder="请选择角色" size="large">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input v-model="user.name" placeholder="请输入账号" size="large"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="user.pass" placeholder="请输入密码" show-password size="large"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="login()" type="primary">登录</el-button>
          </el-form-item>
        </el-form>
      <div id="particles"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import particles from "particles.js";
import API from "../../common/api";
export default {
  components: {},
  props: {},
  data() {
    return {
      user: {
        name: "",
        pass: "",
        type: ""
      },
      options: [
        {
          value: "0",
          label: "超级管理员"
        },
        {
          value: "1",
          label: "普通管理员"
        },
        {
          value: "2",
          label: "用户"
        }
      ]
    };
    
    
  },
  watch: {
   
  },
  computed: {},
  methods: {
    login() {
      this.$http({
        url: API.login,
        method: "post",
        data: this.user
      }).then(d => {
        console.log(d)
        if (d.data.isok) {
          this.$message({
            message: d.data.info,
            type: "success"
          });
          localStorage.setItem("username", this.user.name);
          localStorage.setItem("isAdmin", d.data.isAdmin);
          this.$router.replace("/index");
        } else {
          this.$message({
            message: d.data.info,
            type: "warning"
          });
        }
      });
    }
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  background: url('../../assets/img/login-bg.jpg') center no-repeat;
  background-size: cover;
  overflow: hidden;
  text-align: center;

  .box {
    position: absolute;
    width: 400px;
    height: 300px;
    background: rgba(0, 0, 0, 0.3);
    padding: 20px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    h3 {
      font-size: 30px;
      color: skyblue;
      margin: 10px;
    }
  }
}

</style>
