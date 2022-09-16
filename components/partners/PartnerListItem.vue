<template>
  <div class="partner-list-item">
    <a :href="partner.link">
      <img
        :src="require(`~/assets/images/${partner.image}`)"
        :srcset="srcset"
        alt=""
      />
    </a>
    <h3><a :href="partner.link">{{ partner.name }}</a></h3>
    <p>{{ partner.description }}</p>
  </div>
</template>

<script>
export default {

  props: [
    'partner'
  ],

  computed: {
    srcset() {
      return require(`~/assets/images/${this.partner.image}`)+' 1x, '+require(`~/assets/images/${this.partner.retina}`)+' 2x'
    }
  }

}
</script>

<style lang="scss" scoped>

@import "@/assets/css/animations.scss";
@import "@/assets/css/mixins.scss";

.partner-list-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-basis: 20%;
  flex-grow: 1;

  > a {
    img {
      width: 100%;
      height: auto;
      border: 1px solid black;
      border-radius: 15px;
    }
  }

  h3 {
    @include r('font-size', 18, 24);
    font-weight: 900;
    text-align: center;

    a {
      color: var(--front);
      text-decoration: none;
    }
  }

  p {
    @include r('font-size', 15, 18);
    text-align: center;
  }
}

</style>



