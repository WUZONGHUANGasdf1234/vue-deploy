<script setup lang="ts">
import BaseLayout from "./BaseLayout.vue";
import {newsList} from "@/http/news.ts";
import {onMounted, ref} from "vue";

export interface News{
  id:number;
  title:string;
  status:string;
  content:string;
}
const newsListData = ref<News[]>([]);
onMounted(async()=>{
  let {total,totalPage,data} =await newsList(1,8);
  newsListData.value = data;
  console.log("新闻数据",newsListData.value);

})

</script>

<template>

    <img id="guet2" src="@/assets/2.png">
    <div >
      <ul class="thrid">
        <li>
          <p>学院新闻</p >
        </li>
      </ul>

      <ul class="fourth">
        <li  v-for="news in newsListData" :key="news.id">
          <router-link :to="{ path: '/app02', query: { id: news.id } }">
            {{ news.title }}
          </router-link>
        </li>

      </ul>
      <img id="guet4" src="@/assets/3.png">
      <ul class="fifth">
        <li>
          <p>通知公告</p >
        </li>
      </ul>

      <ul class="sixth">
        <li>
          <a href="" class="second">数学与计算科学学院2026年硕士研...     03/20</a >
        </li>
        <li>
          <a href="" class="second">数学与计算科学学院2026年硕士...       03/11</a >
        </li>
        <li>
          <a href="" class="second">数学与计算科学学院2026年硕士...     03/09</a >
        </li>
        <li>
          <a href="" class="second">关于我院2026年第一次区级/校级...     03/06</a >
        </li>
        <li>
          <a href="" class="second">桂林电子科技大学2026年张仪同志...     03/06</a >
        </li>
        <li>
          <a href="" class="second">数学与计算科学学院2026年区级...     03/05</a >
        </li>
        <li>
          <a href="" class="second">关于数学与计算科学学院2025-202...       03/02</a >
        </li>
        <li>
          <a href="" class="second">关于数学与计算科学学院2025-202...     03/02</a >
        </li>
      </ul>

      <ul class="seventh">
        <li>
          <p>学术活动</p >
        </li>
      </ul>

      <ul class="eighth">
        <li>
          <a href="" class="second">数学与计算科学学院2026年硕士研...     03/20</a >
        </li>
        <li>
          <a href="" class="second">数学与计算科学学院2026年硕士...       03/11</a >
        </li>
        <li>
          <a href="" class="second">数学与计算科学学院2026年硕士...     03/09</a >
        </li>
        <li>
          <a href="" class="second">关于我院2026年第一次区级/校级...     03/06</a >
        </li>
        <li>
          <a href="" class="second">桂林电子科技大学2026年张仪同志...     03/06</a >
        </li>
        <li>
          <a href="" class="second">数学与计算科学学院2026年区级...     03/05</a >
        </li>
        <li>
          <a href="" class="second">关于数学与计算科学学院2025-202...       03/02</a >
        </li>
        <li>
          <a href="" class="second">关于数学与计算科学学院2025-202...     03/02</a >
        </li>
      </ul>

      <ul class="ninth">
        <li>
          <p>党建工作</p >
        </li>
      </ul>

      <ul class="tenth">
        <li>
          <a href="" class="second">数学与计算科学学院2026年硕士研...     03/20</a >
        </li>
        <li>
          <a href="" class="second">数学与计算科学学院2026年硕士...       03/11</a >
        </li>
        <li>
          <a href="" class="second">数学与计算科学学院2026年硕士...     03/09</a >
        </li>
        <li>
          <a href="" class="second">关于我院2026年第一次区级/校级...     03/06</a >
        </li>
        <li>
          <a href="" class="second">桂林电子科技大学2026年张仪同志...     03/06</a >
        </li>
        <li>
          <a href="" class="second">数学与计算科学学院2026年区级...     03/05</a >
        </li>
        <li>
          <a href="" class="second">关于数学与计算科学学院2025-202...       03/02</a >
        </li>
        <li>
          <a href="" class="second">关于数学与计算科学学院2025-202...     03/02</a >
        </li>
      </ul>

      <ul class="eleventh">
        <li>
          <p>学工新闻</p >
        </li>
      </ul>

      <ul class="twelfth">
        <li>
          <a href="" class="second">数学与计算科学学院2026年硕士研...     03/20</a >
        </li>
        <li>
          <a href="" class="second">数学与计算科学学院2026年硕士...       03/11</a >
        </li>
        <li>
          <a href="" class="second">数学与计算科学学院2026年硕士...     03/09</a >
        </li>
        <li>
          <a href="" class="second">关于我院2026年第一次区级/校级...     03/06</a >
        </li>
        <li>
          <a href="" class="second">桂林电子科技大学2026年张仪同志...     03/06</a >
        </li>
        <li>
          <a href="" class="second">数学与计算科学学院2026年区级...     03/05</a >
        </li>
        <li>
          <a href="" class="second">关于数学与计算科学学院2025-202...       03/02</a >
        </li>
        <li>
          <a href="" class="second">关于数学与计算科学学院2025-202...     03/02</a >
        </li>
      </ul>
      <img id="guet5" src="@/assets/4.png">;
      <ul class="thirteenth">
        <li>
          <p>学院风采</p >
        </li>
      </ul>
      <p class="bottom">友情链接</p >
      <p class="email">
        书记信箱: mathssj@guet.edu.cn	|	院长信箱: mathsyz@guet.edu.cn	|	举报信箱: mathsjb@guet.edu.cn	|	桂林电子科技大学	|	学校本科教学服务网	|	研究生院
      </p >
    </div>



