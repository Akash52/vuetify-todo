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
    <v-list flat class="pt-0">
      <div v-for="task in tasks" :key="task.id">
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
  </div>
</template>

<script>
export default {
  name: 'Todo',
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      tasks: [
        { id: 1, title: 'Wake up', active: true },
        { id: 2, title: 'Go to work', active: false },
        { id: 3, title: 'Go to bed', active: false }
      ]
    }
  },
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
      const newTask = {
        id: this.tasks.length + 1,
        title: this.todo,
        active: true
      }
      this.tasks.push(newTask)
      this.todo = ''
    }
  }
}
</script>

<style></style>
