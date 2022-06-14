<template>
  <div class="rounded-pill mx-auto alert-danger">{{ msg }}</div>
</template>

<script>
export default {
  name: "Errors",
  props: ['msg']
}
</script>

<style lang="scss" scoped>
  .alert-danger{
    width: 450px;
    font-family: Nunito, sans-serif;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    color: #FF2323;
    padding: 10px 0 10px 0;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15), -5px -5px 15px rgba(255, 255, 255, 0.7);;
  }
</style>
