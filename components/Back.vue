<template lang="pug">
	canvas( width="20" height="20" ref="canvas" )
</template>

<script>
	export default {
		computed: {
			context () {
				return this.$refs.canvas.getContext('2d')
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
						this.draw(x-2,y-2,`hsl(${(x*y)+(i+(Math.random() * 60)) }, 100%, 80%)`)
			}, 1000/60)
		}
	}
</script>


<style lang="sass" scoped>
	canvas
		// background-color: red

</style>
