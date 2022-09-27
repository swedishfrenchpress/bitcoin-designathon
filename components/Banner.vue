<template>
  <div :class="classObject" :style="styleObject" ref="canvas">
    <BannerCircles
      :palette="palette"
      :bannerSize="bannerSize"
      :isMobile="isMobile"
    />
    <div class="title">
      <a href="https://bitcoin.design" title="Bitcoin Design">
        <img
          src="~/assets/images/seal.svg"
          alt="Bitcoin design community logo"
        />
      </a>
      <BannerTitle
        :palette="palette"
        :moving="moving"
        @hoverLetter="hoverLetter"
        @unhoverLetter="unhoverLetter"
      />
      <p>Let’s get creative with bitcoin.<br/>October 12 to 23, 2022.</p>
      <div class="options" v-if="showButtons">
        <a
          href="https://bitcoin.design"
          :style="linkStyle"
        >Bitcoin Design</a>
        <a
          href="https://twitter.com/bitcoin_design"
          :style="linkStyle"
          title="Follow on Twitter"
          rel="me nofollow noindex"
        >
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.362 3.73872C14.368 3.87972 14.372 4.02072 14.372 4.16372C14.372 8.50072 11.07 13.5027 5.032 13.5027C3.24796 13.5045 1.5011 12.9928 0 12.0287C0.257 12.0587 0.518 12.0737 0.783 12.0737C2.26119 12.0763 3.69725 11.5814 4.86 10.6687C4.17496 10.6561 3.51101 10.4297 2.96106 10.021C2.41111 9.61237 2.00271 9.04199 1.793 8.38972C2.28528 8.48315 2.79234 8.46366 3.276 8.33272C2.53313 8.18267 1.86506 7.78023 1.38513 7.19367C0.905211 6.60712 0.643002 5.87259 0.643 5.11472V5.07272C1.085 5.31872 1.592 5.46672 2.13 5.48372C1.43419 5.02004 0.941591 4.30827 0.752773 3.49371C0.563956 2.67916 0.693157 1.82325 1.114 1.10072C1.93827 2.11486 2.9666 2.94432 4.13225 3.53524C5.29789 4.12615 6.57477 4.46532 7.88 4.53072C7.71463 3.82662 7.7864 3.08762 8.08415 2.4285C8.38191 1.76938 8.88899 1.22703 9.52663 0.885691C10.1643 0.544353 10.8968 0.423132 11.6104 0.540857C12.324 0.658581 12.9788 1.00866 13.473 1.53672C14.2083 1.39228 14.9135 1.12306 15.558 0.740722C15.3127 1.50077 14.8 2.14601 14.115 2.55672C14.7655 2.47909 15.4009 2.30484 16 2.03972C15.5591 2.69875 15.0045 3.27406 14.362 3.73872V3.73872Z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: [
    'isMobile',
    'palette'
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

    return {
      moving: false,
      showButtons: false,
      bannerSize
    }
  },

  mounted() {
    window.addEventListener('resize', this.onResize.bind(this))

    this.onResize()

    setTimeout(this.animate.bind(this), 100)
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
        // s.backgroundColor = this.palette[4]
      }

      return s
    },

    linkStyle() {
      return {
        backgroundColor: this.palette[1]
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
      this.$emit('hoverLetter', letter);
    },

    unhoverLetter(letter) {
      this.$emit('unhoverLetter', letter);
    }
  }

}
</script>

<style lang="scss">

@import "@/assets/css/animations.scss";
@import "@/assets/css/mixins.scss";

.banner {
  // position: relative;
  // overflow-x: hidden;
  // overflow-y: visible;

  .title {
    // position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    @include media-query(small) {
      min-height: 600px;
    }

    @include media-query(medium-up) {
      min-height: 900px;
    }

    > a {
      margin: 0;
      @include r('margin-bottom', 20, 40);
      transition: all 600ms $easeOutBack;
      transform: translateY(50px);
      opacity: 0;

      img {
        @include r('width', 120, 160);
        @include r('height', 120, 160);
      }
    }

    p {
      margin: 0;
      @include r('margin-top', 20, 40);
      @include r('font-size', 18, 27);
      font-weight: 600;
      text-align: center;
      color: rgba(var(--frontRGB), 0.75);
      transition: all 600ms $easeOutBack;
      transform: translateY(-50px);
      opacity: 0;
    }

    .options {
      display: flex;
      gap: 30px;
      @include r('margin-top', 40, 40);
      transition:
        background-color 150ms ease-in-out,
        transform 600ms $easeOutBack;
      transform: translateY(-100px);
      opacity: 0;

      a {
        display: inline-block;
        position: relative;
        border: 2px solid black;
        text-decoration: none;
        border-radius: 1000px;
        @include r('font-size', 18, 27);
        font-weight: 900;
        padding: 5px 50px 6px 50px;
        color: black;

        svg {
          width: 25px;
          height: 25px;
          margin-right: 10px;
          vertical-align: middle;
          transform: translateY(-2px);
        }

        &:nth-child(2) {
          padding-left: 15px;
          padding-right: 15px;
          text-align: center;

          svg {
            margin-right: 0;
          }
        }

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
          transition: all 150ms ease-in-out;
        }

        &:hover {
          &:before {
            left: -6px;
            top: -6px;
            width: calc(100% + 8px);
            height: calc(100% + 8px);
          }
        }
      }
    }
  }

  &.-dark {
    p {
      color: white;
    }

    .options {
      a {
        color: white;
        border-color: white;

        svg {
          color: white;
        }

        &:before {
          border-color: rgba(white, 0.2);
        }
      }
    }
  }

  &.-moving {
    .title {
      > a {
        opacity: 1;
        transform: translateY(0);
      }

      p {
        opacity: 1;
        transform: translateY(0);
      }

      .options {
        opacity: 1;
        transform: translateY(0);

        a {
          &:hover {
            // transform: scale(1.05, 1.05);
            animation: buttonHover 500ms infinite $easeInOutSine alternate-reverse;
          }
        }
      }
    }
  }

  @include media-query(small) {
    .options {
      flex-direction: column;
    }
  }
}

@keyframes buttonHover {
  0% {
    transform: scale(1, 1);
  }

  100% {
    transform: scale(1.05, 1.05);
  }
}

</style>
