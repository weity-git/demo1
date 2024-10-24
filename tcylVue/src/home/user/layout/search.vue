<script setup>
import product from "./inedx_1.vue"

</script>

<template>
 <div class="flexbox">
    <img src="/1.png" alt="">
    <h1>天铖有利 购物平台</h1>
    <div class="search">
      <div>
      <input type="text" placeholder="请输入想搜索的商品" required>
    </div>
  </div>
</div>
<product></product>
<div class="below">
    <a>售后服务</a>
    <a>关于我们</a>
    <a>订单查询</a>
    <a>其他</a>
</div>
</template>

<style scoped>
 @import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,700"); 
* {
  font-family: Roboto, sans-serif;
  padding: 0;
  margin: 0;
}
html, body {
  width: 100%;
  height: 100%;
}
.flexbox {
  background: linear-gradient(155deg, #55c7ed, #2bb3e0, #3bc1ed);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content:end;
  align-items: center;
  img{
    width: 70px;
    margin-right: auto;
  }
  h1{
    display: block;
    color:aliceblue;
  font-size: 3em;
  font-weight: 600;
  letter-spacing: -0.055em;
    text-shadow: 5px 5px 5px #32d59f;
  }
}

.search {
  margin: 20px;
}
.search > div {
  display: inline-block;
  position: relative;
  filter: drop-shadow(0 1px #0091c2);
}

.search > div:after {
  content: "";
  background: white;
  width: 4px;
  height: 20px;
  position: absolute;
  top: 40px;
  right: 2px;
  transform: rotate(135deg);
}

.search > div > input {
  color: white;
  font-size: 16px;
  background: transparent;
  width: 25px;
  height: 25px;
  padding: 10px;
  border: solid 3px white;
  outline: none;
  border-radius: 35px;
  transition: width 0.5s;
}

.search > div > input::placeholder {
  color: #efefef;
  opacity: 0;
  transition: opacity 150ms ease-out;
}

.search > div > input:focus::placeholder {
  opacity: 1;
}

.search > div > input:focus,
.search > div > input:not(:placeholder-shown) {
  width: 250px;
}

.below a{
    margin: 10%;
}
</style>
