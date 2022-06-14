<!-- "username": "Jojjerg"
    "password": "errortryuno99W#"
-->

<template>
  <v-main>
    <v-container class="mt-15">
      <v-row style="justify-content: center">
        <v-col cols="auto">
          <h1
              style="font-family: Montserrat, sans-serif"
              class="pb-5"
          >
            Вход в аккаунт
          </h1>
<!--Форма заполнения данных-->
          <v-form @submit.prevent="loginUser">
<!--Поле ввода имени пользователя-->
            <v-text-field
                id="username"
                v-model.trim="formLog.username"
                :rules="formLog.usernameRule"
                label="Логин"
                rounded
                single-line
                required
                style="width:450px; height:45px;background-color:#FBFAFF;
                  font-family:Nunito,sans-serif; font-weight:bold; box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15), -5px -5px 15px rgba(255, 255, 255, 0.7);"
                class="rounded-pill my-10 px-10 py-2"
            >
            </v-text-field>
<!--Поле ввода пароля-->
            <v-text-field
                id="password"
                v-model.trim="formLog.password"
                :rules="formLog.passwordRule"
                label="Пароль"
                type="password"
                rounded
                single-line
                required
                style="width:450px; height:45px;background-color:#FBFAFF;
                  font-family:Nunito,sans-serif; font-weight:bold; box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15), -5px -5px 15px rgba(255, 255, 255, 0.7);"
                class="rounded-pill my-10 px-10 py-2"
            >
            </v-text-field>

            <v-row style="justify-content: flex-start">
              <v-col cols="auto">

<!--Кнопка проверки данных. При успешной проверке авторизированных пользователь переходит на страницу курса-->
                <v-btn
                    text
                    rounded
                    style="box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15), -5px -5px 15px rgba(255, 255, 255, 0.7);"
                    class="px-5 py-5 mt-5"
                    type="submit"
                >
                  <v-card-text
                      style="font-family:Montserrat,sans-serif; font-weight:bold;"
                  >
                    Войти
                  </v-card-text>
                </v-btn>
              </v-col>
              <v-col
                  cols="auto"
                  offset="0"
              >
<!--При случайной попадении на страницу входа можно вернуться на страницу регистрации-->
                <v-btn
                    text
                    to="/register"
                    class="py-5 px-5 mt-5"
                >
                  <p
                      style="font-family:Nunito,sans-serif; font-size: 10px"
                      class="mt-4"
                  >
                    Нет аккаунта?
                  </p>
                </v-btn>
              </v-col>
            </v-row>
            <span id="incorrect">Неверное имя пользователя или пароль</span>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "Login.vue",
  data: () => ({
      formLog: {
        username: '',
        usernameRule: [
          v => !!v || 'Введите имя пользователя',
          v => v.length > 5 || 'Имя пользователя должно содержать более 5 символов',
          v => v.length <= 15 || 'Имя пользователя должно содержать не более 15 символов',
          v => /([a-zA-Z\d./])+/.test(v) || 'Имя пользователя не должно содержать русских символов'
        ],
        password: '',
        passwordRule: [
          v => !!v || 'Введите пароль',
          v => /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(v) || 'Пароль должен содержать в себе числа, спец. символы, буквы в верхнем и нижнем регистре'
        ]
      }
  }),
  methods: {
    ...mapActions(['login']),
    loginUser(){
      let user = {
        username: this.formLog.username,
        password: this.formLog.password
      }
      this.login(user).then(res => {
        if(res.data.success){
          this.$router.push('/profile')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
  #incorrect{
    display: none;
    font-family: Nunito, sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: red;
  }
</style>
