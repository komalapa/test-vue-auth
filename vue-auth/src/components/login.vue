<template>
 <div class = "login-wrp">
   <form class="login" @submit.prevent="login">
     <h2  v-if="!isCorrectEmail">Вход</h2>
     <h2  v-if="isCorrectEmail">Добро пожаловать!</h2>
     <div v-if="isCorrectEmail" class="avatar">
       <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 0C17.92 0 0 17.92 0 40C0 62.08 17.92 80 40 80C62.08 80 80 62.08 80 40C80 17.92 62.08 0 40 0ZM40 12C46.64 12 52 17.36 52 24C52 30.64 46.64 36 40 36C33.36 36 28 30.64 28 24C28 17.36 33.36 12 40 12ZM40 68.8C30 68.8 21.16 63.68 16 55.92C16.12 47.96 32 43.6 40 43.6C47.96 43.6 63.88 47.96 64 55.92C58.84 63.68 50 68.8 40 68.8Z" fill="#979797"/>
</svg>

     </div>
     <ul v-if="!isCorrectEmail" class="socials">
       <li class="socials-item"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.5 4.72797C25.5 2.48186 23.5181 0.5 21.272 0.5H4.22797C1.98186 0.5 0 2.48186 0 4.72797V21.772C0 24.0181 1.98186 26 4.22797 26H12.8161V16.3549H9.64508V12.1269H12.8161V10.4093C12.8161 7.50259 14.9301 4.99222 17.5725 4.99222H21.0078V9.22019H17.5725C17.1762 9.22019 16.7798 9.61658 16.7798 10.4093V12.1269H21.0078V16.3549H16.7798V26H21.272C23.5181 26 25.5 24.0181 25.5 21.772V4.72797Z" fill="white"/>
