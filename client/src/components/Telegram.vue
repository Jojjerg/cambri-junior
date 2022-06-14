<template>
  <v-main>
    <v-footer fixed color="transparent">
      <v-speed-dial
        v-model="fab"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
      >
        <template v-slot:activator>
          <v-btn v-model="fab" color="#FBFAFF" fab>
            <v-icon style="color: #806ce5" v-if="fab"> mdi-close </v-icon>
            <v-icon style="color: #806ce5" v-else> mdi-message </v-icon>
          </v-btn>
        </template>
        <a href="https://t.me/CambriJBot" target="_blank">
          <v-btn color="#FBFAFF" small fab>
            <img style="fill: #806ce5" src="../icons/telegram.svg" />
          </v-btn>
        </a>
      </v-speed-dial>
    </v-footer>
  </v-main>
</template>

<script>
export default {
  name: "Telegram",
  data: () => ({
    direction: "top",
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: false,
    right: false,
    bottom: true,
    left: true,
    transition: "slide-y-reverse-transition",
  }),
};
</script>
