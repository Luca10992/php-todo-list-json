const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "PHP ToDo List JSON",
    };
  },
});
app.mount("#app");
