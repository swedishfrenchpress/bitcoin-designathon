<template>
  <div v-if="ideaList" :class="classObject">
    <h5>Based on this idea</h5>
    <a
      v-for="idea in ideaList"
      :key="idea.id"
      :href="'#idea-'+idea.id"
    >{{ idea.fields.Name }}</a>
  </div>
</template>

<script>
export default {

  props: [
    'project',
    'ideas',
    'align'
  ],

  data() {
    return {
      hovering: false
    }
  },

  computed: {
    classObject() {
      const c = []

      if(this.align) {
        c.push('-'+this.align)
      } else {
        c.push('-left')
      }

      return c.join(' ')
    },

    ideaList() {
      let result = []

      if(this.project.fields.Ideas) {
        let ideaId, idea, i, k
        for(i=0; i<this.project.fields.Ideas.length; i++) {
          ideaId = this.project.fields.Ideas[i]

          for(k=0; i<this.ideas.length; i++) {
            idea = this.ideas[i]

            if(idea.id == ideaId) {
              result.push(idea)
            }
          }
        }
      }

      if(result.length == 0) {
        result = null
      }

      return result
    }
  }

}
</script>

<style lang="scss" scoped>

@import "@/assets/css/animations.scss";
@import "@/assets/css/mixins.scss";

div {
  margin-top: 20px;

  h5 {
    font-weight: 900;
    @include r('font-size', 15, 18);
    color: black;

    & + a {
      margin-top: 5px;
    }
  }

  a {
    display: inline-block;
    @include r('font-size', 15, 18);
    text-align: center;
    color: rgba(black, 0.75);
  }

  &.-center {
    text-align: center;
  }
}

</style>


