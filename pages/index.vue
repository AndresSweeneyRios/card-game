<template lang="pug">
	section
		Card(
			v-for="card of cards"
			:card="card"
			:key="card.key"
		)

</template>

<style lang="sass" scoped>
	section
		display: flex
		justify-content: center
		align-items: center
		flex-wrap: wrap
</style>

<script>
	import Card from '~/components/card'

	export default {
		components: {
			Card
		},

		created () {
			this.cards = Object.keys(this.$store.state.pairs).reduce(
				(acc, name) => acc.concat(
					{ name, key: name + 1 },
					{ name, key: name + 2 }
				), []
			)
		}
	}
</script>