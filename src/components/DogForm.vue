<template>
	<form @submit.prevent="handleSubmit">
		<input type="text" v-model="name"><br>
		<input type="text" v-model="hairColor"><br>
		Small <input type="radio" v-model="size" value="small">
		Medium <input type="radio" v-model="size" value="medium">
		Large <input type="radio" v-model="size" value="large"><br>
		<input type="file" @input="e => this.file = e.target.files[0]"><br>
		<select v-model="breed">
			<option v-for="breed in breeds" v-bind:key="breed.id" :value="breed.id">{{ breed.name }}</option>
		</select>

		<button type="submit">Create</button>
	</form>
</template>

<script>
import Breed from "@/models/Breed";
import Dog from "@/models/Dog";

export default {
	name: 'DogForm',
	data: () => {
		return {
			name: '',
			hairColor: '',
			size: '',
			breed: '',
			file: null,
			breeds: []
		}
	},
	methods: {
		handleSubmit() {
			Dog.create(this.breed, this.name, this.hairColor, this.size, this.file)
				.then(() => {
					window.location.href = '/';
				})
				.catch(console.log)
		}
	},
	mounted() {
		Breed.fetch().then(breeds => {
			breeds.forEach(breed => {
				this.breeds.push(Breed.fromObject(breed));
			})
		});
	}
}
</script>

<style scoped>

</style>