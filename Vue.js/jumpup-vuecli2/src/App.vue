<template>
  <div id="app">
    <div id="background" style="background-image: url('./assets/background.jpg');">
      <div id="container">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Content from "./components/content.vue";
import Footer from "./components/footer.vue";
import './reset.css';
import './global.css';

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer,
  }
}
</script>

<style>
</style>
