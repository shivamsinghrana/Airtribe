<template>
  <div class="flex relative">
    <!-- <TaskCard v-for="task in tasks" :key="task.id" :task="task" /> -->
    <TaskCard
      v-for="(statusTasks, status) in data[0]"
      :key="status"
      :status="status"
      :todo="statusTasks"
      :todosData="data"
      @add-todo="addTodo"
    />
  </div>
</template>

<script>
import TaskCard from "@/components/TaskCard.vue";

export default {
  components: {
    TaskCard,
  },
  mounted() {
    // Fetch data from local storage when the component is mounted
    const storedData = localStorage.getItem("myData");

    if (storedData) {
      // If data exists in local storage, parse it and set it to a data property
      this.data = JSON.parse(storedData);
    } else {
      this.data = [
        {
          todo: [
            {
              id: 1,
              title: "Task 1",
              status: "In Progress",
              description: "This is the first task",
            },
            {
              id: 2,
              title: "Task 2",
              status: "In Progress",
              description: "This is the second task",
            },
            {
              id: 3,
              title: "Task 3",
              status: "In Progress",
              description: "This is the third task",
            },
          ],

          inProgress: [
            {
              id: 4,
              title: "Task 4",
              status: "In Progress",
              description: "This is the fourth task",
            },
            {
              id: 5,
              title: "Task 5",
              status: "In Progress",
              description: "This is the fifth task",
            },
            {
              id: 6,
              title: "Task 6",
              status: "In Progress",
              description: "This is the sixth task",
            },
          ],

          done: [
            {
              id: 7,
              title: "Task 7",
              status: "Done",
              description: "This is the seventh task",
            },
            {
              id: 8,
              title: "Task 8",
              status: "Done",
              description: "This is the eighth task",
            },
            {
              id: 9,
              title: "Task 9",
              status: "Done",
              description: "This is the ninth task",
            },
          ],
        },
      ];

      // Optionally, save the empty array to local storage
      localStorage.setItem("myData", JSON.stringify(this.data));
    }
  },
  data() {
    return {
      data: [], // Initialize data property
    };
  },

  methods: {
    addTodo(newTodo) {
      // Update todo array for the corresponding status
      this.data[0][newTodo.status].push({
        id: Date.now(), // Generate unique id for the new todo
        title: newTodo.title,
        status: newTodo.status,
        description: newTodo.description, // You can add more properties if needed
      });

      // Store updated data in local storage
      localStorage.setItem("myData", JSON.stringify(this.data));

      // Optionally, update UI to reflect the changes
    },
  },
};
</script>
