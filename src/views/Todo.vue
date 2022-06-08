<template>
  <div class="home">
    <field-add-task />
    <task-list v-if="$store.state.tasks.length" />
    <div v-else class="no-tasks">
      <v-icon size="100" color="primary"> mdi-check </v-icon>
      <div class="text-h5 primary--text">No tasks</div>
    </div>
  </div>
</template>

<script>
import FieldAddTask from '../components/Todo/FieldAddTask.vue'
import TaskList from '../components/Todo/TaskList.vue'
export default {
  components: { FieldAddTask, TaskList },
  name: 'Home'
}
</script>

<style lang="sass">
.no-tasks
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  opacity: 0.5
</style>
