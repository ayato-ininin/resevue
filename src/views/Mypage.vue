<template>
  <div id="app">
    <HeaderRegister />
    <div class="user">
      <p class="userName">{{this.$store.state.user.name}}さん</p>
    </div>

    <div class="contain">
      <div class="reserve">
        <p class="title">予約状況</p>
        <div class="reserveCard" v-for="(reserve,index) in shops" :key="index">
          <div class="flex">
             <i class="far fa-clock clock"></i>
             <p>予約{{index+1}}</p>
             <i class="far fa-times-circle close" @click="del(index)"></i>
          </div>
          <div class="reserveContain">
            <div class="book">
               <div class="item">
                  <p>Shop</p>
               </div>
               <div class="value">
                  <p>{{reserve.shop}}</p>
              </div>
            </div>
            <div class="book">
               <div class="item">
                  <p>Date</p>
               </div>
               <div class="value">
                  <p>{{reserve.date}}</p>
              </div>
            </div>
            <div class="book">
               <div class="item">
                  <p>Time</p>
               </div>
               <div class="value">
                  <p>{{reserve.time}}</p>
              </div>
            </div>
            <div class="book">
               <div class="item">
                  <p>Number</p>
               </div>
               <div class="value">
                  <p>{{reserve.number}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="likes">
        <div> <p class="title">お気に入り店舗</p></div>
        <div class="like">
           <div class="likeCard" v-for="(value, index) in shops" :key="index">
               <div class="message"><img :src="value.img_url"></div>
               <div class="content">
                  <p class="name">{{value.shopname}}</p>
                  <div class="flexLike">
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
  </div>
</template>

<script>
import HeaderRegister from "../components/HeaderRegister"
export default{
 components:{
   HeaderRegister
 },
 data(){
   return{
     shops:[],
   }
 },
 methods:{
  //  del(index){
  //    axios.delete(
  //      "https://powerful-hollows-86374.herokuapp.com/api/reservations/" + this.
  //    )
  //  }
 }
};

</script>

<style scoped>
* {
     font-family:'メイリオ', 'Meiryo','ＭＳ ゴシック','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif,'Font Awesome 5 Free' ;
}
.contain{
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
}
.like{
  display:flex;
  flex-wrap: wrap;
  justify-content:space-between;
}
.flex{
  display: flex;
}
.flex p{
  margin-top: 20px;
  color:#ffffff;
  font-size: 16px;
  margin-right: 250px;
  
}
.flexLike{
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
.user{
font-weight: bold;
  text-align: center;
  margin-top: 80px;
}
.reserve{
  width: 40%;
  margin-left: 40px;
}
.likeCard{
  width: 295px;
  height: 280px;
  background-color:#ffffff ;
  border:1px solid ;
  margin-right: 55px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.3);
  border:none;
  
}
.reserveCard{
  width: 430px;
  height: 220px;
  background-color:#305DFF ;
  border:1px solid ;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.3);
  border:none;
  color: #ffffff;
  text-align: left;
  padding: 20px 0 20px 0;
}
.likes{
  text-align: left;
  width: 55%;
}
.userName{
  text-align: center ;
  font-weight: bold;
  font-size: 30px;
}
p{
  text-align:left;
}
.book{
  display: flex;
  margin-left: 30px;
  margin-top: 20px;
}
.item p{
  color: #ffffff;
}
.item{
  width:100px;
}
.value p{
  color: #ffffff;
}
i{
  color: #ffffff;

}
.title{
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 50px;
}
.clock{
  margin-top: 16px;
  margin-left: 30px;
  margin-bottom: 20px;
  margin-right: 20px;
  font-size: 23px;
}
.close{
  font-size: 23px;
   margin-top: 16px;
}
</style>