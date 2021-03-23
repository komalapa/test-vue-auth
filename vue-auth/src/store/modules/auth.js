import axios from 'axios'

const AUTH_SRV='http://localhost:3000/'
export const authModule = {
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: {}
      },
      mutations: {
        auth_request(state) {
          state.status = 'loading'
        },
        auth_success(state, token, user) {
          state.status = 'success'
          state.token = token
          state.user = user
        },
        auth_error(state) {
          state.status = 'error'
        },
        logout(state) {
          state.status = ''
          state.token = ''
        },
      },
      actions: {
        login({
          commit
        }, user) {
          return new Promise((resolve) => {//, reject) => {
            commit('auth_request')
            //!!!! DELETE IT BEFORE USE! USER WITHOUT PASSWORD
            if (user.email == "q@q.q") {
              commit("auth_success", 'tokentokentoken', user)
            } else {
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              //try{
                axios({
                    url: AUTH_SRV + 'login',
                    data: user,
                    method: 'POST',
                    validateStatus: function (status) {
                      return status < 500; // Resolve only if the status code is less than 500
                    }
                  })
                  .then(resp => {
                    //console.log ("status",resp.status)
                    if (resp.status == 200){
                      const token = resp.data.token
                      const user = resp.data.user
                      localStorage.setItem('token', token)
                      axios.defaults.headers.common['Authorization'] = token
                      commit('auth_success', token, user)
                      resolve(resp)
                    } else if (resp.status == 401){
                      throw new Error("Неверная пара логин-пароль")
                    } else if (resp.status == 404){
                      throw new Error("Пользователь не найден")
                    } else {
                      throw new Error("Ошибка процесса авторизации")
                    }

                  })
                  .catch(err => {
                    //console.log ("catch status",err)
                    commit('auth_error')
                    localStorage.removeItem('token')
                    //reject(err)
                    console.warn(err)
                  })
              //  }
                // catch(err){
                //   console.log(err)
                // }
            }
          })
        },
        registration({
          commit
        }, user) {
          return new Promise((resolve) => {//, reject) => {
            commit('auth_request')
            axios({
                url: AUTH_SRV + 'register',
                data: user,
                method: 'POST'
              })
              .then(resp => {
                const token = resp.data.token
                const user = resp.data.user
                localStorage.setItem('token', token)
                axios.defaults.headers.common['Authorization'] = token
                commit('auth_success', token, user)
                resolve(resp)
              })
              .catch(err => {
                commit('auth_error', err)
                localStorage.removeItem('token')
                //reject(err)
                console.warn(err)
              })
          })
        },
        logout({
          commit
        }) {
          return new Promise((resolve) => { //, reject) => {
            commit('logout')
            localStorage.removeItem('token')
            delete axios.defaults.headers.common['Authorization']
            resolve()
          })
        },
    
      },
      getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
      }
    
}
