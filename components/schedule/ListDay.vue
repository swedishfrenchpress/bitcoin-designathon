<template>
  <div
    :id="elementId"
    :class="classObject"
  >
    <h3
      role="button"
      :aria-controls="'day-content-'+this.dayId"
      :aria-expanded="expanded"
      @click="toggleExpand"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.0781 10.7682L6.64018 18.6332C5.98886 19.176 5 18.7128 5 17.865L5 2.13504C5 1.2872 5.98886 0.824045 6.64018 1.36682L16.0781 9.23178C16.5579 9.63157 16.5579 10.3684 16.0781 10.7682Z" :fill="palette[1]" stroke="black"/>
        </svg><span v-html="day.label" /></h3>
    <div
      :id="'day-content-'+this.dayId"
      :aria-hidden="expanded ? 'false' : 'true'"
      :style="contentStyle"
    >
      <div ref="content">
        <ScheduleListEvent
          v-if="events.length > 0"
          v-for="item in events"
          :key="item.id"
          :palette="palette"
          :event="item"
        />
        <p v-if="events.length == 0">No events scheduled yet.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: [
    'palette',
    'dayId',
    'day',
    'schedule',
    'activeDayId'
  ],

  data() {
    const elementId = this.dayId

    return {
      elementId: 'day-' + elementId,
      contentHeight: 0,
      visible: false
    }
  },

  watch: {
    expanded() {
      this.updateContentHeight()
    }
  },

  mounted() {
    this.updateContentHeight()

    setTimeout(this.setVisible.bind(this), 5)
  },

  computed: {
    classObject() {
      const c = ['schedule-list-day']

      if(this.expanded) {
        c.push('-expanded')
      }

      if(this.visible) {
        c.push('-visible')
      }

      return c.join(' ')
    },

    contentStyle() {
      // let height = 0

      // if(this.expanded && this.$refs.content) {
      //   height = this.$refs.content.offsetHeight
      // }

      return { height: this.contentHeight + 'px' }
    },

    expanded() {
      return this.dayId == this.activeDayId
    },

    events() {
      const result = []

      let scheduleEvent, eventDay
      for(let i=0; i<this.schedule.length; i++) {
        scheduleEvent = this.schedule[i]

        if(scheduleEvent.fields.Date) {
          eventDay = scheduleEvent.fields.Date.substr(0, 10)

          if(eventDay == this.dayId) {
            result.push(scheduleEvent)
          }
        }
      }

      // Add sorting.

      return result
    }
  },

  methods: {
    toggleExpand() {
      // this.expanded = !this.expanded

      this.$emit('toggle', {
        id: this.dayId, 
        expanded: !this.expanded
      })
    },

    updateContentHeight() {
      let result = 0

      if(this.expanded && this.$refs.content) {
        result = this.$refs.content.offsetHeight
      }

      this.contentHeight = result
    },

    setVisible() {
      this.visible = true
    }
  }
}
</script>

<style lang="scss">

@import "@/assets/css/animations.scss";
@import "@/assets/css/mixins.scss";

.schedule-list-day {
  padding-top: 15px;
  padding-bottom: 15px;

  h3 {
    @include r('font-size', 18, 24);
    font-weight: 600;
    cursor: pointer;
    transition: all 100ms $ease;

    svg {
      margin-right: 10px;
      transition: all 150ms $ease;
      vertical-align: middle;

      path {
        stroke: var(--front);
      }
    }

    span {
      i {
        font-weight: 400;
        font-style: normal;
        color: rgba(var(--frontRGB), 0.5);
      }
    }

    &:hover {
      color: var(--palette-1);
    }
  }

  > div {
    overflow-y: hidden;

    > div {
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: stretch;
    }
  }

  &.-visible {
    > div {
      transition: height 400ms $ease;
    }
  }

  &.-expanded {
    h3 {
      svg {
        transform: rotate(90deg);
      }
    }
  }
}

</style>

