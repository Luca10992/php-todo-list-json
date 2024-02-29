const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "PHP ToDo List JSON",
      todoList: [],
      addTask: "",
    };
  },

  mounted() {
    this.fetchTodoList();
  },

  methods: {
    fetchTodoList() {
      axios.get("../back-end/get-list.php").then((res) => {
        this.todoList = res.data;
      });
    },

    saveTask() {
      const newTask = this.addTask;
      this.addTask = "";
      const data = { newTask: newTask };
      const params = { headers: { "Content-Type": "multipart/form-data" } };
      axios.post("../back-end/save-task.php", data, params).then((res) => {
        this.todoList = res.data;
      });
    },

    deleteTask(index) {
      const dataToDelete = { index: index };
      const params = { headers: { "Content-Type": "multipart/form-data" } };
      axios
        .post("../back-end/delete-task.php", dataToDelete, params)
        .then((res) => {
          this.todoList = res.data;
        });
    },

    statusTask(index) {
      const dataToDelete = { index: index };
      const params = { headers: { "Content-Type": "multipart/form-data" } };
      axios
        .post("../back-end/status-task.php", dataToDelete, params)
        .then((res) => {
          this.todoList = res.data;
        });
    },
  },
});
app.mount("#app");
