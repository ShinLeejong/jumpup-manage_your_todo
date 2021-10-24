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

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer,
  }
}
</script>

<style scoped>
	#background {
		background-repeat: no-repeat;
		background-size: cover;
		animation-duration: 0.5s;
		animation-name: fadein;
	}

	#container {
		display: flex;
		height: 100vh;
		flex-direction: column;
	}
</style>
