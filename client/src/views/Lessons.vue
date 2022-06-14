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
        <div
          style="display: flex; flex-direction: column; justify-content: center; align-items: center;"
          v-for="lesson in allLessons"
          :key="lesson._id"
        >
          <h2
            style="font-family: Nunito; margin-bottom: 10px; margin-top: 10px"
          >
            {{ lesson.title }}
          </h2>
          <iframe
            :src="lesson.url"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <button
            class="btn"
            text
            to="/"
          >
            Перейти к тесту
          </button>
        </div>
        <!-- <v-col
          id="lecture-detail"
          cols="6"
          style="background: cream"
        >
          <h1>{{ lesson.title }}</h1>
          <lecture-detail></lecture-detail>
        </v-col> -->
      </v-row>
    </v-lazy>
  </v-main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
//import LectureList from '../components/Lecture-list.vue';
//import LectureDetail from '../components/Lecture-detail.vue';
export default {
  name: "Lessons",
  data() {
    return {
      allLessons: [],
    };
  },
  computed: {
    ...mapGetters(["lesson"]),
  },
  methods: {
    ...mapActions(["getLessons"]),
  },
  created() {
    this.getLessons().then((res) => (this.allLessons = res.data.allLessons));
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
    background: #FBFAFF;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15), -5px -5px 15px rgba(255, 255, 255, 0.7);
    border-radius: 50px;
    color:#313131;

    font-family: Montserrat;
    font-weight: bold;
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
    background: #FBFAFF;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15), -5px -5px 15px rgba(255, 255, 255, 0.7);
    border-radius: 50px;
    color:#313131;

    font-family: Montserrat;
    font-weight: bold;

  }
}

</style>
