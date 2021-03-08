<template>
  <div id="app">
    <HeaderAuth />
    <h2>{{users}}</h2>

  <div class="contain">
    <div class="reserve">

    </div>

  
    <div class="like">
      <div class="card" v-for="(value, index) in shops" :key="index">
        <div class="message"><img :src="value.img_url"></div>
        <div class="content">
          <p class="name">{{value.shopname}}</p>
          <div class="flex2">
            <p>#{{value.area}}</p>
            <p>#{{value.genre}}</p>
          </div>
        </div>
        <button>詳しくみる</button>
      
        <i class="far fa-heart img heart"></i>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import HeaderAuth from "../components/HeaderAuth"
export default{
 components:{
   HeaderAuth
 },
 data(){
   return{
     users:"テストさん",
     shops:[
       {
         shop:"麺類",
         date:"2021/3/8",
         time:"17:00",
         number:"1人"
       },
       {
         shop:"叙々苑",
         date:"2021/４/8",
         time:"19:00",
         number:"3人"
       }
     ]
   }
 }
};

</script>

<style scoped>
* {
     font-family:'メイリオ', 'Meiryo','ＭＳ ゴシック','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif,'Font Awesome 5 Free' ;
}
.contain{
  display: flex;
}
.like{
  display:flex;
  flex-wrap: wrap;
  justify-content:center;
  margin-top: 100px;

}
.flex2{
  display:flex;
  margin-left: 20px;
  font-size: 0.8rem;
}

button{
   background-color: #305DFF;
  color: #ffffff;
  border:0px none;
  cursor: pointer; 
  border-radius: 5px;
  width: 90px;
  height: 30px;
  margin:20px 0 15px 20px;
}
img{
  object-fit: cover;
  width: 100%;
  height: 100%;
    border-radius: 5px 5px 0 0;
}
.message{
  border-radius: 5px 5px 0 0;
  height: 150px;
}
.name{
  margin:15px 15px 10px 20px;
  font-weight: bold;
}
.img{
  color: #eeeeee;
 font-size: 30px;
 margin-left:120px;
 vertical-align: middle;
}
.img.heart{
  animation: heartAnimation .2s;
  /* アイコン色を黒から赤へ変更する */
  color: #e2264d;
}
</style>