<template>
  <div>
    <h1>PEOPLE INFORMATION</h1>
    <table border="1">
      <tr v-for="item in content">
        <td>id: {{ item.id }}</td>
        <td>name: {{ item.name }}</td>
        <td>age: {{ item.age }}</td>
        <td><button v-on:click="getDetail(item.id)">Click!!!</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "PeopleInfo",
  data() {
    return {
      content: {}
    };
  },
  mounted() {
    this.axios.get("http://localhost:8080/getPeople").then(body => {
      this.content = body.data;
    });
  },
  methods: {
    getDetail(message) {
      this.$router.push({path:`/peopledetail/${message}`});
    }
  }
};
</script>

<style scoped>
</style>