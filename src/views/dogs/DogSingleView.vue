<template>
	<DogSingle :id="$route.params.id" />
</template>

<script>
import DogSingle from "@/components/DogSingle";

export default {
	name: 'DogSingleView',
	components: {
		DogSingle
	}
}
</script>

<style scoped>

</style>