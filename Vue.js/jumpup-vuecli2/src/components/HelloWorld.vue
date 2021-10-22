<template>
  <div id="container">
    <section>
      <ul v-for="obj in arr" :key="obj.name">
        <li>
          <strong>
            {{obj.name}}
          </strong>
        </li>
        <li>
          {{obj.major}}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      arr: [
        {
          name: "Lee",
          major: "Software Engineering"
        },
        {
          name: "Another Guy",
          major: "Sports"
        }
      ]
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
