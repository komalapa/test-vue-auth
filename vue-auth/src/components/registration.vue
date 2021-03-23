<template>
  <div class = "registration-wrp">
    
    <form class="registration" @submit.prevent="registration">
      <h2>Регистрация</h2>
      <input class = "inputs" id="name" type="text" v-model="name" required autofocus placeholder="Имя">
      <input class = "inputs" id="email" type="email" v-model="email" required placeholder="Электронная почта">
      <input class = "inputs" id="password" type="password" v-model="password" required placeholder="Пароль">
      <input class = "inputs" id="password-confirm" type="password" v-model="password_confirmation" required placeholder="Повтор пароля">
      
      <span class="info small-text">Продолжая, вы соглашаетесь с условиями обслуживания</span>
      <button  class = "inputs button continue-btn" type="submit">Зарегистрироваться</button>
      <router-link to="/login" class="info small-text">Уже зарегистрированы?</router-link>
    </form>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        name : "",
        email : "",
        password : "",
        password_confirmation : "",
      }
    },
    methods: {
      registration: function () {
        let data = {
          name: this.name,
          email: this.email,
          password: this.password,
        }
        this.$store.dispatch('registration', data)
      //  .then(() => this.$router.push('/'))
      //  .catch(err => console.log(err))
      }
    }
  }
</script>


<style scoped>
  .registration-wrp{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  h2{
    font-family: Rambla, Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -0.5px;
    color: #1E1D2E;
    text-align: center;
    margin: 0 0 60px 0;
  }
  .info{
    display: block;
    width: 100%;
    font-family: Rambla, Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    letter-spacing: -0.5px;
    color: #1E1D2E;
    margin-bottom: 40px;
  }
  .small-text{
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 30px;
    cursor: pointer;
    text-decoration: none;
  }
  .small-text:hover{
    font-size: 17px;
  }

  .registration{
    width: 510px;
    display: block;
    background: #FFFFFF;
    border-radius: 10px;
    margin: 0,auto;
    padding: 70px 25px;
  }
  .inputs{
    display: block;
    width: 100%;
    border: 2px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 99px;
    padding: 11px 20px;
    font-family: Rambla, Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: bold;
    letter-spacing: -0.5px;
    outline: transparent;
  }
  input{
    background: #FFFFFF;
    font-size: 18px;
    line-height: 24px;
    color: #C4C4C4;
    margin-bottom: 30px;
    
    
  }
  input::placeholder{
    font-family: Rambla, Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: bold;
    letter-spacing: -0.5px;
    font-size: 18px;
    line-height: 24px;
    color: #C4C4C4;
  }
  button{
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #979797;
    background-color: #fff;
    
    margin-bottom: 20px;
    cursor: pointer;
  }

</style>