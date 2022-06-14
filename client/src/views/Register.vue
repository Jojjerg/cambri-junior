<template>
  <v-main>
    <v-container class="mt-15">
      <v-row style="justify-content: center">
        <v-col cols="auto">
          <h1
              style="font-family: Montserrat, sans-serif"
              class="pb-5"
          >
            Регистрация
          </h1>

<!--Форма заполнения данных-->
          <v-form @submit.prevent="registerUser">
<!-- Поле вводы имени-->
            <v-text-field
                id="name"
                v-model.trim="formReg.name"
                :rules="formReg.nameRule"
                label="Имя"
                single-line
                rounded
                require
                style="width:450px; height:45px;background-color:#FBFAFF;
                  font-family:Nunito, sans-serif; font-weight:bold; box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15), -5px -5px 15px rgba(255, 255, 255, 0.7);"
                class="rounded-pill my-10 px-10 py-2"
            >
            </v-text-field>
<!-- Поле вводы фамилии-->
            <v-text-field
                id="surname"
                v-model.trim="formReg.surname"
                :rules="formReg.surnameRule"
                label="Фамилия"
                rounded
                single-line
                require
                style="width:450px; height:45px;background-color:#FBFAFF;
                  font-family:Nunito, sans-serif; font-weight:bold; box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15), -5px -5px 15px rgba(255, 255, 255, 0.7);"
                class="rounded-pill my-10 px-10 py-2"
            >
            </v-text-field>
<!--Поле ввода электронной почты-->
            <v-text-field
                id="email"
                v-model.trim="formReg.email"
                :rules="formReg.emailRule"
                label="Email"
                rounded
                single-line
                require
                style="width:450px; height:45px;background-color:#FBFAFF;
                  font-family:Nunito, sans-serif; font-weight:bold; box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15), -5px -5px 15px rgba(255, 255, 255, 0.7);"
                class="rounded-pill my-10 px-10 py-2"
            >
            </v-text-field>
<!--Поле ввода имени пользователя-->
            <v-text-field
                id="username"
                v-model.trim="formReg.username"
                :rules="formReg.usernameRule"
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
                v-model.trim="formReg.password"
                :rules="formReg.passwordRule"
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

<!--Кнопка проверки данных. При успешной проверке зарегистрированный пользователь получает сообщение об успехе-->
                <v-btn
                    text
                    rounded
                    style="box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15), -5px -5px 15px rgba(255, 255, 255, 0.7);"
                    class="px-5 py-5 mt-5"
                    @click="overlay = !overlay"
                    type="submit"
                >
                  <v-card-text
                      style="font-family:Montserrat,sans-serif; font-weight:bold;"
                  >
                    Зарегистрироваться
                  </v-card-text>
                </v-btn>
<!--Сообщение успешной регистрации и переход во вкладку вход в аккаунт-->
                <v-overlay
                    :value="overlay"
                >
                  <v-card
                      flat
                      width="500"
                      height="250"
                      style="background-color: #FBFAFF"
                      class="px-5 py-5"
                  >
                    <v-card-title
                        style="font-family: Montserrat, sans-serif; font-weight: bold; color: #313131"
                    >
                      Вы были успешно зарегистрированы!
                    </v-card-title>
                    <v-card-text
                        style="font-family: Nunito, sans-serif; color: #a0a0a0"
                    >
                      Вы были успешно зарегистрированы, для перехода во вкладку входа нажмите подтвердить
                    </v-card-text>
                    <v-btn
                        color="#725BFF"
                        rounded
                        style="box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.7), 5px 5px 15px rgba(0, 0, 0, 0.05);"
                        class="pill mx-5 my-5 py-5 px-5"
                        text
                        @click="overlay = false"
                        to="/login"
                    >
                      <v-card-text
                          style="font-family: Montserrat, sans-serif; font-weight: bold;"
                      >
                        Подтвердить
                      </v-card-text>
                    </v-btn>
                  </v-card>
                </v-overlay>
              </v-col>
              <v-col
                  cols="auto"
                  offset="0"
              >
<!--При попадании случайно и если уже есть аккаунт-->
                <v-btn
                    text
                    to="/login"
                    class="py-5 px-5 mt-5"
                >
                  <p
                      style="font-family:Nunito,sans-serif; font-size: 10px"
                      class="mt-4"

                  >
                    Уже есть аккаунт?
                  </p>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "Register.vue",
  data: () => ({
    formReg: {
      name: '',
      nameRule: [
          v => !!v || 'Введите имя',
          v => /^[А-ЯЁ][а-яё]+$/.test(v) || 'Введите имя с большой буквы'
      ],
      surname: '',
      surnameRule: [
          v => !!v || 'Введите фамилию',
          v => /^[А-ЯЁ][а-яё]+$/.test(v) || 'Введите фамилию с большой буквы'
      ],
      username: '',
      usernameRule: [
        v => !!v || 'Введите имя пользователя',
        v => v.length > 5 || 'Имя пользователя должно содержать более 5 символов',
        v => v.length <= 15 || 'Имя пользователя должно содержать не более 15 символов',
        v => /([a-zA-Z\d./])+/.test(v) || 'Имя пользователя не должно содержать русских символов'
      ],
      email: '',
      emailRule: [
        v => !!v || 'Введите электронную почту',
        v => /.+@.+/.test(v) || 'Неверный формат почты'
      ],
      password: '',
      passwordRule: [
        v => !!v || 'Введите пароль',
        v => /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(v) || 'Пароль должен содержать в себе числа, спец. символы, буквы в верхнем и нижнем регистре'
      ],
    },
    overlay: false
  }),
  methods:{
    ...mapActions(['register']),
    registerUser(){
      let user = {
        username: this.formReg.username,
        password: this.formReg.password,
        email: this.formReg.email,
        name: this.formReg.name,
        surname: this.formReg.surname
      }
      console.log(user)
      this.register(user).then(res =>{
        if(res.data.success){
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
