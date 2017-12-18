<template>
  <div class="app-container">
    <div style="float: left" >
      <el-form  ref="registerForm" :model="registerForm" :rules="RegisterRules" label-width="80px" >
        <el-form-item prop="name" label="用户名">
          <el-input v-model="registerForm.name"></el-input>
        </el-form-item>
        <el-form-item label="登陆密码">
          <el-input type="password" v-model="registerForm.pwd"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input type="password" v-model="registerForm.check_pwd"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="registerForm.identity_code"></el-input>
        </el-form-item>
        <el-form-item label="联系人">
          <el-input v-model="registerForm.identity_code"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="registerForm.identity_code"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱">
          <el-input v-model="registerForm.identity_code"></el-input>
        </el-form-item>
        <el-form-item label="具体地址">
          <el-input v-model="registerForm.identity_code"></el-input>
        </el-form-item>
        <el-form-item label="供电电压">
          <el-input v-model="registerForm.identity_code"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleRegister">
            注册
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--<div style="float: left" >-->
      <!--<el-form  ref="form" :model="form" label-width="80px">-->
        <!--<el-form-item label="用电类别">-->
          <!--<el-input v-model="form.identity_code"></el-input>-->
        <!--</el-form-item>-->
      <!--</el-form>-->
      <!--<el-form  ref="form" :model="form" label-width="80px">-->
        <!--<el-form-item label="行业分类">-->
          <!--<el-input v-model="form.identity_code"></el-input>-->
        <!--</el-form-item>-->
      <!--</el-form>-->
      <!--<el-form  ref="form" :model="form" label-width="80px">-->
        <!--<el-form-item label="最大可响应资源容量">-->
          <!--<el-input v-model="form.identity_code"></el-input>-->
        <!--</el-form-item>-->
      <!--</el-form>-->
      <!--<el-form  ref="form" :model="form" label-width="80px">-->
        <!--<el-form-item label="用户证件类型">-->
          <!--<el-input v-model="form.identity_code"></el-input>-->
        <!--</el-form-item>-->
      <!--</el-form>-->
      <!--<el-form  ref="form" :model="form" label-width="80px">-->
        <!--<el-form-item label="证件号码">-->
          <!--<el-input v-model="form.identity_code"></el-input>-->
        <!--</el-form-item>-->
      <!--</el-form>-->
      <!--<el-form  ref="form" :model="form" label-width="80px">-->
        <!--<el-form-item label="证件名称">-->
          <!--<el-input v-model="form.identity_code"></el-input>-->
        <!--</el-form-item>-->
      <!--</el-form>-->
    <!--</div>-->


  </div>

</template>

<script>
  import { isvalidUsername } from '@/utils/validate'

  export default {
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          console.log('111')
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      }
      return {
        registerForm: {
          name: '',
          pwd: '',
          check_pwd: '',
          identity_code: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        RegisterRules: {
          name: [{ required: true, trigger: 'blur', validator: validateUsername }]
        },
        loading: false
      }
    },
    methods: {
      handleRegister() {
        console.log('111')
        this.$refs.registerForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('UserRegister', this.registerForm).then(() => {
              this.loading = false
              this.$router.push({ path: '/page/form' })
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
//          console.log('222')
//          this.loading = true
//          this.$notify({
//            title: '成功',
//            message: '注册成功',
//            type: 'success',
//            duration: 2000
//          })
//          console.log('333')
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss">
  .app-container {
    div {
      width: 400px;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 300px;
    }
  }


</style>
