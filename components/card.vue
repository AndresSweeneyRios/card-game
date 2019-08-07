<template lang="pug">
	section.card( :class="{ show, match }" @click="select" )
		img( v-show="flipped" :src="require(`~/assets/food/${ card.name }.png`)" )
		Back( v-show="!flipped" )
</template>

<script>
	import Vue from 'vue'
	import { mapState } from 'vuex'
	import Back from '~/components/back'

	const alarm = time => new Promise( resolve => setTimeout(resolve, time) )

	export default {
		props: ['card'],

		data () {
			return {
				flipped: false,
				show: true
			}
		},

		components: {
			Back
		},

		computed: {
			...mapState(['mismatch', 'pairs', 'animating']),
			match: state => state.pairs[state.card.name]
		},

		methods: {
			async flip () {
				Vue.set(this, 'show', false)
				await alarm(200)
				Vue.set(this, 'flipped', !this.flipped)
				await alarm(50)
				Vue.set(this, 'show', true)
			},

			async select () {
				if (this.match || this.animating) return
				this.flip()
				this.$store.dispatch('selectCard', this.card)
			}
		},

		watch: {
			mismatch (mismatch) {
				if ( ~mismatch.indexOf(this.card.key) ) this.flip()
			}
		}
	}
</script>

<style lang="sass" scoped>
	section.card
		width: 20rem
		height: 0
		background-color: var(--foreground)
		transition: transform 0.15s, opacity 0.15s
		transform: scaleX(0)
		border: 3px solid var(--background)
		cursor: pointer
		opacity: 1
		position: relative
		padding-top: 25rem
		overflow: hidden
		max-width: 45%
		background-color: white
		display: flex
		justify-content: center
		align-items: center

		img
			height: 60%
			position: absolute
			top: 21%

		&.show
			transform: scaleX(1)

		p
			user-select: none
			pointer-events: none
			position: absolute
			height: 100%
			width: 100%
			top: 0
			left: 0
			display: flex
			justify-content: center
			align-items: center

		&.flipped
			transform: scaleX(1)

		&.match
			opacity: 0.5
			pointer-events: none
</style>