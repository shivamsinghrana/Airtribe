<template>
  <div class="mx-10">
    <div class="w-[300px]">
      <div class="cardItem flex my-3 justify-between items-center">
        <div class="flex items-center">
          <p class="bg-red-300 mx-1 px-3 py-0.5 rounded-sm">{{ status }}</p>
          <p class="mx-3 text-gray-600">{{ todo.length }}</p>
        </div>
        <div class="flex">
          <p class="text-gray-600 mx-3 text-xl pb-2.5">...</p>
          <p class="text-gray-600 text-2xl">+</p>
        </div>
      </div>
      <div v-for="item in todo" :key="item.id">
        <TaskItem
          :title="item.title"
          :description="item.description"
          @show-details="showDetailsPopup"
        />
      </div>
    </div>
    <div class="flex items-center" v-if="!isPopupVisible">
      <button class="text-gray-600 text-2xl pb-0.5" @click="showPopup">
        +
      </button>
      <p class="mx-3 text-gray-600">New</p>
    </div>
    <AddTodoPopup
      v-if="isPopupVisible"
      @add-todo="handleAddTodo"
      @close-popup="closePopup"
    />

    <TodoDetailsPopup
      v-if="isDetailsPopupVisible"
      :todo="selectedTodo"
      @close-popup="closeDetailsPopup"
    />
  </div>
</template>

<script>
import AddTodoPopup from "./AddTodoPopup.vue";
import TaskItem from "./TaskItem.vue";
import TodoDetailsPopup from "./TodoDetailsPopup.vue";
import draggable from "vuedraggable";

export default {
  props: {
    status: String,
    todo: Array,
    selectedTodo: null,
  },
  components: {
    AddTodoPopup,
    TaskItem,
    TodoDetailsPopup,
    draggable,
  },
  data() {
    return {
      task: {}, // Assuming you fetch task details from the Vuex store or an API
      isPopupVisible: false,
      isDetailsPopupVisible: false,
      selectedTodo: null,
    };
  },
  methods: {
    showPopup() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },

    showDetailsPopup(todo) {
      console.log(todo);
      this.selectedTodo = todo;
      this.isDetailsPopupVisible = true;
    },
    closeDetailsPopup() {
      this.isDetailsPopupVisible = false;
    },
    handleAddTodo(newTodo) {
      // Emit event with new todo data and status
      if (newTodo.title === "" && newTodo.description === "") {
        alert("Please enter title and description");
        return;
      }
      this.$emit("add-todo", { status: this.status, ...newTodo });
      this.isPopupVisible = false; // Close popup after adding todo
    },

    viewTaskDetails() {
      // Implement view task details functionality here
    },
  },
};
</script>

<style scoped>
.task-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>




