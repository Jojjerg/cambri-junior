<template>
  <v-container style="display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: #fbfaff; height: 553px">
    <button class="social">
      Начните диалог с нашим ботом для получения уведомлений о новых онлайн-встреч
      <img src="../icons/vk.svg" />
    </button>
    <button class="social">
      Подключите GMAIL для получения уведомлений о новых онлайн-встреч
      <img src="../icons/google.svg"/>
    </button>
  </v-container>
</template>

<script>
export default {
  name: "SocialInfo",
};
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  text-align: left;

  margin: 50px 50px 0px 0px;
  
  padding-left: 20px;
  
  width: 50%;
  height: 100px;

  background: #fbfaff;
  box-shadow: -10px -10px 10px rgba(255, 255, 255, 0.7), 10px 10px 10px rgba(0, 0, 0, 0.05);
  border-radius: 50px;

  font-family: Nunito;
  font-weight: bold;

  transition: all 100ms ease-in-out;

  &:hover{
    background: #c9c8c8;
  }
}
</style>
