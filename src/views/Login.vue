<template>
  <div id="app">
    <HeaderAuth2 />
    
      <div class="card">
      <div class="banner">
      <p class="title">Login</p>
      </div>
      <div class="form">
        <div class="icon">
        <font-awesome-icon class="img" icon="envelope" /><input type="text" placeholder="Email">
        </div>
        <div class="icon">
       <font-awesome-icon class="img" icon="lock" /> <input type="text" placeholder="Password">
       </div>
        <button>ログイン</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAuth2 from "../components/HeaderAuth2"
export default{
 components:{
   HeaderAuth2
 }
};

</script>

<style scoped>
.card{
  background-color: #ffffff;
  width: 400px;
  height: 250px;
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
  width: 80px;
  height: 30px;
  border-radius: 6px;
 margin-top: 20px;
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
  margin-top: 20px;
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