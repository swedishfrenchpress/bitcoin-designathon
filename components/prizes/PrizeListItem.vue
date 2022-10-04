<template>
  <div
    class="prize-list-item" 
    @mouseenter="hover" 
    @mouseleave="unhover"
  >
    <PrizesPrizeVisualsOne
      v-if="prize.name == '1'"
      :palette="palette"
    />
    <PrizesPrizeVisualsTwo 
      v-if="prize.name == '2'"
      :palette="palette" 
    />
    <PrizesPrizeVisualsThree 
      v-if="prize.name == '3'" 
      :palette="palette"
    />
    <p v-html="prize.description" />
  </div>
</template>

<script>
export default {

  props: [
    'palette',
    'prize',
    'color'
  ],

  data() {
    return {
      hovering: false
    }
  },

  computed: {

  },

  methods: {
    hover() {
      this.hovering = true
    },

    unhover() {
      this.hovering = false
    }
  }

}
</script>

<style lang="scss">

@import "@/assets/css/animations.scss";
@import "@/assets/css/mixins.scss";

.prize-list-item {
  position: relative;
  background-color: white;
  border: 1px solid black;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 15px 40px 15px;
  box-shadow: -8px 8px 0 rgba(black, 0.07);
  flex-grow: 1;
  transition: all 250ms $ease;
  box-sizing: border-box;

  h3 {
    text-align: center;
    @include r('font-size', 22, 27);
    font-weight: 900;
  }

  p {
    margin: 10px 0 0 0;
    text-align: center;
    @include r('font-size', 13, 15);
    color: rgba(black, 0.75);

    a {
      color: black;

      &:hover {
        color: var(--palette-0);
        cursor: pointer;
      }
    }
  }

  @include media-query(medium) {
    flex-basis: 40%;
  }

  @include media-query(large) {
    flex-basis: 26%;
  }
}

</style>


