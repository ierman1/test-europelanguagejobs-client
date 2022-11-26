<template>
	<form @submit.prevent="handleSubmit">
		<div class="form-group">
			<label for="name">Name</label>
			<input type="text" v-model="name" :class="'form-control ' + (errors.name ? 'is-invalid' : '')" id="name">
			<div v-if="errors.name" class="invalid-feedback">
				{{ errors.name.join() }}
			</div>
		</div>
		<div class="form-group mt-3">
			<label for="hair-color">Hair color</label>
			<input type="text" v-model="hairColor" :class="'form-control ' + (errors.hair_color ? 'is-invalid' : '')" id="hair-color">
			<div v-if="errors.hair_color" class="invalid-feedback">
				{{ errors.hair_color.join() }}
			</div>
		</div>
		<div class="form-check mt-3">
			<input :class="'form-check-input ' + (errors.size ? 'is-invalid' : '')" type="radio" v-model="size" value="small" id="size-small">
			<label class="form-check-label" for="size-small">
				Small
			</label>
		</div>
		<div class="form-check">
			<input :class="'form-check-input ' + (errors.size ? 'is-invalid' : '')" type="radio" v-model="size" value="medium" id="size-medium">
			<label class="form-check-label" for="size-medium">
				Medium
			</label>
		</div>
		<div class="form-check">
			<input :class="'form-check-input ' + (errors.size ? 'is-invalid' : '')" type="radio" v-model="size" value="large" id="size-large">
			<label class="form-check-label" for="size-large">
				Large
			</label>
			<div v-if="errors.size" class="invalid-feedback">
				{{ errors.size.join() }}
			</div>
		</div>
		<div class="form-group mt-3">
			<label>Breed</label>
			<select v-model="breed" :class="'form-select ' + (errors.breed_id ? 'is-invalid' : '')">
				<option v-for="breed in breeds" v-bind:key="breed.id" :value="breed.id">{{ breed.name }}</option>
			</select>
			<div v-if="errors.breed_id" class="invalid-feedback">
				{{ errors.breed_id.join() }}
			</div>
		</div>
		<div class="form-group mt-3">
			<label for="name">Picture</label>
			<input type="file" @input="e => this.file = e.target.files[0]" :class="'form-control ' + (errors.file ? 'is-invalid' : '')">
			<div v-if="errors.file" class="invalid-feedback">
				{{ errors.file.join() }}
			</div>
		</div>

		<div class="mt-5">
			<button type="submit" class="btn btn-primary">Create</button>
			<router-link class="btn btn-secondary ms-2" to="/">Go back to the list</router-link>
		</div>
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
			errors: {},
			breeds: []
		}
	},
	methods: {
		handleSubmit() {
			this.errors = {};

			Dog.create(this.breed, this.name, this.hairColor, this.size, this.file)
				.then(response => {
					if (response.message != undefined) {
						window.location.href = '/';
					} else {
						console.log(response.message)
						this.errors = response;
					}
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