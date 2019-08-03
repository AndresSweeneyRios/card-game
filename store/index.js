import Vue from 'vue'

export const state = () => ({
	currentCard: null,
	lastCard: null,

	mismatch: [],

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
		if ( state.lastCard && (name === state.lastCard.name) && (key !== state.lastCard.key) ) {
			Vue.set(state, 'currentCard', null)
			Vue.set(state, 'lastCard', null)
			Vue.set(state.pairs, name, true)
		} else if ( state.currentCard ) {
			Vue.set(state, 'mismatch', [state.currentCard.key, key])
			Vue.set(state, 'currentCard', null)
			Vue.set(state, 'lastCard', null)
		} else {
			Vue.set(state, 'currentCard', { name, key })
			Vue.set(state, 'lastCard', { name, key })
		}
	}
}

export const actions = {
	async selectCard (context, payload) {
		await alarm(400)
		context.commit('selectCard', payload)
	}
}