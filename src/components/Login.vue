<template>
  <div class="login">
<el-card class="box-card" >
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="text-align: center;margin:0 auto;">
    <el-form-item><p style="font-size:30px">登录</p></el-form-item>

  <el-form-item label="账号" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>

  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <!-- <el-form-item label="确认" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item> -->
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    <el-button @click="resetForm('ruleForm')">清空</el-button>
  </el-form-item>
</el-form>

</el-card>
  </div>
</template>

<script>
export default {
  name: "Login",
      data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
          // if (!Number.isInteger(value)) {
          //   callback(new Error('请输入密码'));
          // } if {
            if (value.length < 2) {
              callback(new Error('名字至少两位'));
            } else {
              callback();
            }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          // if (this.ruleForm.checkPass !== '') {
          //   this.$refs.ruleForm.validateField('checkPass');
          // }
          callback();
        }
      };
      // var validatePass2 = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请再次输入密码'));
      //   } else if (value !== this.ruleForm.pass) {
      //     callback(new Error('两次输入密码不一致!'));
      //   } else {
      //     callback();
      //   }
      // };
      return {
        ruleForm: {
          pass: '',
          // checkPass: '',
          name: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //提交数据
            console.log(this.ruleForm.name,this.ruleForm.pass)
            alert('yes submit!');
          } else {
            alert('no submit!');
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
};
</script>

<style scoped>
  .text {
    align-content: center;
    display:flex;
    margin: 0 auto;
    font-size: 14px;
  }

  .item {
    display:flex;
    margin: 0 auto;
    /* width: 50%; */
  }

  .box-card {
    align-self: center;
    align-content: center;
    display:flex;
    width: 450px;
    /* padding-left:25%; */
    margin:0 25%;
    opacity: 1;
    margin-top:80px;
    background-color: #ffffff;
  }
</style>