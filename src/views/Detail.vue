<template>
<div id="app">
  <HeaderRegister />
  <div class="main">
    <div class="content">
        <div class="name">
           <div class="return_btn" @click="$router.push('/')">
             <i class="fas fa-chevron-left left"></i>
           </div>
           <h2 class="title">{{shops.shopname}}</h2>
        </div>
        <div class="picture">
          <img :src="shops.img_url">
        </div>
        <div class="detail">
          <p>#{{shops.area}} #{{shops.genre}}</p>
        </div>
        <div class="introduction">
           {{shops.introduction}}
        </div>
    </div>


    <div class="reserve">
      <h2 class="reserveTitle">予約</h2>
      <div class="calendar">
      <DatePicker is-inline v-model="selectDate" />
      </div>
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
     <div class="contains">
       <div class="book">
         <div class="item">
           <p>Shop</p>
         </div>
         <div class="value">
          <p>叙々苑</p>
         </div>
       </div>
       <div class="book">
         <div class="item">
          <p>Date</p>
         </div>
         <div class="value">
          <p>{{fixedDate}}</p>
         </div>
       </div>
       <div class="book">
         <div class="item">
           <p>Time</p>
         </div>
         <div class="value">
          <p>{{time}}</p>
         </div>
       </div>
       <div class="book">
         <div class="item">
          <p>Number</p>
         </div>
         <div class="value">
          <p>{{number}}</p>
         </div>
       </div>
      </div>
      <div class="btn">
         <button @click="send">予約する</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import HeaderRegister from "../components/HeaderRegister"
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import axios from "axios";

export default{
  props:["id"],
  components: {
    HeaderRegister,
    DatePicker,
  },
 data(){
   return{
     time:"17:00",
     number:"1人",
     selectDate: new Date(),
     shops:[],
    };
 },
 computed:{
   fixedDate(){
     const day =this.selectDate.getDate()
     const month =this.selectDate.getMonth()+1
     const year =this.selectDate.getFullYear()

     return year + "/" + month + "/" + day
   }
 },
 methods:{
   async getShops(){
     await axios.get("http://127.0.0.1:8000/api/shops/" + this.id)
     .then((response)=>{
       this.shops=response.data.data;
       console.log(this.shops);
     });
   },
   async send(){
     await axios.post("http://127.0.0.1:8000/api/reservations",{
       user_id:this.$store.state.user.id,
       shop_id:this.id,
       date:this.fixedDate,
       time:this.time,
       number:this.number
     }).then((response)=>{
       console.log(response);
       this.$router.replace("/done");
     })
     .catch(error=>{
       alert(error);
     });
   },
 },
created(){
  this.getShops();
},

};

</script>

<style scoped>
.main{
  display: flex;
  justify-content: center;
}
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
  margin-top: 100px;
  margin-right: 110px;
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
  height: 85%;
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.3);
overflow: hidden;
}
.reserveTitle{
  color:#ffffff;
  font-size: 25px;
  margin-left: 30px;
  margin-top: 30px;
}

.calendar{
  margin-left: 30px;
  margin-top: 40px;
}
select{
  margin-left: 30px;
  margin-top: 20px;
  height: 30px;
  border-radius: 5px;
  width: 90%;
  background-color: #fff;
}
.contains{
  background-color: #4C7FFF;
  border-radius: 5px;
  width: 80%;
   margin-top: 15px;
  margin-left: 30px;
  height: 130px;
  padding:20px 0 20px 0 ;
  
}
button{
  width: 100%;
  color: #ffffff;
  background-color: #0039FF;
  border: none;
  cursor: pointer;
  height: 50px;
  border-radius: 0 0 5px 5px;
}
.book{
  display: flex;
  margin-left: 25px;
  margin-top: 15px;
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
</style>