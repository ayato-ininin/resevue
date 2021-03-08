<template>
  <div id="app">
    <HeaderAuth />
  <div class="content" v-for="(item,index) in shops" :key="index">
    <div class="name">
    <div class="return_btn"><i class="fas fa-chevron-left left"></i></div>
    <h2 class="title">{{item.shopname}}</h2>
  </div>
    <div class="picture">
      <img :src="item.img_url">
    </div>
    <div class="detail">
      <p>#{{item.area}} #{{item.genre}}</p>
    </div>
    <div class="introduction">
      {{item.introduction}}
    </div>
  </div>


  <div class="reserve">
     <h2 class="title">予約</h2>
    <v-calendar :attributes="attrs" ></v-calendar>    
   
      <div class="time">
        <select v-model="time">
          <option disabled value="" selected>時間を選択してください</option>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
      </div>
      <div class="number">
         <select v-model="number">
           <option disabled value="" selected>人数を選択してください</option>
           <option>1人</option>
           <option>2人</option>
           <option>3人</option>
           <option>4人</option>
           <option>4人以上</option>
         </select>
      </div>
     <div class="contain">
       <p>Date:{{value}}</p>
       <p>Time{{time}}</p>
       <p>Number:{{number}}</p>
     </div>
     <button>予約する</button>
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
     time:"",
     number:"",
     date:"",
     
   shops:[
       {
         id:1,
         shopname:'叙々苑',
         genre:'焼肉',
         area:'大阪府',
         img_url:'https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/yakiniku.jpg',
         introduction:"美味しいお店があるんです。美味しいお店があるんです。美味しいお店があるんです。美味しいお店があるんです。美味しいお店があるんです。美味しいお店があるんです。"
       },
   ],
   
   };
 },


};

</script>

<style scoped>
.return_btn {
  
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 50;
  background-color: #ffffff;
  border-radius: 5px;
  position: relative;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.3);
  text-align: center;

}
.left{
  margin-top: 7px;
}
.content{
  width: 40%;
  height: 70%;

  position:absolute;
  top: 150px;
  left: 100px;
}
.name{
  display: flex;
}
.title{
  font-size: 25px;
  margin-left: 20px;
  margin-top: 2px;
}
img{
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.picture{
  width: 100%;

  margin-top: 40px;
}
.detail{
  margin-top: 30px;
}
.introduction{
  margin-top: 25px;
  line-height: 1.5rem;
}
* {
     font-family:'メイリオ', 'Meiryo','ＭＳ ゴシック','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif,'Font Awesome 5 Free' ;
}
.reserve{
  background-color: #305DFF;
  width: 38%;
  height: 78%;
  position:absolute;
  top: 80px;
  right: 100px;
}
</style>