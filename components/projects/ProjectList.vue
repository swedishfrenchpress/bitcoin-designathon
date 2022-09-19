<template>
  <div class="project-list">
    <ProjectListItem
      v-for="item in ideas"
      :key="item.id"
      :idea="item"
      :projects="projects"
    />
  </div>
</template>

<script>
export default {

  props: [
    'ideas',
    'projects'
  ]

}
</script>

