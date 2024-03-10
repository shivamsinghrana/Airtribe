<template>
  <div class="task-card rounded-md cursor-pointer" @click="showDetails">
    <h2 class="text-lg">{{ title }}</h2>
  </div>
</template>


<script>
export default {
  props: {
    title: String, // Todo object to display
    description: String,
  },
  methods: {
    showDetails() {
      // Emit event to show details popup
      this.$emit("show-details", {
        title: this.title,
        description: this.description,
      });
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