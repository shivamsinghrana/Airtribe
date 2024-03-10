export const state = () => ({
  tasks: [], // Placeholder for tasks, you should replace this with your actual state
});

export const mutations = {
  setTasks(state, tasks) {
    state.tasks = tasks;
  },
};

export const actions = {
  async fetchTasks({ commit }) {
    // Fetch tasks from an API or local storage and commit mutation to set tasks
    try {
      const tasks = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      ).then((response) => response.json());
      commit("setTasks", tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  },
};
