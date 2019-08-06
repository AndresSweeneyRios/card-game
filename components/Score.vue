<template lang="pug">
	section.score 
		h4 Matches: {{ matches }} / 9
		h4 Mismatches: {{ mismatches }}
		Clock(:timestamp="elapsed")
</template>

<style lang="sass" scoped>
	section.score
		display: flex
		width: 100%
		justify-content: center
		align-items: center

		& > *
			// background-color: var(--foreground)
			padding: 1rem
			font-size: 1.3rem
			margin: 3px
			font-weight: 600
			font-variant-numeric: tabular-nums
			letter-spacing: 0.5px

		@media (max-width: 800px)
			& > *
				padding: 0 1rem

			flex-direction: column
			padding: 2rem 0
</style>

<script>
	import Vue from 'vue'
	import Clock from '~/components/Clock'
	import { mapState } from 'vuex'

	export default {
		data () {
			return {
				start: 0,
				elapsed: 0,
			}
		},

		components: {
			Clock
		},

		computed: mapState({
			mismatches: state => state.mismatches,
			matches: state => Object.entries(state.pairs).filter( ([name, bool]) => bool ).length
		}),

		mounted () {
			Vue.set(this, 'start', Date.now())

			this.interval = setInterval(() => Vue.set(
				this,
				'elapsed',
				Date.now() - this.start
			), 1)
		},

		watch: {
			matches ( count ) {
				if (count === 9) clearInterval( this.interval )
			}
		}
	}
</script>
