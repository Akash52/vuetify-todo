<template>
  <div class="home">
    <v-text-field
      class="pa-3"
      v-model="todo"
      @click:append="addTodo"
      label="Todo"
      @keyup.enter="addTodo"
      append-icon="mdi-plus"
      hide-details
      clearable
    ></v-text-field>
    <v-list flat class="pt-0" v-if="$store.state.tasks.length">
      <div v-for="task in $store.state.tasks" :key="task.id">
        <v-list-item
          @click="doneTask(task.id)"
          :class="{ 'blue lighten-5': task.active }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.active"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.active }"
              >
                {{ task.title }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click.stop="removeTask(task.id)">
                <v-icon color="red lighten-2">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
    <div v-else class="no-tasks">
      <v-icon color="primary" size="100">mdi-check</v-icon>
      <span class="text-h5 primary--text">No tasks</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todo',

  methods: {
    // eslint-disable-next-line space-before-function-paren
    doneTask(id) {
      this.tasks.forEach((task) => {
        if (task.id === id) {
          task.active = !task.active
        }
      })
    },
    // eslint-disable-next-line space-before-function-paren
    removeTask(id) {
      if (confirm('Are you sure?')) {
        this.tasks = this.tasks.filter((task) => task.id !== id)
      }
    },
    // eslint-disable-next-line space-before-function-paren
    addTodo() {
      if (this.todo !== '' && this.todo.trim()) {
        this.tasks.push({
          id: this.tasks.length + 1,
          title: this.todo,
          active: false
        })
        this.todo = ''
      }
    }
  }
}
</script>

<style lang="scss">
.no-tasks {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
}
</style>
