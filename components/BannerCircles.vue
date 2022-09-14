<template>
  <div :class="classObject">
    <BannerCircle
      v-if="windowSize"
      v-for="info in circles"
      :key="'stuff_'+info.id"
      :info="info"
      :windowSize="windowSize"
      :palette="palette"
      @die="circleDeath"
    />
  </div>
</template>

<script>
export default {

  props: [
    'palette',
    'windowSize'
  ],

  data() {
    return {
      circleIndex: 0,
      circles: []
    }
  },

  mounted() {
    this.generateCircles()
  },

  computed: {
    classObject() {
      const c = ['banner-circles']

      return c.join(' ')
    }
  },

  methods: {
    generateCircles() {
      let count = 10;
      while(count > 0) {
        this.generateCircle()
        count--
      }
    },

    generateCircle() {
      const id = 'index_'+this.circleIndex

      const xRange = 0.1
      const yRange = 0.05
      const xEndRange = 0.8
      const yEndRange = 0.4
      const sizeMin = 0.05
      const sizeMax = 0.25

      const data = {
        id: id,
        className: 'circle',
        duration: Math.floor(Math.random() * 1500 + 500),
        pulseDuration: Math.floor(Math.random() * 5000 + 5000),
        color: Math.floor(Math.random() * 3),
        startX: Math.random()*xRange - xRange/2 + 0.5,
        startY: Math.random()*yRange - yRange/2 + 0.5,
        endX: Math.random()*xEndRange - xEndRange/2 + 0.5,
        endY: Math.random()*yEndRange - yEndRange/2 + 0.5,
        size: Math.random() * (sizeMax - sizeMin) + sizeMin
      }

      this.circles.push(data)

      this.circleIndex++;
    },

    startTimer() {

    },

    circleDeath(id) {
      let i, circle
      for(i=0; i<this.circles.length; i++) {
        circle = this.circles[i]
        if(circle.id == id) {
          this.circles.splice(i, 1)
          this.generateCircle()
          break
        }
      }
    }
  }

}
</script>

<style lang="scss" scoped>

.banner-circles {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 800px;
}

</style>
