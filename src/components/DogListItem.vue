<template>
	<div class="dog">
		<img :src="'http://192.168.1.53:8000' + dog.filePath" alt="">
		<p>{{ dog.name }}</p>
		<router-link :to="'/dogs/' + dog.id">Visit page</router-link>
	</div>
</template>

<script>
export default {
	name: 'DogListItem',
	props: {
		dog: Object
	}
}
</script>

<style lang="scss">
	.dog {
		margin: 20px;

		img {
			height: 100px;
		}
	}
</style>