</svg>
</li>
       <li class="socials-item"><svg width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.709 16.673C31.709 16.5484 31.5845 16.5484 31.5845 16.4239C31.0863 15.4276 29.9655 14.1823 28.4711 12.8124C27.7239 12.1897 27.3503 11.6916 27.1012 11.4425C26.7276 10.9444 26.7277 10.5708 26.8522 10.0727C26.9767 9.69906 27.4748 9.07637 28.3466 7.95556C28.8447 7.33289 29.0938 6.9593 29.4674 6.5857C31.3354 4.09501 32.2071 2.47605 31.9581 1.72885L31.8336 1.60432C31.709 1.47979 31.5845 1.35526 31.3354 1.35526C31.0863 1.23072 30.7127 1.23072 30.3391 1.35526H25.6068C25.4823 1.35526 25.4823 1.35526 25.2332 1.35526C25.1087 1.35526 24.9842 1.35526 24.9842 1.35526H24.8596H24.7351L24.6105 1.47978C24.486 1.60431 24.486 1.60431 24.486 1.72885C23.9879 3.09872 23.3652 4.21953 22.7425 5.46488C22.3689 6.08755 21.9953 6.71023 21.6217 7.20837C21.2481 7.70651 20.999 8.0801 20.75 8.32917C20.5009 8.57824 20.2518 8.70278 20.1273 8.95184C20.0028 9.07638 19.7537 9.20092 19.7537 9.07639C19.6292 9.07639 19.5046 9.07638 19.5046 8.95184C19.3801 8.82731 19.2556 8.70277 19.131 8.57824C19.0065 8.4537 19.0065 8.20463 18.882 7.95556C18.882 7.7065 18.882 7.45743 18.882 7.33289C18.882 7.20836 18.882 6.83477 18.882 6.5857C18.882 6.21209 18.882 5.96302 18.882 5.83848C18.882 5.46488 18.882 4.96675 18.882 4.46862C18.882 3.97048 18.882 3.59686 18.882 3.3478C18.882 3.09873 18.882 2.72513 18.882 2.47606C18.882 2.10246 18.882 1.85338 18.882 1.72885C18.882 1.60431 18.7575 1.35525 18.7575 1.23072C18.6329 1.10618 18.5084 0.981643 18.3838 0.857108C18.2593 0.732574 18.0102 0.732578 17.8857 0.608043C17.263 0.483509 16.5158 0.358978 15.6441 0.358978C13.6515 0.358978 12.2817 0.483516 11.7835 0.732585C11.5345 0.85712 11.2854 0.981646 11.1609 1.23072C10.9118 1.47978 10.9118 1.60432 11.0363 1.60432C11.659 1.72886 12.1571 1.97791 12.4062 2.35152L12.5307 2.6006C12.6553 2.72514 12.6552 2.97419 12.7798 3.3478C12.9043 3.7214 12.9043 4.095 12.9043 4.59314C12.9043 5.34035 12.9043 6.08756 12.9043 6.5857C12.9043 7.20837 12.7798 7.58196 12.7798 7.95556C12.7798 8.32917 12.6553 8.57824 12.5307 8.70278C12.4062 8.95185 12.4062 9.07639 12.2817 9.07639C12.2817 9.07639 12.2816 9.20091 12.1571 9.20091C12.0326 9.20091 11.9081 9.32545 11.659 9.32545C11.5344 9.32545 11.2854 9.20092 11.1609 9.07639C10.9118 8.95185 10.6627 8.70278 10.5382 8.45371C10.2891 8.20465 10.04 7.83103 9.79097 7.33289C9.5419 6.83476 9.16828 6.33663 8.91921 5.58942L8.67016 5.09129C8.54563 4.84222 8.29656 4.34407 8.04749 3.7214C7.79842 3.09873 7.54935 2.6006 7.30028 1.97793C7.17574 1.72886 7.05122 1.60431 6.92669 1.47978H6.80215C6.80215 1.47978 6.6776 1.35526 6.55306 1.35526C6.42853 1.35526 6.30401 1.23072 6.17948 1.23072H1.69623C1.19809 1.23072 0.949028 1.35525 0.824493 1.47978L0.699951 1.60432C0.699951 1.60432 0.699951 1.72885 0.699951 1.85339C0.699951 1.97792 0.699959 2.10245 0.824493 2.35152C1.44717 3.84593 2.19437 5.34035 2.94157 6.83476C3.68878 8.20464 4.43599 9.44999 4.93413 10.3217C5.5568 11.1935 6.05493 12.0652 6.67761 12.8124C7.30028 13.5596 7.67387 14.0578 7.79841 14.3068C8.04748 14.5559 8.172 14.6804 8.29654 14.805L8.67016 15.1786C8.91923 15.4276 9.29283 15.8012 9.79097 16.1748C10.2891 16.5484 10.9118 16.922 11.5344 17.2956C12.1571 17.6692 12.9043 17.9183 13.6515 18.1674C14.5233 18.4165 15.2705 18.541 16.0177 18.4165H17.8857C18.2593 18.4165 18.5084 18.2919 18.7575 18.0429L18.882 17.9183C18.882 17.7938 19.0065 17.7938 19.0065 17.6693C19.0065 17.5447 19.0065 17.4202 19.0065 17.1711C19.0065 16.673 19.0065 16.2994 19.131 15.9258C19.2556 15.5522 19.2556 15.3031 19.3801 15.054C19.5047 14.805 19.6292 14.6804 19.7537 14.5559C19.8783 14.4314 20.0028 14.3068 20.0028 14.3068H20.1273C20.3764 14.1823 20.75 14.3068 20.9991 14.5559C21.3727 14.805 21.7463 15.1786 21.9953 15.5522C22.2444 15.9258 22.618 16.2994 23.1162 16.7975C23.6143 17.2957 23.9879 17.6693 24.237 17.7938L24.6105 18.0429C24.8596 18.1674 25.1087 18.2919 25.4823 18.4165C25.8559 18.541 26.105 18.541 26.354 18.541L30.5882 18.4165C30.9618 18.4165 31.3354 18.2919 31.5845 18.1674C31.8336 18.0429 31.9581 17.9183 31.9581 17.6693C31.9581 17.5447 31.9581 17.2957 31.9581 17.1711C31.709 16.9221 31.709 16.7975 31.709 16.673Z" fill="white"/>
</svg>
</li>
       <li class="socials-item"><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5125 11.6625V17.6H22.5875C21.4 20.8062 18.3125 22.9437 14.75 22.9437C10.1187 22.9437 6.4375 19.2625 6.4375 14.6312C6.4375 10 10.1187 6.31875 14.75 6.31875C16.5312 6.31875 18.1938 6.9125 19.6188 7.8625L20.0938 8.21875L23.6562 3.5875L23.1813 3.23125C20.6875 1.45 17.8375 0.5 14.75 0.5C6.9125 0.5 0.5 6.9125 0.5 14.75C0.5 22.5875 6.9125 29 14.75 29C22.5875 29 29 22.5875 29 14.75V11.7812H14.5125V11.6625Z" fill="white"/>
</svg>
</li>
       <li class="socials-item">
         <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.83039 0C6.87959 0.983982 6.73814 1.89417 6.45525 2.7859C5.96941 4.31722 4.96697 5.46725 3.7001 6.37128C2.87601 6.95552 1.91048 7.20152 0.883448 7.18307C0.643602 7.17692 0.575953 7.09697 0.569803 6.86327C0.532904 5.28275 1.02489 3.88673 2.00888 2.65675C3.18351 1.19923 4.70868 0.344394 6.54749 0.0184496C6.62744 0.0122998 6.70739 0.0122998 6.83039 0Z" fill="white"/>
