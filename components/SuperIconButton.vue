<template>
  <component
    :is="componentType"
    :class="classObject"
    :style="styleObject"
    :href="link"
    :target="target"
    :disabled="disabled"
    @click="click"
  >
    <svg v-if="icon == 'left'" width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8995 1L1.70709 10.1924C1.31656 10.5829 1.31656 11.2161 1.70709 11.6066L10.8995 20.799" stroke="currentcolor" stroke-width="2" stroke-linecap="round"/></svg>
    <svg v-if="icon == 'right'" width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.10046 1.20117L10.2929 10.3936C10.6834 10.7841 10.6834 11.4172 10.2929 11.8078L1.10047 21.0002" stroke="currentcolor" stroke-width="2" stroke-linecap="round"/></svg>
  </component>
</template>

<script>
export default {

  props: [
    'link',
    'icon',
    'color',
    'size',
    'invert',
    'disabled'
  ],

  computed: {
    classObject() {
      const c = ['super-icon-button']

      if(this.size) {
        c.push('-'+this.size)
      } else {
        c.push('-medium')
      }

      if(this.invert) {
        c.push('-invert')
      }

      if(this.disabled) {
        c.push('-disabled')
      }

      if(this.icon) {
        c.push('-'+this.icon)
      }

      return c.join(' ')
    },

    styleObject() {
      const s = {}

      if(this.color) {
        s.backgroundColor = this.color
      }

      return s
    },

    componentType() {
      return this.link ? 'a' : 'button'
    },

    target() {
      return (this.link && this.link.substr(0, 1) !== '#') ? '_blank' : null
    }
  },

  methods: {
    click() {
      if(!this.disabled) {
        this.$emit('click')
      }
    }
  }

}
</script>

<style lang="scss" scoped>

@import "@/assets/css/animations.scss";
@import "@/assets/css/mixins.scss";

.super-icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 2px solid var(--front);
  text-decoration: none;
  border-radius: 1000px;
  @include r('font-size', 17, 22);
  font-weight: 900;
  padding: 0;
  color: var(--front);
  text-align: center;
  width: 48px;
  height: 48px;
  cursor: pointer;
  transition: all 150ms ease-in-out;

  svg {
    width: 25px;
    height: 25px;
    color: var(--front);
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
    border: 2px solid rgba(var(--frontRGB), 0.2);
    position: absolute;
    left: -10px;
    top: -10px;
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    pointer-events: none;
    border-radius: 1000px;
    transition: all 150ms ease-in-out;
  }

  &.-small {
    @include r('font-size', 15, 17);
    border-width: 1px;
    width: 40px;
    height: 40px;
    padding: 0;

    svg {
      width: 20px;
      height: 20px;
    }

    &:before {
      left: -7px;
      top: -7px;
      width: calc(100% + 12px);
      height: calc(100% + 12px);
      border-width: 1px;
    }
  }

  &.-invert {
    border-color: black;

    &:before {
      border-color: rgba(black, 0.2);
    }
  }

  &.-left {
    svg {
      transform: translateX(-2px);
    }
  }

  &.-right {
    svg {
      transform: translateX(2px);
    }
  }

  &.-disabled {
    opacity: 0.25;
    cursor: default;
  }

  &:hover {
    animation: buttonHover 500ms infinite $easeInOutSine alternate;

    &:before {
      left: -6px;
      top: -6px;
      width: calc(100% + 8px);
      height: calc(100% + 8px);
    }
  }

  &.-small {
    &:hover {
      &:before {
        left: -4px;
        top: -4px;
        width: calc(100% + 6px);
        height: calc(100% + 6px);
      }
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
