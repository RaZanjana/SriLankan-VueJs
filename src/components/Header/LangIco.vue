<template>
  <div class="d-flex align-items-center">
      <span>EN</span>&nbsp;<country-flag country="lk" size="small" />
  </div>
</template>

<script>
import CountryFlag from "vue-country-flag-next";
export default {
  name: "LangIco",
  components: {
    CountryFlag,
  },
};
</script>
