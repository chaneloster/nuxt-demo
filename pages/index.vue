<template>
  <div class="homepage">
    <h1>{{ homepageData.title[0].text }}</h1>

    <div class="banner-container">
      <img :src="homepageData.banner.url" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",
  // layout:"content",
  async asyncData({ $prismic, params, error }) {
    const homepage = await $prismic.api.getSingle("Homepage");
    const homepageData = homepage.data;
    return {
      homepageData,
    };
  },
};
</script>
