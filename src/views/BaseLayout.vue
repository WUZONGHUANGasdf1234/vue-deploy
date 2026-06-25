<script setup lang="ts">

</script>

<template>
  <header>
      <img id="guet1" src="@/assets/1.png" alt="图片">
      <nav class="first">
        <ul class="first">
          <li>
            <a href="">首页</a>
          </li>
          <li>
            <a href="">学院概况</a>
            <ul class="second">
              <li>
                <a href="">学院简介</a>
              </li>
              <li>
                <a href="">学院领导</a>
              </li>
              <li>
                <a href="">组织机构</a>
              </li>
              <li>
                <a href="">办事指南</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">师资队伍</a>
            <ul class="second">
              <li>
                <a href="">师资队伍简介</a>
              </li>
              <li>
                <a href="">硕士博士导师</a>
              </li>
              <li>
                <a href="">按教师所在部门</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">本科生教育</a>
            <ul class="second">
              <li>
                <a href="">本科生教育</a>
              </li>
              <li>
                <a href="">创新创业</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">研究生教育</a>
            <ul class="second">
              <li>
                <a href="">学位点年度建设</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">科学研究</a>
            <ul class="second">
              <li>
                <a href="">科研平台</a>
              </li>
              <li>
                <a href="">研究团队</a>
              </li>
              <li>
                <a href="">科研项目</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">党建工作</a>
            <ul class="second">
              <li>
                <a href="">支部设置</a>
              </li>
              <li>
                <a href="">专题活动</a>
              </li>
              <li>
                <a href="">理论学习</a>
              </li>
              <li>
                <a href="">基层动态</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">学生工作</a>
            <ul class="second">
              <li>
                <a href="">学生活动</a>
              </li>
              <li>
                <a href="">通知公告</a>
              </li>
              <li>
                <a href="">就业指导</a>
              </li>
              <li>
                <a href="">易班动态</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">人才招聘</a>
          </li>
          <li>
            <a href="">理论学习</a>
          </li>
        </ul>
      </nav>
  </header>
  <main>
    <slot ></slot>
  </main>
  <footer>
    Copyright© 2018 All Rights Reserved. 桂林电子科技大学数学与计算科学学院
  </footer>
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
  background-color:white;
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