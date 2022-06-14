<template>
  <v-main>
    <v-card
        class="pi-inf-block mx-auto mt-3"
        flat
        style="overflow: hidden"
        v-if="user"
    >
      <v-row style="justify-content: center">
        <v-container class="px-10">
          <v-img
              src="@/assets/profileimgbg.png"
              style="border-radius: 20px; border: 7px solid #FBFAFF; box-shadow: -10px -10px 10px rgba(255, 255, 255, 0.7), 10px 10px 10px rgba(0, 0, 0, 0.05);"
              height="200"
              class="mb-15"
          >
            <v-row
                style="justify-content:center"
                class="pt-10"
            >
              <v-badge
                overlap
                color="transparent"
              >
                <template v-slot:badge>
                  <v-card
                      class="rounded-circle py-1 px-1"
                      color="rgba(255, 255, 255, 0.3)"
                  >
                    <v-img
                        v-if="!isPayed"
                        src="@/icons/starfalse.svg"
                        width="20"
                        height="20"
                    >
                    </v-img>
                    <v-img
                        v-else
                        src="@/icons/startrue.svg"
                        width="20"
                        height="20"
                    >
                    </v-img>
                  </v-card>
                </template>
                <v-avatar size="85">
                  <v-img
                      alt="user"
                      :src="user.avatar"
                      class="add-img"
                      width="85"
                      height="85"
                  >
                  </v-img>
                </v-avatar>
              </v-badge>
            </v-row>
            <v-row style="justify-content:center">
              <v-card-title
                  style="justify-content:flex-start; color:#FBFAFF; font-family:Montserrat, sans-serif; font-size:18px; font-weight:bold"
                  class="mx-auto"
              >
                {{user.name}} {{user.surname}}
              </v-card-title>
            </v-row>
          </v-img>
          <v-tabs
              v-model="tabMode"
              fixed-tabs
              color="#806CE5"
              background-color="#FBFAFF"
          >
            <v-tab
              :key="'data'"
              style="font-family: Montserrat, sans-serif; font-weight: bold; font-size: 16px; color: #313131"
            >
              <v-icon color="#806CE5" class="mr-5">mdi-card-account-details</v-icon>Общая информация
            </v-tab>
              <v-tab-item :key="'data'">
                <generalInfo></generalInfo>
              </v-tab-item>
            <v-tab
                :key="'social'"
                style="font-family: Montserrat, sans-serif; font-weight: bold; font-size: 16px; color: #313131"
            >
              <v-icon color="#806CE5" class="mr-5">mdi-card-account-mail</v-icon>Соц. сети
            </v-tab>
              <v-tab-item :key="'social'">
              <socialInfo></socialInfo>
            </v-tab-item>
            <v-tab
                :key="'card'"
                style="font-family: Montserrat, sans-serif; font-weight: bold; font-size: 16px; color: #313131"
            >
              <v-icon color="#806CE5" class="mr-5">mdi-credit-card</v-icon>Оплата
            </v-tab>
              <v-tab-item :key="'card'">
              <cardChange></cardChange>
            </v-tab-item>
          </v-tabs>
        </v-container>
      </v-row>
    </v-card>
  </v-main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import generalInfo from '../components/GeneralInfo'
import cardChange from '../components/ChangeCredit'
import socialInfo from "../components/SocialInfo";
export default {
  name: "Profile",
  components: {
    generalInfo,
    cardChange,
    socialInfo
  },
  data(){
    return {
      tabMode: 'data',
    }
  },
  computed: {
    ...mapGetters(['user', 'isPayed'])
  },
  methods: {
    ...mapActions([''])
  },

}
</script>

<style lang="scss" scoped>
.pi-page{
  display: flex;
  flex-wrap:wrap-reverse;
  justify-content: center;
  align-items: center;
}
.pi-inf-block{
  display: flex;
  width: 2000px;
  height: 770px;
  border-radius: 10px;
  box-shadow: -10px -10px 10px rgba(255, 255, 255, 0.7), 10px 10px 10px rgba(0, 0, 0, 0.05);
  background: transparent;

  overflow: hidden;
}
.add-img{
  position: relative;

  &::after{
    content: '';
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0, 0.6);
    background-image: url("../icons/camera.svg");
    background-position: center;
    z-index: 100;

    transition: opacity 150ms ease-in-out;
  }

  &:hover::after{
    opacity: 1;
  }
}
</style>
