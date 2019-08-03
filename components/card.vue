<template lang="pug">
	section.card( :class="{ show, match }" @click="select" )
		p( v-show="flipped" ) {{ card.name }}
</template>

<script>
	import Vue from 'vue'

	const alarm = time => new Promise( resolve => setTimeout(resolve, time) )

	export default {
		props: ['card'],

		data () {
			return {
				flipped: false,
				show: true
			}
		},

		computed: {
			mismatch () {
				return this.$store.state.mismatch
			},

			match () {
				return this.$store.state.pairs[this.card.name]
			},
		},

		methods: {
			async flip () {
				if (this.match) return
				Vue.set(this, 'show', false)
				await alarm(200)
				Vue.set(this, 'flipped', !this.flipped)
				await alarm(100)
				Vue.set(this, 'show', true)
			},

			async select () {
				this.flip()
				await alarm(100)
				this.$store.dispatch('selectCard', this.card)
				await this.$nextTick()
			}
		},

		watch: {
			mismatch (mismatch) {
				if (mismatch.indexOf(this.card.key) > -1) 
					this.flip()
			}
		}
	}
</script>

<style lang="sass" scoped>
	section.card
		width: 10rem
		height: 15rem
		background-color: var(--foreground)
		transition: transform 0.2s, opacity 0.2s
		transform: scaleX(0)
		margin: 1rem
		cursor: pointer
		opacity: 1

		&.show
			transform: scaleX(1)

		p
			user-select: none
			pointer-events: none

		&.flipped
			transform: scaleX(1)

		&.match
			opacity: 0.5
			pointer-events: none
</style>