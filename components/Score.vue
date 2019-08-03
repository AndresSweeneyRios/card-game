<template lang="pug">
	section
</template>

<script>
	export default {
		data () {
			return {
				mismatches: 0
			}
		},

		computed: {
			matched () {
				return this.$store.state.pairs.filter( Boolean ).length
			}
		},
	}
</script>
