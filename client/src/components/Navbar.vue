<template>
  <v-main>
<!--Объявление навигационной панели-->
    <v-app-bar
        app
        color="#FBFAFF"
        elevation="0"
        class="px-5"
        id="navBar"
    >
      <h1 style="font-family:Quicksand; color:#313131; font-size:2em">C<span style="color: #806CE5">J</span></h1>
      <v-spacer></v-spacer>
<!--Кнопка перехода на главную страницу-->
      <v-btn
          x-small
          color="#FBFAFF"
          fab
          raised
          class="rounded-cirle mx-2"
          style="box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);"
          to="/"
      >
        <v-icon style="color:#806CE5; font-size:2em">mdi-home</v-icon>
      </v-btn>
<!--Кнопка перехода на страницу уроков-->
      <v-btn
          x-small
          color="#FBFAFF"
          fab
          raised
          class="rounded-cirle mx-2"
          style="box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);"
          v-if="isLoggedIn"
          to=/lessons
      >
        <v-icon style="color:#806CE5; font-size:2em">mdi-book-open-page-variant</v-icon>
      </v-btn>
<!--Выпадающее меню выбора перехода в личный кабинет и выхода из аккаунта-->
      <v-speed-dial
          v-model="fab"
          :direction="direction"
          :open-on-hover="hover"
          :transition="transition"
      >
        <template v-slot:activator>
          <v-btn
              x-small
              color="#FBFAFF"
              fab
              raised
              class="rounded-cirle mx-2"
              style="box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);"
          >
            <v-icon style="color:#806CE5; font-size:2em" v-if="fab">
              mdi-close
            </v-icon>
            <v-icon style="color:#806CE5; font-size:2em" v-else>
              mdi-account
            </v-icon>
          </v-btn>
        </template>
<!--Кнопка перехода во вкладку админ панели-->
      <v-tooltip left>
          <template v-slot:activator="{ on }">
            <v-btn
                color="#FBFAFF"
                fab
                raised
                class="rounded-cirle mx-2"
                style="box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);"
                v-on="on"
                to="/adminpanel"
            >
              <v-icon style="color:#806CE5; font-size:2em">mdi-account-tie</v-icon>
            </v-btn>
          </template>
          Панель администратора
        </v-tooltip>
<!--Кнопка перехода во вкладку регистрации-->
        <v-tooltip left v-if="!isLoggedIn">
          <template v-slot:activator="{ on }">
            <v-btn
                color="#FBFAFF"
                fab
                raised
                class="rounded-cirle mx-2"
                style="box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);"
                v-on="on"
                to="/register"
            >
              <v-icon style="color:#806CE5; font-size:2em">mdi-account-multiple-plus</v-icon>
            </v-btn>
          </template>
          Регистрация
        </v-tooltip>
<!--Кнопка перехода во вкладку входа-->
        <v-tooltip left v-if="!isLoggedIn">
          <template v-slot:activator="{ on }">
            <v-btn
                color="#FBFAFF"
                fab
                raised
                class="rounded-cirle mx-2"
                style="box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);"
                v-on="on"
                to="/login"
            >
              <v-icon style="color:#806CE5; font-size:2em">mdi-account-arrow-right</v-icon>
            </v-btn>
          </template>
          Войти в аккаунт
        </v-tooltip>
<!--Кнопка перехода в личный кабинет-->
        <v-tooltip left v-if="isLoggedIn">
          <template v-slot:activator="{ on }">
            <v-btn
                color="#FBFAFF"
                fab
                raised
                class="rounded-cirle mx-2"
                style="box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);"
                v-on="on"
                to="/profile"
            >
              <v-icon style="color:#806CE5; font-size:2em">mdi-account-cog</v-icon>
            </v-btn>
          </template>
          Личный кабинет
        </v-tooltip>
<!--Кнопка выхода из аккаунта -->
        <v-tooltip left v-if="isLoggedIn">
          <template v-slot:activator="{ on }">
            <v-btn
                color="#FBFAFF"
                fab
                raised
                class="rounded-cirle mx-2"
                style="box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);"
                v-on="on"
                to="/logout"
                @click.prevent="logoutUser"
            >
              <v-icon style="color:#806CE5; font-size:2em">mdi-exit-to-app</v-icon>
            </v-btn>
          </template>
          Выйти из аккаунта
        </v-tooltip>
      </v-speed-dial>
    </v-app-bar>
<!--Просмотр перехода между страницами-->
  </v-main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "Navbar",
  data: () => ({
    direction: 'bottom',
    fab: false,
    hover: false,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: 'slide-y-reverse-transition',
  }),
  element: 'navBar',
  methods: {
    ...mapActions(['logout']),
    logoutUser(){
      this.logout()
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn', /*'isAdminIn'*/])
  }
}
</script>

<style lang="scss" scoped>
  @media (max-width: 450px) {
    v-app-bar {
      padding-left: 5px;
      padding-right: 5px;
    }
  }
</style>
