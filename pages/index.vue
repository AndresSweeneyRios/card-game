<template lang="pug">
	section
		Score

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
	import Card from '~/components/Card'
	import Score from '~/components/Score'

	export default {
		components: {
			Card,
			Score,
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