<template>

	<div class="d-flex flex-wrap">
		<DogListItem v-for="dog in dogs" v-bind:key="dog.id" :dog="dog" />
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

<style lang="scss">

</style>