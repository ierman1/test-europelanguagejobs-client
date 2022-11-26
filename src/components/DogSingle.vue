<template>
	<div v-if="dog" class="dog">
		<p>{{ dog.name }}</p>
		<p>{{ dog.breed.name }}</p>
		<p>{{ dog.size }}</p>
	</div>
	<span v-if="error">Dog not found.</span>
</template>

<script>
import Dog from "@/models/Dog";

export default {
	name: 'DogSingle',
	props: {
		id: String
	},
	data: () => {
		return {
			dog: null,
			error: false
		}
	},
	mounted() {
		Dog.find(this.id).then(dog => {
			this.dog = Dog.fromObject(dog);
		}).catch(() => { this.error = true })
	}
}
</script>

<style scoped>

</style>