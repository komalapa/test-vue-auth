<template>
  <div id="app">
    
    <div class="login-wrp"  v-if="isLoginFormVisible && !isLoggedIn" @click="exitByClick">
      <ErrorMsg v-if="errorMsg" :msg="errorMsg"/>
      <Login/>
    </div> 
    <div class="reg-wrp"  v-if="isRegFormVisible && !isLoggedIn" @click="exitByClick"><Registration/></div> 
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/guard">Guard</router-link> |
      <!-- <router-link v-if="!isLoggedIn" to="/login">Login</router-link> | -->
      <span v-if="!isLoggedIn" @click="showLoginForm">Login</span> |
      <!-- <router-link v-if="!isLoggedIn" to="/registration">Registrate</router-link> -->
      <span v-if="!isLoggedIn"  @click="showRegForm">Registrate</span>
      <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
    </div>
    <router-view />
  </div>
</template>

<script>
import Login from './components/login.vue'
import Registration from './components/registration.vue'
import ErrorMsg from './components/errorMsg.vue'

export default {
  components: {
        Login,
        Registration,
        ErrorMsg
    },
  data:function(){
    return {
      isLoginFormVisible: false,
      isRegFormVisible: false,
    }
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
    errorMsg: function (){
      if (this.$store.getters.authStatus.indexOf("error") >= 0){
        return this.$store.getters.authStatus
      } 
      return null
            
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch("logout").then(() => {
        if (this.$router.history.current.meta.requiresAuth){//при logout уходим с защищенных страниц
          console.log("push")
          this.$router.push("/");
        }
        this.isRegFormVisible = false;
        this.isLoginFormVisible = false;
      });
    },
    created: function () {
      this.$http.interceptors.response.use(undefined, function (err) {
        return new Promise(function (){//resolve, reject) {
          if (
            err.status === 401 &&
            err.config &&
            !err.config.__isRetryRequest
          ) {
            this.$store.dispatch("logout");
          }
          throw err;
        });
      });
    },
    showLoginForm: function(){
      this.isLoginFormVisible = true;
    },
    showRegForm: function(){
      this.isRegFormVisible = true;
    },
    exitByClick: function(e){
      //console.log (e.path[0].type)
      if (
        (e.path[0] === document.querySelector("#app > div.login-wrp > div")) 
        )
        {
        this.isLoginFormVisible = false
      }
      if (
        (e.path[0] === document.querySelector("#app > div.reg-wrp > div")) 
        )
        {
        this.isRegFormVisible = false
      }
    }
  },
};

</script>
<style>
  body{
    background-color:#E5E5E5;
  }
  .login-wrp, .reg-wrp{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 1;
    z-index: 10;
    background-color: rgba(0, 0, 0, .7);
    display: flex;
    justify-content: center;
    align-items: center;  
  }
</style>