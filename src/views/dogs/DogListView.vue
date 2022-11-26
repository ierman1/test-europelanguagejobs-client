<template>
	<div>
		<router-link to="/dogs/create">Add another dog</router-link>
		<DogList />
	</div>
</template>

<script>
import DogList from "@/components/DogList";

export default {
	name: 'DogListView',
	components: {
		DogList
	}
}
</script>
