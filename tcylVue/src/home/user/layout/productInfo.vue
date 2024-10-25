<script setup>
import { ref , onMounted } from "vue";
import { useRoute ,useRouter} from 'vue-router';
import {get_product_one_list,post_add_product_cart} from "@/home/uitls/result"
import { Notification } from '@arco-design/web-vue';
const route = useRoute();//路由
const router = useRouter();//路由
const product = ref({});//商品对象
const productID=ref();//商品ID
const quantity=ref();//加入购物车数量
const userID=ref();//用户ID
onMounted(()=>{
    productID.value=route.params.id;
    userID.value=localStorage.getItem("userID")
    get_product();
})
const get_product = async () =>{
    let result=get_product_one_list(productID.value);
    product.value=(await result).data
    console.log((await result).data);
    
}

const post_add_product_cart_metod=async () =>{
    if(userID.value===null){
        alert("需要登录才可加入，请先登录")
        router.push("/login")
        
    }
    try {
    const result = await post_add_product_cart(userID.value, productID.value, quantity.value, product.value.price);
    console.log(result);
    
    if (result.code == 1) {
        Notification.success({
          title: '成功',
          content: '商品已成功添加到购物车!',
          position: "topLeft",
      });
    }
  } catch (error) {
    Notification.error({
        title: '错误',
        content: '添加商品到购物车失败，请重试。',
    });
    }
}
</script>

<template>
<div class="big_box">
 <div class="product_box">
    <div class="product_img"> 
        <el-carousel indicator-position="none"  :autoplay="false" height="80vh" >
            <el-carousel-item v-for="imgItem in  product.imageUrls">
                <img :src="imgItem" alt="图片出错"  >
            </el-carousel-item>
            </el-carousel>
    </div>
    <div class="product_txt">
        <div>
        <h1>{{product.productName}}</h1>
        <h1 class="price">￥{{product.price}}</h1>
        <br>
        <h3>{{product.generally}}</h3>
        <a-divider />
        <a-input-number :style="{width:'30%'}" placeholder="Please Enter" :default-value="1" mode="button" class="input-demo"  min="1"  v-model="quantity"/>
        <br>
        <a-divider />
       <!--  <p>上架时间：{{product.listingTime}}</p> -->
        
        <span>库存量：{{product.stock}}</span>
        </div>

        <div class="button">
            <a-button-group> 
                <a-button type="primary" size="large" long="true"  @click="post_add_product_cart_metod">加入购物车</a-button>
                <a-button type="primary" size="large" long="true">立即购买</a-button>
            </a-button-group>
        </div>
    </div>
 </div>
 <div class="commit">

 </div>
</div>
</template>

<style scoped>
.big_box{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: rgb(250, 250, 166);
    background-image: url("../../../../public/1.svg");
    background-repeat: no-repeat;
    background-size: 20%;
    background-attachment: fixed;
    background-position: right top;
    overflow-y: auto;
}
.product_box{
    width: 100%;
    display: flex;
}
.product_img{
    min-width: 40%;
    margin: 20px;
    
}
.product_img img{
    width: auto;
    height: 100%;
    border-radius: 8px;
}
.product_txt{
    width: 30%;
    height: 95%;
    margin-top: 20px;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    border-radius: 2%;
   /*  background-color: antiquewhite; */
   h1{
    display: block;
     margin: 0 auto 25px auto;

  font-size: 3em;
  font-weight: 600;
  letter-spacing: -0.055em;
    text-shadow: 5px 5px 5px #32d59f;
   }
   h2{
    font-size: x-small;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-style: initial;
   }

}
.button{
    margin-top: auto;
    margin-left: auto;
}


</style>
