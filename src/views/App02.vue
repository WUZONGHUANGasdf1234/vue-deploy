<template>
  <!-- 意思是：只有当 news 里面有 title 的时候，才允许显示下面的内容 -->
  <main v-if="news.title">
    <div style="text-align: center">
      <p class="title">{{ news.title }}</p>
    </div>

    <br />

    <!-- 如果是 HTML 内容 -->
    <div  class="news-content" v-html="news.content"></div>

    <div class="ceshi">
      <h1>测试部署</h1>
    </div>
    <div class="ceshi2">
      <h1>测试部署</h1>
    </div>
  </main>


  <!-- 意思是：如果还没拿到数据，就在页面中间显示“加载中...” -->
  <div v-else>
    加载中...
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getNewsById } from '@/http/news';

const route = useRoute();
const news = ref<{ title?: string; content?: string }>({});

onMounted(async () => {
  const id = Number(route.query.id);
  if (!id) return;

  try {
    const res = await getNewsById(id);
    news.value = res; // 如果 axios 拦截器没包装
    // 或者：news.value = res; // 如果 axios 直接返回响应体

    console.log("新闻详情原始数据:", res);
    console.log("赋值后的 news:", news.value);
  } catch (error) {
    console.error("获取新闻详情失败", error);
  }
});
</script>

<style scoped>

.ceshi{
  background-color: pink;
}
.ceshi2{
  background-color: red;
}

.news-content ::v-deep img {
  max-width: 100% !important;
  height: auto !important;
  display: block;
  margin: 12px auto;
}

/* 使用 /deep/ 或 ::v-deep 是为了让样式穿透 scoped 的限制，影响到 v-html 生成的图片 */
.content-box /deep/ img {
  max-width: 100% !important; /* 关键：限制图片最大宽度为父容器宽度 */
  height: auto !important;     /* 关键：高度自动等比例缩放 */
  display: block;              /* 可选：去除图片底部的空白间隙 */
  margin: 10px 0;              /* 可选：给图片上下加点间距，好看点 */
}

/* 顺便给段落加点样式，防止文字贴边 */
.content-box /deep/ p {
  line-height: 1.8;
  color: #333;
  font-size: 16px;
}


*{
  margin: 0;
  padding: 0;
}
nav.first{
  width: 100%;
  height: 50px;
  background-color: #275895;
  position: relative;
  z-index: 250;
}

ul.first{
  width: 1000px;
  margin:0 auto;
}

ul.second{
  width: 160px;
  background-color: #1D3F7E;
  display:none;
}
li{
  list-style: none;
  box-sizing:border-box;
}
.first > li{
  width: 100px;
  height:50px;
  line-height: 50px;
  /* border:1px solid black; */
  /* background-color: #275895; */
  float:left;
  position:relative;
  z-index: 201;
}
/* 一级li悬停(hover)展开二级菜单 */
.first > li:hover ul{
  display:block;
}
.second > li{
  width: 100%;
  height: 38px;
  line-height:38px;
}
li  a{
  /* 块元素 汇总占据整个父元素 */
  display:block;
  color: white;
  text-decoration: none;
}

/* 一级菜单的hover */
.first > li a:hover{
  background-color: #1D3F7E;
}

.second > li a{
  padding-left: 30px;
}

.second > li a:hover{
  background-color: #275895;
}
#guet1{
  width: 490px;
  height: 116px;
  position:relative;
  left:250px;
}

main{
  border-top:2px solid orangered;
  width: 990px;
  height: 1000px;
  position:relative;
  top:70px;
  left:250px;
}
p{
  text-indent:2em;
  line-height: 1.6;
  font-size:1.3em;
}
.title{
  font-size:1.5em;
}
.title2{
  font-size:0.8em;
  color: #666666;
}
#guet3{
  width: 750px;
  height: 600px;
  position:relative;
  left:125px;
}
footer{
  flex: 1;
  height: 70px;
  color: white;
  background-color: #275895;
  border: 1px solid #DCDCDC;
  position: relative;
  padding-left: 250px;
  padding-top:30px;
}
</style>