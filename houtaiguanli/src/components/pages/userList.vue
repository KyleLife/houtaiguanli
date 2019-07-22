<template>
  <div class="wrapper">
    <el-button @click="toCreat('new-built')">新建</el-button>
    <el-table :data="tableData" height="250" border width="100%">
        <el-table-column label="序号">
            <template slot-scope="scope">{{scope.$index+1}}</template>
        </el-table-column>
        <el-table-column prop="name" label="账号"></el-table-column>
        <el-table-column label="邮箱">
            <template slot-scope="scope">{{scope.row.email}}</template>
        </el-table-column>
        <el-table-column label="时间">
            <template slot-scope="scope">{{scope.row.time.substr(0,10)}}</template>
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button size="mini" @click="toCreat(scope.row.id)">编辑</el-button>
               <v-del :id="scope.row.id" @del="del($event)"></v-del>
            </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
import API from '../../common/api'
export default {
  components: {},
  props: {},
  data() {
    return {
        tableData:[]  
    };
  },
  watch: {},
  computed: {},
  methods: {
      toCreat(id){
          this.$router.push("/index/user/create?id" +id)
      },
      init(){
          this.$http({
              url:API.findUser,
              method:"get"
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
                  console.log(d);
                  this.tableData=d.data.data;
              }else{
                  this.$message({
                      message:d.data.info,
                      type:"warning"
                  })
              }
          })
      },
    del(id){
        this.$http({
            url:API.delUser,
            method:"get",
            params:{
                id:id
            }
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
                this.init();
            }else{
                this.$message({
                    message:d.data.info,
                    type:"warning"
                })
            }
        })
    }
  },
  mounted() {
      this.init()
  }
};
</script>
<style lang="stylus" scoped>
.wrapper {
}
</style>
