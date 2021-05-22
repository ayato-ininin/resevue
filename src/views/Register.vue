<template>
  <div id="app">
    <HeaderLogin />
    <div class="card">
      <div class="banner">
        <p class="title">Registration</p>
      </div>
      <div class="form">
        <div class="icon">
          <font-awesome-icon class="img" icon="user" /><input type="text" placeholder="Username" v-model="name">
        </div>
        <div class="icon">
          <font-awesome-icon class="img" icon="envelope" /><input type="text" placeholder="Email" v-model="email">
        </div>
        <div class="icon">
          <font-awesome-icon class="img" icon="lock" /> <input type="text" placeholder="Password" v-model="password">
       </div>
       <button @click="auth">登録</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLogin from "../components/HeaderLogin"
import axios from "axios";
export default{
 components:{
   HeaderLogin
 },
 data(){
   return{
     name:"",
     email:"",
     password:""
   };
 },
 methods:{
   auth(){
     axios.post("http://127.0.0.1:8000/api/register",{
       name:this.name,
       email:this.email,
       password:this.password
     })
     .then((response)=>{
       console.log(response);
       this.$router.replace("/thanks");
     })
     .catch(error=>{
       alert(error);
     });
   }
 }
};

</script>

<style scoped>
.card{
  background-color: #ffffff;
  width: 400px;
  height: 280px;
  font-size: 1.4rem;
  text-align: center;
  margin: 0 auto;
  margin-top:170px;
  border: 5px;
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.3);
}
button{
  background-color: #305DFF;
  color: #ffffff;
  border:0px none;
  cursor: pointer;
  width: 55px;
  height: 30px;
  border-radius: 6px;
 margin-top: 15px;
}
input{
 border:0;
 border-bottom: 1px solid ;
width: 70%;
height: 30px;
}
.banner{
  width: 400px;
  height: 55px;
  background-color:#305DFF ;
  display: block;
  text-align: left;
  line-height: 55px;
  border-radius: 5px 5px 0 0;
}
.title{
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 20px;
}
.form{
  align-items: center;
 
}
.icon{
  display: flex;
  justify-content:center;
  margin-top: 15px;
}
.img{
  width: 25px;
  height: 25px;
  margin-top: 8px;
  margin-right: 15px;
}
* {
     font-family:'メイリオ', 'Meiryo','ＭＳ ゴシック','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif,'Font Awesome 5 Free' ;
}
</style>