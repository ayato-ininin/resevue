<template>
  <div id="app">
    <div class="hamburger_btn" @click="Active()">
      <span class="line top line_01" v-bind:class="{'btn_line01':ActiveBtn}"></span>
      <span class="line middle line_02" v-bind:class="{'btn_line02':ActiveBtn}"></span>
      <span class="line down line_03" v-bind:class="{'btn_line03':ActiveBtn}"></span>
    </div>

    <transition name="menu">
      <div class="menu" v-show="ActiveBtn">
          <ul>
              <li><a @click="$router.push('/')">Home</a></li>
              <li><a @click="$router.push('/mypage')">Mypage</a></li>
              <li><a href="#">Logout</a></li>
             
          </ul>
      </div>
  </transition>
  <p class="title">Rese</p>
  </div>
</template>

<script>
export default{
  data(){
    return{
      ActiveBtn:false
    };
  },
  methods:{
    Active(){
      this.ActiveBtn=!this.ActiveBtn;
    }
  }
};

</script>

<style scoped>
.title{
  font-size: 2rem;
  color: #305DFF;
  font-weight: bold;
  position: absolute; 
  top: 45px;
  left:165px;
}
.hamburger_btn {
  position: absolute; 
  top: 40px;
  left:100px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 50;
  background-color: #305DFF;
  border-radius: 5px;
  position: relative;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.3);
}
.hamburger_btn .line {
 position: absolute;
  top: 0px;
  left:8px;

  background: #ffffff;
  text-align: center;
}
.hamburger_btn .top{
width: 14px;
  height: 1px;
}
.hamburger_btn .middle{
width: 24px;
  height: 1px;
}
.hamburger_btn .down{
width: 8px;
  height: 1px;
}


.hamburger_btn .line_01 {
  top: 11px;
  transition: 0.4s ease;
}
.hamburger_btn .line_02 {
  top: 21px;
  transition: 0.4s ease;
}
.hamburger_btn .line_03 {
  top: 31px;
  transition: 0.4s ease;
}


.btn_line01 {
  transform: translateY(10px) rotate(-45deg);
  transition: 0.8s ease;
   width:24px !important;
}
.btn_line02 {
  transition: 0.8s ease;
  opacity: 0;
}
.btn_line03 {
  transform: translateY(-10px) rotate(45deg);
  transition: 0.8s ease;
   width:24px !important;
}

/*サイドバー*/
.menu-enter-active, .menu-leave-active {
  transition: opacity 0.4s;
}
.menu-enter, .menu-leave-to {
  opacity: 0;
}
.menu-leave, .menu-enter-to{
  opacity: 1;
}

.menu li {
  list-style: none;
  line-height: 1;
  padding: 1rem;
  text-align: center;
  
}
.menu {
  background-color: #ffffff;
  z-index: 30;
  padding: 2rem 1rem;
  position: fixed;
  width: 100%;
  height: 80rem;
  top: 0;
  right: 0;
 
}
.menu a {
  color: #305DFF;
  text-decoration: none;
  font-size: 2rem;
  padding: 0 2rem;
  cursor: pointer;


}
.menu ul{
  margin: 180px;
  padding: 0;
  
}

</style>