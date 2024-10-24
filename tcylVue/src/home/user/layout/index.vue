<script setup>
import{get_Product_list}from "@/home/uitls/result"
import { ref , onMounted ,  reactive} from "vue";
//商品基本信息
const product=ref([]);
onMounted(()=>{
    get_product()
})
const get_product= async ()=>{
    let result=get_Product_list();
    product.value=(await result).data
}
</script>

<template>
 <div class="product_big_box">
    <div class="product_car"  v-for="(item,index) in product"> 
        <div class="car">
            <el-carousel indicator-position="none"  :autoplay="false" height="40vh" >
            <el-carousel-item v-for="imgItem in  item.imageUrls">
                <img :src="imgItem" alt="图片出错"  >
            </el-carousel-item>
            </el-carousel>
            <div class="big_box">
                <div class="product_txt">
                  <!--   <span class="productname_txt">{{ item.productName }}
                    </span> -->
                    <span class="productname_txt">￥{{ item.price }}
                    </span>
                </div>
                <div class="buuton">
                    <el-row>
                        <el-button-group>
                            <el-button type="primary" size="small" :icon="ArrowLeft">加入购物车</el-button>
                            <el-button type="primary" size="small">
                            立即购买<el-icon class="el-icon--right"><ArrowRight /></el-icon>
                            </el-button>
                        </el-button-group>
                    </el-row>
                
            </div>
            </div>
            
           
        </div>
       
    </div>
 </div>
</template>

<style scoped>
.product_big_box{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    background-color: rgb(162, 190, 190)
}
.car{
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.product_car{
    width: 20%;
    margin: 2.5%;
    transition: width 2s;
}
.car img{
    width: 100%;
    height: 100%;
    border-radius: 8px;
}
.car:hover {
box-shadow: 0 0 7px 1px rgba(0, 140, 186, 0.5);
}
.productname_txt{
    font-size: 15px;
     color: white;
     padding: 1%;
     text-align: center;
     text-shadow: 2px 2px 4px #cababa;
}
.big_box{
    display: flex;
    padding: 5%;
    flex-wrap: wrap;
}
.product_txt{
    display: flex;
    flex-direction: column;
}
.buuton{
    margin-left: auto;
    
}

</style>
