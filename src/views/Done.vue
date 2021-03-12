<template>
  <div id="app">
    <HeaderRegister />
    <div class="thanks">
      <div class="card">
        <p class="message">ご予約ありがとうございます。</p>
        <button @click="$router.push('/')">戻る</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderRegister from "../components/HeaderRegister"
export default{
 components:{
   HeaderRegister
 }
};

</script>

<style scoped>
.thanks{
  background-color: #ffffff;
  width: 450px;
  height: 300px;
  font-size: 1.4rem;
  text-align: center;
  margin: 0 auto;
  margin-top:90px;
  align-items: center;
  display: flex;
  justify-content: center;
}
.message{
  display: block;
  margin-bottom: 40px;
}

button{
  background-color: #305DFF;
  color: #ffffff;
  border:0px none;
  cursor: pointer;
  width: 55px;
  height: 30px;
  border-radius: 6px;
 
}
* {
     font-family:'メイリオ', 'Meiryo','ＭＳ ゴシック','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif,'Font Awesome 5 Free' ;
}

</style>