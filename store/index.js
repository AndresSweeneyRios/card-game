import Vue from 'vue'

export const state = () => ({
	card: null,

	animating: false,

	mismatch: [],
	mismatches: 0,

	pairs: {
		apple: false,
		banana: false,
		pear: false,
		tomato: false,
		corn: false,
		carrot: false,
		onion: false,
		potato: false,
		mushroom: false,
	}
})

const alarm = time => new Promise( resolve => setTimeout(resolve, time) )

export const mutations = {
	selectCard ( state, { name, key } ) {
		if ( state.card ) {
			if (state.card.key === key && key !== '') {
				state.card = null
			} else if (name === state.card.name) {
				state.pairs[name] = true
			} else {
				state.mismatch = [state.card.key, key]
				state.mismatches++
			}

			state.card = null
		} else {
			state.card = { name, key }
		}
	},

	setAnimating ( state, payload ) {
		state.animating = payload
	},
}

export const actions = {
	async selectCard ( context, payload ) {
		context.commit('setAnimating', true)
		await alarm(600)
		context.commit('setAnimating', false)
		context.commit('selectCard', payload)
	}
}