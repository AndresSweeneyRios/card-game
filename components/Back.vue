<template lang="pug">
	canvas( width="20" height="20" ref="canvas" :style="{ transform: `rotate(${rotation}deg)` }" )
</template>

<script>
	import Vue from 'vue'

	export default {
		computed: {
			context () {
				return this.$refs.canvas.getContext('2d')
			}
		},

		data () {
			return {
				rotation: 45
			}
		},

		methods: {
			draw ( x, y, color ) {
				this.context.fillStyle = color
				this.context.fillRect(x,y,1,1)
			},

			clear ( x, y, w, h ) {
				this.context.clearRect(x,y,w,h)
			},
		},

		mounted () {
			let i = 0;

			setInterval( () => {
				i++

				for ( let x = 21; x; x-- )
					for ( let y = 0; y <= 21; y++ )
						this.draw(x-2,y-2,`hsl(${(x*y)+(i*2) }, 100%, 80%)`)
			}, 50)
		}
	}
</script>


<style lang="sass" scoped>
	canvas
		position: absolute
		left: -50%
		height: 300%
		image-rendering: pixelated
		z-index: 4
		top: -50%
		

</style>
