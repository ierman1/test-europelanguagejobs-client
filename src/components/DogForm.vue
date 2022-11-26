<template>
	<form>
		<input type="text" v-model="name"><br>
		<input type="text" v-model="hairColor"><br>
		Small <input type="radio" v-model="breed" value="small">
		Medium <input type="radio" v-model="breed" value="medium">
		Large <input type="radio" v-model="breed" value="large"><br>
		<select v-model="breed">
			<option v-for="breed in breeds" v-bind:key="breed.id" :value="breed.id">{{ breed.name }}</option>
		</select>
	</form>
</template>

<script>
import Breed from "@/models/Breed";

export default {
	name: 'DogForm',
	data: () => {
		return {
			name: '',
			hairColor: '',
			size: '',
			breed: '',
			breeds: []
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