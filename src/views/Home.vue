<template>
  <div id="app">
    <HeaderAuth />
    <div class="search">
      <div class="area">
        <select v-model="keyword">
          <option value="" selected>All area</option>
          <option>東京都</option>
          <option>大阪府</option>
          <option>名古屋</option>
        </select>
      </div>
      <div class="genre">
         <select v-model="keyword2">
           <option value="" selected>All genre</option>
           <option>寿司</option>
           <option>焼肉</option>
           <option>居酒屋</option>
           <option>イタリアン</option>
           <option>ラーメン</option>
         </select>
      </div>
      <div class="cont">
         <i class="fas fa-search ser"></i><input type="text" v-model="keyword3" placeholder="Search…">
      </div>
    </div>
    <div class="flex">
      <div class="card" v-for="(value, index) in filteredUsers" :key="index">
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
</template>

<script>
import HeaderAuth from "../components/HeaderAuth"
export default{
 components:{
   HeaderAuth
 },
 data(){
   return{
     keyword:"",
     keyword2:"",
     keyword3:"",
     shops:[
       {
         id:1,
         shopname:'叙々苑',
         genre:'焼肉',
         area:'大阪府',
         img_url:'https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/yakiniku.jpg',
       },
       {
         id:2,
         shopname:'麺類',
         genre:'ラーメン',
         area:'東京都',
         img_url:'https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/ramen.jpg',
       },
       {
         id:2,
         shopname:'麺類',
         genre:'ラーメン',
         area:'東京都',
         img_url:'https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/ramen.jpg',
       },
       {
         id:2,
         shopname:'麺類',
         genre:'ラーメン',
         area:'名古屋',
         img_url:'https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/ramen.jpg',
       },
       {
         id:2,
         shopname:'ひばり',
         genre:'ラーメン',
         area:'大阪府',
         img_url:'https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/ramen.jpg',
       },
       {
         id:2,
         shopname:'ひばり',
         genre:'ラーメン',
         area:'東京都',
         img_url:'https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/ramen.jpg',
       },
     ]
   };
 },
 computed:{
   filteredUsers(){
     const usersArray=[];
     for (const i in this.shops){
       const shop = this.shops[i];
       if(shop.shopname.indexOf(this.keyword3) !== -1 && shop.area.indexOf(this.keyword) !== -1 && shop.genre.indexOf(this.keyword2) !== -1){
         usersArray.push(shop);
       }
     }
     return usersArray;
   }
 }
};

</script>

<style scoped>
.search{
  position: absolute; 
  top: 45px;
  right:100px;
  width: 600px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.3);
  display: flex;
}
.card{
  width: 295px;
  height: 280px;
  background-color: #ffffff;
  border:1px solid ;
    margin-right: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.3);
  border:none;
  
}
.flex{
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
.ser{
  font-size: 20px;
   vertical-align: middle;
   margin-top: 5px;
   margin-left: 15px;
   color: #eeeeee;
}
 select{
    border: none;
    padding-right: 15px;
    border-right:1px solid #EEEEEE;
  }
  input{
  height: 40px;
  border: none;
  margin-top: 3px;
  font-size: 15px;
  margin-left: 15px;
}
.area{
  margin-top: 14px;
  margin-left: 15px;
  
}
.genre{
  margin-top: 14px;
  margin-left: 15px;
}
@keyframes heartAnimation {
  0% {
    /* アイコンサイズをもとのより小さくする */
    transform: scale(0.5);
  }
  10% {
    transform: scale(0.7);
  }
  30% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.2);
  }
  80% {
    transform: scale(1.5);
  }
  100% {
    /* もとのサイズに戻す */
    transform: scale(1.0);
  }
 
}
* {
     font-family:'メイリオ', 'Meiryo','ＭＳ ゴシック','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif,'Font Awesome 5 Free' ;
}
</style>