</template>

<style scoped>
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

div{
  width: 990px;
  height: 800px;
  position:relative;
  top:4px;
  left:250px;
}

#guet1{
  width: 490px;
  height: 116px;
  position:relative;
  left:250px;
}

#guet2{
  width: 990px;
  height: 180px;
  position:relative;
  left:250px;
  z-index: 200;
}

#guet4{
  width: 320px;
  height: 250px;
  position:absolute;
  top:4px;
  left:350px;
}

#guet5{
  width: 100%;
  height: 150px;
  position:absolute;
  top:562px;
}
/* 学院新闻头部 */
ul.thrid{
  width: 320px;
  height: 50px;
  line-height:50px;
  position:relative;
  background-color:#275895;
}
/* 学院新闻内容 */
ul.fourth{
  width: 320px;
  height: 200px;
  position:relative;
  background-color:pink;
  border:1px dotted #000;
}
/* 学院新闻字体 */
li a.first{
  display:block;
  color: #000;
  text-decoration: none;
}
/* 学院新闻悬停 */
li a.first:hover{
  color:#1D3F7E;
}
/* 通知公告头部 */
ul.fifth{
  width: 310px;
  height: 50px;
  line-height:50px;
  position:absolute;
  top:4px;
  left:690px;
  background-color:#275895;
}
/* 通知公告内容 */
ul.sixth{
  width: 310px;
  height: 200px;
  position:absolute;
  top:50px;
  left:690px;
  background-color:white;
  border:1px dotted #000;
}
/* 通知公告字体 */
li a.second{
  display:block;
  color: #000;
  text-decoration: none;
}
/* 通知公告悬停 */
li a.second:hover{
  color:#1D3F7E;
}

ul.seventh{
  width: 320px;
  height: 50px;
  line-height:50px;
  position:absolute;
  top:258px;
  background-color:#275895;
}

ul.eighth{
  width: 320px;
  height: 200px;
  position:absolute;
  top:308px;
  background-color:white;
  border:1px dotted #000;
}

ul.ninth{
  width: 320px;
  height: 50px;
  line-height:50px;
  position:absolute;
  left:350px;
  top:258px;
  background-color:#275895;
}

ul.tenth{
  width: 320px;
  height: 200px;
  position:absolute;
  left:350px;
  top:308px;
  background-color:white;
  border:1px dotted #000;
}

ul.eleventh{
  width: 310px;
  height: 50px;
  line-height:50px;
  position:absolute;
  left:690px;
  top:258px;
  background-color:#275895;
}

ul.twelfth{
  width: 310px;
  height: 200px;
  position:absolute;
  left:690px;
  top:308px;
  background-color:white;
  border:1px dotted #000;
}

ul.thirteenth{
  width: 100%;
  height: 50px;
  line-height:50px;
  position:absolute;
  top:508px;
  background-color:#275895;
}

.bottom{
  width: 100%;
  height: 50px;
  line-height:50px;
  position:absolute;
  top:712px;
  border-bottom:2px solid #275895 ;
}

.email{
  position:absolute;
  top:762px;
  font-size:0.8em;
}
footer{
  flex: 1;
  height: 70px;
  color:white;
  background-color: #275895;
  border: 1px solid #DCDCDC;
  position: relative;
  padding-left: 250px;
  padding-top:30px;
}

</style>