<script setup lang="ts">

import BaseLayout from "@/views/BaseLayout.vue";
</script>

<template>
    <main>
      <div style="text-align: center;"><p class="title">数学与计算科学学院召开实践教学工作会议</p>
        <br>
      <p class="title2">作者： 时间：2026-04-02 点击数：83</p></div>
      <br>
      <p>4月1日，数学与计算科学学院在花江慧谷4#414会议室召开了实践教学工作会议。学院分管实践教学副院长李郴良、各系部负责人、教学秘书参加会议。</p>
       <p> 会上，李郴良通报了学院“产教融合、科教融汇”工作的推进情况及现存问题，并就各系部实习基地的后续建设规划、大学生创新能力培养等工作进行了部署。</p>
       <p> 与会人员围绕2026届本科毕业设计（论文）中期检查情况、指导教师指导情况、毕设后期工作安排等问题进行了深入讨论，研究并提出了切实可行的改进措施。</p>
      <img id="guet3" src="@/assets/3.png" alt="图片">
    </main>

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