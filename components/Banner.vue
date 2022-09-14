<template>
  <div :class="classObject" :style="styleObject" ref="canvas">
    <BannerCircles
      :palette="palette"
      :windowSize="bannerSize"
    />
    <div class="title">
      <img
        src="~/assets/images/seal.svg"
        alt="Bitcoin design community logo"
      />
      <BannerTitle
        :palette="palette"
        @hoverLetter="hoverLetter"
        @unhoverLetter="unhoverLetter"
      />
      <p>Let’s get creative with bitcoin.<br/>October 12 to 23, 2022.</p>
      <a
        href="https://bitcoin.design"
        :style="linkStyle"
      >Join us</a>
    </div>
  </div>
</template>

<script>
export default {

  props: [
    'windowSize'
  ],

  data() {
    let bannerSize

    if(process.browser) {
      const canvas = this.$refs.canvas
      if(canvas) {
        bannerSize = {
          width: canvas.offsetWidth,
          height: canvas.offsetHeight
        }
      }
    }

    /*

    1-3 for circles and letters
    4 for letter outline
    5 for background
    6 general light/dark theme

     */
    const palettes = [
      ['#E88BCA', '#B1F5FD', '#E63E2A', '#E63E2A'],
      ['#A64AC9', '#FFB38F', '#FD6E23', '#FFFFFF', '#1F185B', 'dark'],
      ['#EA2E00', '#16A9E1', '#17E9E0', '#FFFFFF'],
      ['#EA2E00', '#9DBDB8', '#ffcaaf', '#FFFFFF']
    ]

    return {
      moving: false,
      hoveredLetter: null,
      palettes,
      palette: palettes[0],
      bannerSize
    }
  },

  mounted() {
    window.addEventListener('resize', this.onResize.bind(this))

    this.onResize()

    setTimeout(this.animate.bind(this), 5)
  },

  computed: {
    classObject() {
      const c = ['banner']

      if(this.moving) {
        c.push('-moving')
      }

      if(this.palette.length > 5) {
        c.push('-'+this.palette[5])
      }

      return c.join(' ')
    },

    styleObject() {
      const s = {}

      if(this.palette.length > 4) {
        s.backgroundColor = this.palette[4]
      }

      return s
    },

    linkStyle() {
      return {
        backgroundColor: this.palette[0]
      }
    }
  },

  methods: {
    animate() {
      this.moving = true
    },

    onResize() {
      if(process.browser) {
        const canvas = this.$refs.canvas
        if(canvas) {
          this.bannerSize = {
            width: canvas.offsetWidth,
            height: canvas.offsetHeight
          }
        }
      }
    },

    hoverLetter(letter) {
      this.hoveredLetter = letter

      this.palette = this.palettes[letter%this.palettes.length]
    },

    unhoverLetter(letter) {
      if(this.hoveredLetter == letter) {
        this.hoveredLetter = null
      }
    }
  }

}
</script>

<style lang="scss">

@import "@/assets/css/animations.scss";
@import "@/assets/css/mixins.scss";

.banner {
  position: relative;

  .title {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      @include r('width', 50, 140);
      @include r('height', 50, 140);
      margin: 0;
      @include r('margin-bottom', 20, 40);
      transition: all 400ms $easeOutBack;
      transform: translateY(50px);
      opacity: 0;
    }

    p {
      margin: 0;
      @include r('margin-top', 20, 40);
      @include r('font-size', 18, 27);
      text-align: center;
      color: #3F3B38;
      transition: all 400ms $easeOutBack;
      transform: translateY(-50px);
      opacity: 0;
    }

    a {
      @include r('margin-top', 20, 40);
      display: inline-block;
      position: relative;
      border: 2px solid black;
      text-decoration: none;
      border-radius: 1000px;
      @include r('font-size', 18, 27);
      font-weight: 900;
      padding: 5px 50px;
      color: black;
      transition:
        background-color 150ms ease-in-out,
        transform 400ms $easeOutBack;
      transform: translateY(-100px);
      opacity: 0;

      &:before {
        display: block;
        content: '';
        border: 2px solid rgba(black, 0.2);
        position: absolute;
        left: -10px;
        top: -10px;
        width: calc(100% + 16px);
        height: calc(100% + 16px);
        pointer-events: none;
        border-radius: 1000px;
      }
    }
  }

  &.-dark {
    p {
      color: white;
    }

    a {
      color: white;
      border-color: white;

      &:before {
        border-color: rgba(white, 0.2);
      }
    }
  }

  &.-moving {
    .title {
      img {
        opacity: 1;
        transform: translateY(0);
      }

      p {
        opacity: 1;
        transform: translateY(0);
      }

      a {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}

</style>
