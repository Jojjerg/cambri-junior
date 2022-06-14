<template>
<!--Задаем общий фон приложения -->
  <v-app style="background-color:#FBFAFF; overflow-y: auto">
<!--Объявляем навигацционную панель-->
    <router-view/>
    <Navbar />
    <v-container>
      <Errors v-if="error" :msg="error" />
    </v-container>
    <Telegram />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex"
import Navbar from "./components/Navbar"
import Telegram from './components/Telegram'
import Errors from "./components/Errors"
export default {
  components: {
    Navbar,
    Telegram,
    Errors
  },
  computed: {
    ...mapGetters(['error'])
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'CambriJunior';
      }
    }
  }
}
</script>
