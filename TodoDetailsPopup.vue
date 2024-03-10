<template>
  <div
    class="w-screen h-screen flex items-center justify-center absolute top-0 right- left-0 overflow-hidden"
  >
    <div class="popup p-20 relative">
      <div
        class="c absolute top-4 left-4 text-red-600 font-bold cursor-pointer select-none"
        @click="closePopup"
      >
        X
      </div>
      <h2><span class="font-bold">Title:</span> {{ todo.title }}</h2>
      <p><span class="font-bold"> description:</span>{{ todo.description }}</p>
      <!-- Add more details as needed -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object, // Todo object to display details
  },
  methods: {
    closePopup() {
      this.$emit("close-popup");
    },
  },
};
</script>

<style scoped>
.popup {
  background-color: white;

  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>


