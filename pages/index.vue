<template lang="pug">
	section.game
		Score

		Card(
			v-for="card of cards"
			:card="card"
			:key="card.key"
		)

		div.footer
			a( href="https://github.com/Andr3wRiv3rs/card-game" ) GitHub
</template>

<style lang="sass" scoped>
	section.game
		display: flex
		justify-content: center
		align-items: center
		flex-wrap: wrap

		.footer
			display: flex
			width: 100%
			height: 4rem
			align-items: center
			justify-content: center

			a
				opacity: 0.8

				&:hover
					opacity: 1
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