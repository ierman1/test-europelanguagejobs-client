<template>
	<div class="dog">
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

<style scoped>

</style>