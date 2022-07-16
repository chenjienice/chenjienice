<template>
  <!-- 注册页面的整体盒子 -->
  <div class="reg-container" id="app">
    <!-- 注册的盒子 -->
    <div class="reg-box">
      <!-- 标题的盒子 -->
      <div class="title-box"></div>
      <!-- 注册的表单区域 -->
      <el-form :model="regForm" :rules="regRules" ref="regForm"  class="demo-ruleForm" status-icon>
        <el-form-item prop="username">
          <el-input v-model="regForm.username" prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="regForm.password" prefix-icon="el-icon-lock" placeholder="请输入用密码"></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input v-model="regForm.repassword" prefix-icon="el-icon-lock" placeholder="请输入用密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%;" @click="regHandler">注册</el-button>
          <el-link type="info">去登入</el-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  // vue/multi-word-component-names
  name: 'Reg',
  data() {
    const checkPass = (rule, value, callback) => {
      if (value !== this.regForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      regForm: {
        username: '',
        password: '',
        repassword: ''
      },
      regRules: {
        username: [
          { required: true, message: '请输入0-9位字符', trigger: 'blur' },
          { pattern: /^[a-zA-Z][a-zA-Z0-9]{0,9}$/, message: '请输入0-9位字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码是 6 ~ 15 位的非空字符', trigger: 'blur' },
          { pattern: /^\S{6,15}$/, message: '密码是 6 ~ 15 位的非空字符', trigger: 'blur' }
        ],
        repassword: [
          { required: true, message: '密码是 6 ~ 15 位的非空字符', trigger: 'blur' },
          { pattern: /^\S{6,15}$/, message: '密码是 6 ~ 15 位的非空字符', trigger: 'blur' },
          { validator: checkPass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    regHandler() {
      // 1.绑定事件
      // 2.校验数据
      this.$refs.regForm.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('/api/reg', this.regForm)
        if (res.code !== 0) return this.$message.error(res.message)
        this.$message({
          message: 'res.message',
          type: 'success'
        })
        this.$router.push('/Login')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.reg-container {
  background: url('../../assets/images/login_bg.jpg') center;
  background-size: cover;
  height: 100%;

  .reg-box {
    width: 400px;
    height: 335px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0 20px;

    .title-box {
      height: 60px;
      background: url('../../assets/images/login_title.png') center no-repeat;
    }
  }
}
</style>
