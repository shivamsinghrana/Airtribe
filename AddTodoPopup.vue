<template>
  <div
    class="popup flex-col w-[300px] bg-green-200 p-5 items-center justify-center"
  >
    <input
      v-model="newTodoTitle"
      placeholder="Enter  title"
      class="p-2 my-1 outline-none border-2 border-gray-300 rounded-md w-[250px]"
    />
    <input
      v-model="description"
      placeholder="Enter  description"
      class="p-2 my-1 outline-none border-2 border-gray-300 rounded-md w-[250px]"
    />
    <div class="flex items-center my-3">
      <button
        @click="addTodo"
        class="font-bold mx-4 bg-green-400 py-1 px-3 border-2 border-green-400 rounded-md text-white"
      >
        Add
      </button>
      <button
        @click="closePopup"
        class="font-bold mx-4 bg-red-400 py-1 px-3 border-2 border-red-400 rounded-md text-white"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoTitle: "",
      description: "",
    };
  },
  methods: {
    addTodo() {
      // Emit event with new todo data

      this.$emit("add-todo", {
        title: this.newTodoTitle,
        description: this.description,
      });
      this.newTodoTitle = ""; // Clear input field after adding todo
      this.description = ""; // Clear input field after adding todo
    },
    closePopup() {
      this.newTodoTitle = ""; // Clear input field after adding todo
      this.description = ""; // Clear input field after adding todo
      this.$emit("close-popup");
    },
  },
};
</script>
