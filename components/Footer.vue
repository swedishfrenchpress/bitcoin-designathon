<template>
  <footer class="footer -section">
    <a href="https://bitcoin.design" title="Bitcoin Design">
      <img
        src="~/assets/images/seal.svg"
        alt="Bitcoin design community logo"
      />
    </a>
    <p>Brought to you by the<br><b><a href="https://bitcoin.design">Bitcoin Design Community</a></b></p>
  </footer>
</template>

<script>
export default {

  props: [
    'title',
    'description',
    'link',
    'linkLabel',
    'color'
  ]

}
</script>

<style lang="scss" scoped>

@import "@/assets/css/animations.scss";
@import "@/assets/css/mixins.scss";

.footer {
  gap: 0;

  p {
    margin-top: 10px;
    @include r('font-size', 18, 22);
    text-align: center;

    b {
      color: var(--front);
      font-weight: 900;

      a {
        color: var(--front);
        text-decoration: none;
      }
    }
  }
}

</style>
