<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const handleSelect = (value) => {
  if(localStorage.getItem("userID")==null){
    alert("请先登录")
    router.push("/login")
  }
  else{
      // 根据选中的值路由到不同的页面
  window.open(value, '_blank'); // 在新窗口中打开
  }

};
</script>

<template>
  <a-space size="large">
    <a-dropdown @select="handleSelect">
      <a-button>
        <icon-menu :style="{ fontSize: '90%' }" />
      </a-button>
      <template #content>
        <a-doption key="shopping-cart" value="/cart">购物 <el-icon><ShoppingCart /></el-icon></a-doption>
        <a-doption key="orders" value="/orders">订单 <el-icon><List /></el-icon></a-doption>
        <a-doption key="settings" value="/settings">设置 <el-icon><User /></el-icon></a-doption>
      </template>
    </a-dropdown>
  </a-space>
</template>

<style scoped>
.arco-dropdown-open .arco-icon-down {
  transform: rotate(180deg);
}


</style>
