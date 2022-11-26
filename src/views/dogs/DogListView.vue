<template>
	<div class="">
		<div class="p-3">
			<router-link class="btn btn-primary" to="/dogs/create">Add another dog</router-link>
		</div>
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
