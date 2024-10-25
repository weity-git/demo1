<script setup >
import{ ref ,onMounted} from "vue";
import{post_login_users,post_login_users_code} from "../../uitls/result"
import { useRouter } from 'vue-router';
const phone=ref("");
const code=ref("");
const router=useRouter();
onMounted(()=>{

});

const post_login_users_jk=async()=>{
    console.log(phone.value);
    let result=post_login_users(phone.value);
    console.log((await result).data);
}
const post_add_cart=async()=>{
    let re=post_login_users_code(phone.value,code.value);
    const jk=(await re).data
    console.log(jk);
    localStorage.setItem("token",jk.token);
    localStorage.setItem("userID",jk.userID);
    router.push("/")
}

</script>
<template>
<div class="background-box">
    <div class="logo-box">
        <img src="https://weity.oss-cn-chengdu.aliyuncs.com/logo/1.png" style="filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5));">
        <span>天铖友利 购物平台</span>
    </div>
    <div class="input">
            <span>login</span>
            <br>
            <el-input v-model="phone" style="width: 280px" placeholder="请输入手机号" prefix-icon="User" />
            <br>
            <div>
                <el-input v-model="code" style="width: 180px" placeholder="请输入验证码" prefix-icon="Phone"  show-password/>
                <el-button type="primary" @click="post_login_users_jk" >发送验证码</el-button>
            </div>
            
            <br>
            <div class="buuton">
                <el-button type="primary" @click="post_add_cart" >登录</el-button>
            </div>
        </div>
</div>
</template>
<style scoped>
.background-box{
    width: 100vw;
    height: 100vh;
    margin: 0px;
    padding: 0px;
    background-color: rgb(193,231,194);
   display: flex; 
}
.logo-box{
    margin-top: 15vh;
    width: 50vw;
    height: 85vh;
    display: flex;
    flex-direction: column; /* 纵向排列 */
    align-items: center;
}
.logo-box img{
    width: 564px;
    height: 457px;
}
.logo-box span{
    margin: 2vh;
    font-size: 7vh;
    text-shadow: 1px 1px 2px black, 0 0 25px rgba(67, 67, 73, 0.096), 0 0 5px rgb(62, 62, 70);
    color: rgb(11,109,51);
}

.table{
    width: 20vw;
    height: 10vh;
    display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}
.login{
    
    margin-left: auto;
    margin-right: auto;
    width: 30vw;
    height: 100%;
   /*background-color: aliceblue;*/ 
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}
.input{
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20vw;
    height: 60vh;
    margin:auto;
/*     background-color:antiquewhite; */
}

.input span{
    margin-bottom: 10vh;
    display: flex;
    justify-content: center;
 /*    letter-spacing:30px; */
    font-size: 30px;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgb(101, 149, 240);
}






</style>
