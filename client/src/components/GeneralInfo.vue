<template>
    <v-container style="background-color: #FBFAFF; height:553px;">
      <v-row style="justify-content: center">
        <v-col cols="auto">
          <!--Форма заполнения данных-->
          <v-form @submit.prevent="updateProfile">
            <!-- Поле вводы имени-->
            <v-text-field
                id="name"
                v-model.trim="formProfile.name"
                :rules="formProfile.nameRule"
                :label="user.name"
                single-line
                rounded
                require
                style="width:450px; height:45px;background-color:#FBFAFF;
                  font-family:Nunito, sans-serif; font-weight:bold; box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15), -5px -5px 15px rgba(255, 255, 255, 0.7);"
                class="rounded-pill my-10 px-10 py-2"
                color="#806CE5"
            >
            </v-text-field>
            <!-- Поле вводы фамилии-->
            <v-text-field
                id="surname"
                v-model.trim="formProfile.surname"
                :rules="formProfile.surnameRule"
                :label="user.surname"
                rounded
                single-line
                require
                style="width:450px; height:45px;background-color:#FBFAFF;
                  font-family:Nunito, sans-serif; font-weight:bold; box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15), -5px -5px 15px rgba(255, 255, 255, 0.7);"
                class="rounded-pill my-10 px-10 py-2"
                color="#806CE5"
            >
            </v-text-field>
            <!--Поле ввода электронной почты-->
            <v-text-field
                id="email"
                v-model.trim="formProfile.email"
                :rules="formProfile.emailRule"
                :label="user.email"
                rounded
                single-line
                require
                style="width:450px; height:45px;background-color:#FBFAFF;
                  font-family:Nunito, sans-serif; font-weight:bold; box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15), -5px -5px 15px rgba(255, 255, 255, 0.7);"
                class="rounded-pill my-10 px-10 py-2"
                color="#806CE5"
            >
            </v-text-field>
            <!--Поле ввода имени пользователя-->
            <v-text-field
                id="username"
                v-model.trim="formProfile.username"
                :rules="formProfile.usernameRule"
                :label=user.username
                rounded
                single-line
                required
                style="width:450px; height:45px;background-color:#FBFAFF;
                  font-family:Nunito,sans-serif; font-weight:bold; box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15), -5px -5px 15px rgba(255, 255, 255, 0.7);"
                class="rounded-pill my-10 px-10 py-2"
                color="#806CE5"
            >
            </v-text-field>
            <!--Кнопка внесения изменений -->
            <v-btn
                text
                rounded
                style="box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15), -5px -5px 15px rgba(255, 255, 255, 0.7);"
                class="px-5 py-5 my-3"
                type="submit"
            >
              <v-card-text style="font-family:Montserrat,sans-serif; font-weight:bold;">
                Сохранить
              </v-card-text>
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "GeneralInfo",
  data: () => ({
    userId: '',
    formProfile: {
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
      ]
    },
  }),
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    ...mapActions(['getProfile', 'update']),
    updateProfile(){
      let id = this.userId
      let user = {
        name: this.formProfile.name,
        surname: this.formProfile.surname,
        email: this.formProfile.email,
        username: this.formProfile.username
      }
      console.log(user, id)
      this.update(user, id).then(res => {
        if (res.data.success) {
          this.$router.go()
        }
      })
    }
  },
  created() {
    this.getProfile().then(res => (this.userId = res.data.user._id))
  }
}
</script>

<style scoped>

</style>