</svg>

         <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.4268 3.45699C23.9348 3.87518 23.4428 4.23803 23.0185 4.66237C20.823 6.87018 20.6877 10.1788 21.7762 12.4543C22.4711 13.9057 23.572 14.9511 25.011 15.6522C25.2324 15.7629 25.2816 15.8552 25.1955 16.095C24.4945 18.0261 23.5412 19.8157 22.2313 21.4085C21.8254 21.9067 21.4011 22.3986 20.9398 22.8476C19.9989 23.7639 18.8735 24.1637 17.5635 23.8746C17.0039 23.7516 16.4381 23.6102 15.9215 23.3765C14.3164 22.6569 12.7051 22.5893 11.0508 23.1612C10.3251 23.4134 9.60557 23.684 8.86759 23.8808C7.71756 24.1944 6.70283 23.8746 5.82339 23.0936C4.50732 21.9374 3.48644 20.5537 2.607 19.047C1.47542 17.0974 0.725136 15.0003 0.306944 12.7925C-0.105098 10.6155 -0.160447 8.4384 0.50374 6.28594C0.934233 4.89606 1.61072 3.64149 2.6808 2.63291C4.36587 1.04008 6.35228 0.2898 8.66464 0.646493C9.49488 0.775641 10.3128 1.07083 11.0877 1.40908C12.1578 1.87032 13.1725 2.03022 14.2795 1.51978C15.2143 1.08928 16.1983 0.744891 17.2253 0.572694C19.2609 0.23445 21.1059 0.689542 22.8032 1.83957C23.4613 2.27621 24.0209 2.8051 24.4268 3.45699Z" fill="white"/>
</svg>

       </li>
     </ul>
     <span v-if="!isCorrectEmail" class="info">или</span>
     <input  v-if="!isCorrectEmail" class = "inputs" required v-model="email" type="email" placeholder="Введите свой e-mail"/>
     <span v-if="isCorrectEmail" class="correct-email" @click="changeEmail">{{email}}</span>
     <input v-if="isCorrectEmail" class = "inputs" required v-model="password" type="password" placeholder="Введите пароль"/>
     <span v-if="isCorrectEmail" class="info small-text forgotten-password">Забыли пароль?</span>
     <button class = "inputs button continue-btn" v-if="!isCorrectEmail" @click="verifyEmail">Продолжить</button>
     <button  class = "inputs button continue-btn" v-if="isCorrectEmail" type="submit">Войти</button>
     <span v-if="!isCorrectEmail" class="info small-text">Продолжая, вы соглашаетесь с условиями обслуживания</span>
     <router-link to="/registration" class="info small-text">Ещё не зарегистрированы?</router-link>
   </form>
 </div>
</template>

<script>
  export default {
    data(){
      return {
        email : "",
        password : "",
        isCorrectEmail : false,
      }
    },
        methods: {
      login: function () {
        let email = this.email 
        let password = this.password
        let type = "email"
        this.$store.dispatch('login', { email, password, type })
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      },
      verifyEmail: function (){
        let email = this.email
        const regExpEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
         if (regExpEmail.test(email)) {
          this.isCorrectEmail=true;
        }
      },
      changeEmail: function(){
        this.isCorrectEmail=false;
      }
    
    }
  }
</script>

<style scoped>
  .login-wrp{
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
    margin-bottom: 0;
    cursor: pointer;
    text-decoration: none;
  }
  .small-text:hover{
    font-size: 17px;
  }
  .forgotten-password{
    margin: 80px auto 60px;
    cursor: pointer;
  }
   .forgotten-password:hover{
     font-size: 17px;
   }
  .avatar{
    width: 80px;
    height: 80px;
    /* background-color: #979797; */
    border-radius: 50%;
    margin: 0 auto;

  }
  .correct-email{
    text-align: center;
    font-family: Rambla, Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.5px;
    color: #979797;
    margin: 20px auto;
    display: block;
    cursor: pointer;
  }
  .correct-email:hover{
    font-size: 25px;
  }
  .login{
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
    outline: transparent;
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
  .socials{
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0 0 90px;
  }
  .socials-item{
    margin-left:24px ;
    background: #CFCFCF;
    width: 60px;
    height: 60px;
    border-radius: 50% ;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
  }
  .socials-item:first-child{
    margin-left:0 ;
  }
  .socials-item:hover{
    background-color: #A3A3A3;
  }
</style>
