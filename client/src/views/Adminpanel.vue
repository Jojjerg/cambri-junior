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
          <v-col class="col">Имя </v-col>
          <v-col class="col">Фамилия</v-col>
          <v-col class="col">Логин</v-col>
          <v-col class="col">Почта</v-col>
          <v-col class="col">Оплатил</v-col>
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
              justify-content: center;
              align-items: center;
            "
            class="users"
          >
            <v-col>{{ user._id }}</v-col>
            <v-col>{{ user.name }}</v-col>
            <v-col>{{ user.surname }}</v-col>
            <v-col>{{ user.username }}</v-col>
            <v-col>{{ user.email }}</v-col>
            <v-col>{{ user.payed }}</v-col>
          </div>
        </v-row>
      </v-row>
    </v-lazy>
  </v-main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
//import LectureList from '../components/Lecture-list.vue';
//import LectureDetail from '../components/Lecture-detail.vue';
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
  },
  created() {
    this.getUsers().then((res) => (this.allUsers = res.data.allUsers));
  },
  components: {
    //LectureList,
    //LectureDetail
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
