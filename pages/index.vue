<template lang="pug">
	section.game
		Score

		Card(
			v-for="card of cards"
			:card="card"
			:key="card.key"
		)

</template>

<style lang="sass" scoped>
	section.game
		display: flex
		justify-content: center
		align-items: center
		flex-wrap: wrap
</style>

<script>
	import Card from '~/components/card'
	import Score from '~/components/score'

	export default {
		components: {
			Card,
			Score,
		},
		created () {
			const shuffle = array => {
				let currentIndex = array.length, temporaryValue, randomIndex

				while (0 !== currentIndex) {
					randomIndex = Math.floor(Math.random() * currentIndex)
					currentIndex -= 1
					temporaryValue = array[currentIndex]
					array[currentIndex] = array[randomIndex]
					array[randomIndex] = temporaryValue
				}

				return array
			}

			this.cards = shuffle(
				Object.keys(this.$store.state.pairs).reduce(
					(acc, name) => acc.concat(
						{ name, key: name + 1 },
						{ name, key: name + 2 }
					), []
				)
			)
		}
	}
</script>