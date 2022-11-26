<template>
	<div class="p-3">
		<router-link class="btn btn-primary" to="/">Go back to the list</router-link>
	</div>
	<div v-if="dog" class="p-3">
		<div class="row">
			<div class="col-3">
				<img class="rounded aspect-ratio-1x1" :src="'http://192.168.1.53:8000' + dog.filePath" alt="Dog picture">
			</div>
			<div class="col-9">
				<h1>{{ dog.name }}</h1>
				<p class="mt-4"><span class="fw-bold">Breed: </span>{{ dog.breed.name }}</p>
				<p><span class="fw-bold">Size: </span><span class="text-capitalize">{{ dog.size }}</span></p>
				<p><span class="fw-bold">Hair color: </span>{{ dog.hairColor }}</p>
			</div>
		</div>
	</div>
	<div v-if="error" class="alert alert-danger m-3">Dog not found.</div>
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