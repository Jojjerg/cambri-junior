<template>
  <div
    style="
      height: 553px;
      background: #fbfbfb;
      display: flex;
      justify-content: center;
      align-items: center;
    "
  >
    <button v-on:click.prevent="pay" class="btn">Оплатить</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import pay from '../modules/qiwi'
export default {
  data() {
    return{
      userId: ''
    }
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
     ...mapActions(["getProfile"]),
    async pay() {
      try {
        let bill = this.userId;
        await pay.post(bill).then((data) => {
          let link = data;
          console.log(link);
        });
        setInterval(async () => {
          await pay.get(bill);
        }, 300000);
      } catch (err) {
        console.error(err);
      }
    },
  },
  created() {
    this.getProfile().then(res => (this.userId = res.data.user._id))
  }
};
</script>

<style lang="scss" scoped>
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

  transition: all 100ms ease-in-out;

  &:hover{
     background: #c9c8c8;
  }
}
</style>
