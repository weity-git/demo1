<script setup>
import{get_shopping_cart} from "../../uitls/result"
import { onMounted ,ref} from "vue";
const shopping_cart=ref({})
onMounted(()=>{
    get_shopping_cart_jk();
})
const get_shopping_cart_jk=async()=>{
    const userID=localStorage.getItem("userID")
    let result=get_shopping_cart(userID);
    shopping_cart.value=(await result).data;
}

function test(){
    console.log(shopping_cart.value);
}
</script>

<template>
 <button @click="test">11111111</button>
</template>

<style scoped>

</style>
