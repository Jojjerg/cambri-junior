<template>
  <v-main>
    <v-lazy>
      <v-row
        style="
          justify-content: center;
          flex-direction: column;
          align-items: center;
        "
      >
        <v-row
          style="
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-top: 50px;
          "
        >
          <div
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              width: 700px;
              text-align: center;
            "
            class="users"
          >
            <v-col cols="2" class="col">Имя </v-col>
            <v-col cols="2" class="col">Фамилия</v-col>
            <v-col cols="2" class="col">Логин</v-col>
            <v-col cols="2" class="col">Почта</v-col>
            <v-col cols="2" class="col">Оплатил</v-col>
            <div><v-icon>mdi-account-cog</v-icon></div>
          </div>
        </v-row>
        <v-row
          style="
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-top: 50px;
          "
          v-for="user in allUsers"
          :key="user._id"
        >
          <div
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              width: 700px;
              text-align: center;
            "
            class="users"
          >
            <v-col cols="2">{{ user.name }}</v-col>
            <v-col cols="2">{{ user.surname }}</v-col>
            <v-col cols="2">{{ user.username }}</v-col>
            <v-col cols="2">{{ user.email }}</v-col>
            <v-col cols="2">{{ user.payed }}</v-col>
            <button v-on:click="showId"><v-icon>mdi-cog</v-icon></button>
          </div>
        </v-row>
      </v-row>
    </v-lazy>
  </v-main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AdminPanel",
  data() {
    return {
      allUsers: [],
    };
  },
  computed: {
    ...mapGetters(["users"]),
  },
  methods: {
    ...mapActions(["getUsers"]),
    showId() {
      let id = this.allUsers
      console.log(id)
    }
  },
  created() {
    this.getUsers().then((res) => (this.allUsers = res.data.allUsers));
  },
};
</script>

<style scoped>
.btn {
  margin: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  background: #fbfaff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15),
    -5px -5px 15px rgba(255, 255, 255, 0.7);
  border-radius: 50px;
  color: #313131;

  font-family: Montserrat;
  font-weight: bold;
}

.col {
  font-weight: bold;
}

.users {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  background: #fbfaff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15),
    -5px -5px 15px rgba(255, 255, 255, 0.7);
  border-radius: 50px;
}

iframe {
  width: 560px;
  height: 315px;
}

@media (max-width: 450px) {
  h2 {
    font-size: 18px;
  }

  iframe {
    width: 300px;
    height: 215px;
  }

  v-card-text {
    font-size: 12px;
  }

  .btn {
    margin: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-right: 20px;
    background: #fbfaff;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15),
      -5px -5px 15px rgba(255, 255, 255, 0.7);
    border-radius: 50px;
    color: #313131;

    font-family: Montserrat;
    font-weight: bold;
  }
}
</style>
