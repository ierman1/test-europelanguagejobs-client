<template>
	<div class="col-3 p-3">
		<div class="card">
			<div class="card-body p-0">
				<img :src="'http://192.168.1.53:8000' + dog.filePath" alt="">
			</div>
			<div class="card-footer">
				<p class="fw-bold text-center"><router-link :to="'/dogs/' + dog.id">{{ dog.name }}</router-link></p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DogListItem',
	props: {
		dog: Object
	}
}
</script>

<style lang="scss">
	img {
		max-width: 100%;
	}
</style>