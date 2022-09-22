<template>
  <div id="ideas" class="ideas-section -section">
    <SectionHeader
      :title="copy.title"
      :description="copy.description"
      :link="copy.link"
      :linkLabel="copy.linkLabel"
      :color="palette[0]"
    />
    <IdeasIdeaList
      v-if="ideas"
      :ideas="cleanIdeas"
      :projects="projects"
      :palette="palette"
    />
  </div>
</template>

<script>
import copy from "~/assets/copy.json";

export default {

  props: [
    'palette',
    'projects',
    'ideas'
  ],

  data() {
    return {
      copy: copy.ideas
    }
  },

  computed: {
    cleanIdeas() {
      const result = []

      let idea
      for(let i=0; i<this.ideas.length; i++) {
        idea = this.ideas[i]

        if(idea.fields.Name && 
          idea.fields.Name.length > 0 && 
          idea.fields.Description && 
          idea.fields.Description.length > 0
        ) {
          result.push(idea)
        }
      }

      return this.shuffle(result)
    }
  },

  methods: {
    shuffle(a) {
      let j, x, i;
      for(i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    }
  }

}
</script>

