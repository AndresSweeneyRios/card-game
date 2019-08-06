<template lang="pug">
	section#clock {{ time }}
</template>

<style lang="sass" scoped>
	section#clock
		// margin-left: auto
</style>

<script>
	export default {
		props: ['timestamp'],
		
		computed: {
			time () {
				const { timestamp } = this

				// H:M:S:MS
				return new Date( timestamp ).toUTCString().split(' ')[4] + `:${
					(Math.round(timestamp % 1000 / (1000 / 60)) + '').padStart(2,0)
				}`
			}
		}
	}
</script>
