<template>
  <div id="app">
    <HeaderRegister />
    <div class="search">
      <div class="area">
        <select v-model="area">
          <option value="" selected>All area</option>
          <option>東京都</option>
          <option>大阪府</option>
          <option>名古屋</option>
        </select>
      </div>
      <div class="genre">
         <select v-model="genre">
           <option value="" selected>All genre</option>
           <option>寿司</option>
           <option>焼肉</option>
           <option>居酒屋</option>
           <option>イタリアン</option>
           <option>ラーメン</option>
         </select>
      </div>
      <div class="research">
         <i class="fas fa-search check"></i><input type="text" v-model="research" placeholder="Search…">
      </div>
    </div>
    <div class="flex">
      <div class="card" v-for="(value, index) in filteredUsers" :key="index">
        <div class="message"><img :src="value.img_url"></div>
        <div class="content">
          <p class="name">{{value.shopname}}</p>
          <div class="flexDetail">
            <p>#{{value.area}}</p>
            <p>#{{value.genre}}</p>
          </div>
        </div>
        <button @click="
              $router.push({
                path: '/detail/' + value.id,
                params: { id: value.id },
              })
            ">詳しくみる</button>
        <i class="fa-heart img heart" v-bind:class='{far:!value.result,fas:value.result}' @click="fav(index)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderRegister from "../components/HeaderRegister"
import axios from "axios";
export default{
  props:["id"],
 components:{
   HeaderRegister
 },
 data(){
   return{
     area:"",
     genre:"",
     research:"",
     shops:[],
   };
 },
 computed:{
   filteredUsers(){
     const usersArray=[];
     for (const i in this.shops){
       const shop = this.shops[i];
       if(shop.shopname.indexOf(this.research) !== -1 && shop.area.indexOf(this.area) !== -1 && shop.genre.indexOf(this.genre) !== -1){
         usersArray.push(shop);
       }
     }
     return usersArray;
   }
 },
 methods:{
   async getShops(){

     const shops =await axios.get("https://powerful-hollows-86374.herokuapp.com/api/shops");
     
   
    for(let i=0;i<shops.data.data.length;i++){
        console.log(shops);
        const result =await axios.get("https://powerful-hollows-86374.herokuapp.com/api/likes/check",{
       params:{
         shop_id:shops.data.data[i].id,
         user_id:this.$store.state.user.id,
       },
     
    
     });
     console.log(result);
     shops.data.data[i].result=result.data.data

    }
       
     this.shops = shops.data.data;
     console.log(this.shops);
   },
   async fav(index){
     
     console.log(this.shops[index]);
     if(this.shops[index].result){
           axios({
             method:"delete",
             url:"https://powerful-hollows-86374.herokuapp.com/api/likes",
             data:{
               shop_id:this.shops[index].id,
               user_id:this.$store.state.user.id,
             },
           }).then((response)=>{
             this.shops[index].result=false
             console.log(response);
           });
        
     }else{
       axios.post("https://powerful-hollows-86374.herokuapp.com/api/likes",{
         shop_id:this.shops[index].id,
         user_id:this.$store.state.user.id,
       }).then((response)=>{
         this.shops[index].result=true
         console.log(response);
       })
     
       
     }
   },
 },
 created(){
   this.getShops();
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
.flexDetail{
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
.check{
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
    background-color: #fff;
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