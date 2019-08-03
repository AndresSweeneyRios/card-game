export const state = () => ({
	choosing: false,
	lastCard: null,

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

export const mutations = {
	selectCard ( state, { name, key } ) {
		if ( name === state.lastCard.name ) {
			Vue.set(state, 'choosing', false)
			Vue.set(state, 'lastCard', null)
			Vue.set(state.pairs, card, true)
		} else if ( state.choosing === true ) {
			Vue.set(state, 'choosing', false)
			Vue.set(state, 'lastCard', null)
		} else {
			Vue.set(state, 'choosing', true)
			Vue.set(state, 'lastCard', { name, key })
		}
	}
}

export const actions = {
    nuxtServerInit ({ commit }, { req }) {
		
    }
}