<template>
  <div
    :id="elementId"
    class="schedule-list-event" 
  >
    <div class="copy">
      <h3>{{ name }}<span v-html="formattedDate" /></h3>
      <p v-if="false" v-html="formattedDate" />
      <p v-if="description" v-html="description" />
    </div>
    <client-only>
      <div class="link" v-html="link" />
    </client-only>
  </div>
</template>

<script>
export default {

  props: [
    'palette',
    'event'
  ],

  computed: {
    elementId() {
      return 'schedule-event-'+this.event.id
    },

    name() {
      return this.event.fields.Name
    },

    description() {
      return this.event.fields.Description
    },

    formattedDate() {
      const dateObject = new Date(this.event.fields.Date)

      const minutes = dateObject.getMinutes()

      var zone = dateObject.toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2]

      return '@ ' + dateObject.getHours()+':'+(minutes > 9 ? minutes : '0' + minutes)+' '+zone
    },

    link() {
      return this.$md.render(this.event.fields.Link)
    }
  }

}
</script>

<style lang="scss">

@import "@/assets/css/animations.scss";
@import "@/assets/css/mixins.scss";

.schedule-list-event {
  display: flex;
  align-items: center;
  gap: 20px;
  border-top: 1px solid rgba(var(--frontRGB), 0.1);
  padding-top: 20px;
  padding-bottom: 20px;

  .copy {
    flex-grow: 1;

    h3 {
      @include r('font-size', 18, 21);
      font-weight: 600;

      span {
        padding-left: 10px;
        font-weight: 500;
        color: rgba(var(--frontRGB), 0.5);
      }
    }

    p {
      margin-top: 10px;
      @include r('font-size', 15, 19);
    }
  }

  .link {
    p {
      @include r('font-size', 15, 19);
      font-weight: 600;
    }
  }
}

</style>


