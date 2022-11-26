<template>

	<div>
		<div v-for="dog in dogs" v-bind:key="dog.id">
			<DogListItem :dog="dog" />
		</div>
	</div>

</template>

<script>
import Dog from "@/models/Dog";
import DogListItem from "@/components/DogListItem";

export default {
	name: 'DogList',
	components: {
		DogListItem
	},
	data: () => {
		return {
			dogs: []
		}
	},
	mounted() {
		Dog.fetch().then(dogs => {
			dogs.forEach(dog => this.dogs.push(Dog.fromObject(dog)))
		})
	}
}
</script>

<style scoped>

</style>