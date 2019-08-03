<template lang="pug">
	section.card( :class="match && 'active'" )
		p {{ card.name }}
</template>

<script>
	export default {
		props: ['card'],

		computed: {
			choosing () {
				return this.$store.state.choosing
			},

			match () {
				const { pairs, lastCard } = this.$store.state
				return pairs[this.card.name] || (lastCard && lastCard.key) === this.card.key
			},
		}
	}
</script>

<style lang="sass" scoped>
	section.card
		width: 10rem
		height: 15rem
		background-color: var(--foreground)
		transition: scaleX 0.5s
		transfrom: scaleX(1)
		margin: 1rem
</style>
