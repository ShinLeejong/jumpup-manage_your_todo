<script>
import Header from "./components/Header.svelte";
import Content from "./components/Content.svelte";
import Footer from "./components/Footer.svelte";
import background from "./assets/background.jpg";

</script>

<svelte:head>
	<title>Jump Up - Manage Your Todo Simply</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap" rel="stylesheet">
</svelte:head>

<div id="background" style="background-image: url({background});">
	<div id="container">
		<Header />
		<Content />
		<Footer />
	</div>
</div>

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
