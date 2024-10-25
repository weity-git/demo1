<script setup>
import{get_Product_list}from "@/home/uitls/result"
import { ref , onMounted ,  reactive} from "vue";
import { useRouter } from 'vue-router';
//商品基本信息
const product=ref([]);
onMounted(()=>{
    get_product()
})
const get_product= async ()=>{
    let result=get_Product_list();
    product.value=(await result).data
}
//点击弹出另外的页面展示商品详细，传递商品id
const router = useRouter();
const product_one= (id)=>{
    router.push(`/productInfo/${id}`)
}
</script>

<template>
 <div class="product_big_box">
    <div class="product_car"  v-for="(item,index) in product"> 
        <div class="car" >
            <a-carousel   :style="{height: '40vh',}" >
                <a-carousel-item v-for="imgItem in  item.imageUrls">
                <img :src="imgItem" alt="图片出错" @click="product_one(item.productID)">
                </a-carousel-item>
            </a-carousel>
            <div class="big_box">
                <div class="product_txt">
                   <span >{{ item.productName }} </span>
                   <span >￥{{ item.price }}</span>
                </div>
            </div>
        </div>
       
    </div>
 </div>
</template>

<style scoped>
.product_big_box{
    display: flex;
    min-width: 100%;
    flex-wrap: wrap;
    height: 100%;
    background-color: rgb(162, 190, 190)
}
.car{
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.product_car{
    min-width: 20%;
    margin: 2.5%;
    transition: width 2s;
}
.car img{
    width: 100%;
    height: 100%;
}
.car:hover {
box-shadow: 0 0 7px 1px rgba(0, 140, 186, 0.5);
}
.productname_txt1{
    margin-right: auto;
}
.big_box{
    display: flex;
    padding: 5%;
    flex-wrap: wrap;
    
}
.product_txt{
    display: flex;
    width: 100%; 
    justify-content: space-between;
    padding: 10px;   
     span{
     font-size: 15px;
     color: white;
     text-shadow: 2px 2px 4px #cababa;
    }
}



</style>
